import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import VerMateria from '../VerMateria';
import Referencias from './Referencias';
import {
  approveContentEntry,
  getContentEntries,
  getContentReports,
  saveContentEntry,
} from './contentRegistry';

jest.mock('react-router-dom', () => {
  const mockedReact = require('react');
  return {
    Link: ({ children, to, ...props }) =>
      mockedReact.createElement('a', { href: to, ...props }, children),
    useParams: () => ({ slug: 'Matemática' }),
  };
});

beforeEach(() => {
  window.localStorage.clear();
});

function createApprovedContent() {
  const [entry] = saveContentEntry({
    title: 'Revisão de álgebra',
    type: 'video',
    category: 'Matemática',
    subcategory: 'Álgebra',
    link: 'https://example.com/algebra',
    tags: ['álgebra'],
    createdAt: new Date().toISOString(),
  });
  approveContentEntry(entry.id);
  return entry;
}

test('shows a subject-specific report option from a subject page', () => {
  createApprovedContent();

  render(<VerMateria />);

  expect(
    screen.getByRole('link', { name: 'https://example.com/algebra' })
  ).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Denunciar Revisão de álgebra' }));

  expect(
    screen.getByLabelText('Irrelevante para Matemática')
  ).toBeInTheDocument();
});

test('shows a report action and persists reports from exam references', () => {
  const entry = createApprovedContent();

  render(<Referencias questionTags={['álgebra']} subjectName="Matemática" />);

  expect(
    screen.getByRole('link', { name: 'https://example.com/algebra' })
  ).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Denunciar Revisão de álgebra' }));
  fireEvent.click(screen.getByLabelText('Fonte não confiável'));
  fireEvent.click(screen.getByLabelText('Irrelevante para Matemática'));
  fireEvent.click(screen.getByRole('button', { name: 'Enviar denúncia' }));

  expect(screen.getByText('Sua denúncia foi registrada.')).toBeInTheDocument();
  expect(getContentReports()).toEqual([
    expect.objectContaining({
      contentId: entry.id,
      reasons: ['Fonte não confiável', 'Irrelevante para Matemática'],
      subjectName: 'Matemática',
    }),
  ]);
});

test('opens the incorrect-information review and includes marked fields in the report', () => {
  const entry = createApprovedContent();

  render(<Referencias questionTags={['álgebra']} subjectName="Matemática" />);

  fireEvent.click(screen.getByRole('button', { name: 'Denunciar Revisão de álgebra' }));
  fireEvent.click(screen.getByLabelText('Informação incorreta'));

  const reviewDialog = screen.getByRole('dialog', {
    name: 'Revisar informações do conteúdo',
  });
  const titleInput = screen.getByLabelText('Título');
  expect(titleInput).toHaveAttribute('readonly');
  fireEvent.click(
    within(reviewDialog).getByRole('button', {
      name: 'Marcar Título como incorreto',
    })
  );
  fireEvent.click(
    within(reviewDialog).getByRole('button', {
      name: 'Marcar tag álgebra como incorreta',
    })
  );
  fireEvent.change(within(reviewDialog).getByLabelText('Categoria'), {
    target: { value: 'Astronomia' },
  });
  fireEvent.click(
    within(reviewDialog).getByRole('button', { name: 'Voltar aos motivos' })
  );

  const reportDialog = screen.getByRole('dialog', { name: 'Denunciar conteúdo' });
  expect(within(reportDialog).getByLabelText('Informação incorreta')).toBeChecked();
  fireEvent.click(within(reportDialog).getByRole('button', { name: 'Enviar denúncia' }));

  expect(getContentReports()).toEqual([
    expect.objectContaining({
      contentId: entry.id,
      reasons: ['Informação incorreta'],
      incorrectFields: ['title', 'tag:0', 'category', 'subcategory'],
    }),
  ]);
});

test('confirms content deletion in the Farol dialog', () => {
  const entry = createApprovedContent();

  render(<VerMateria />);

  fireEvent.click(screen.getByRole('button', { name: `Excluir ${entry.title}` }));
  let dialog = screen.getByRole('alertdialog', { name: 'Excluir conteúdo?' });
  expect(within(dialog).getByText(`Tem certeza que deseja excluir “${entry.title}”?`))
    .toBeInTheDocument();

  fireEvent.click(within(dialog).getByRole('button', { name: 'Cancelar' }));
  expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument();
  expect(screen.getByText(entry.title)).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: `Excluir ${entry.title}` }));
  dialog = screen.getByRole('alertdialog', { name: 'Excluir conteúdo?' });
  fireEvent.click(within(dialog).getByRole('button', { name: 'Excluir conteúdo' }));

  expect(screen.queryByText(entry.title)).not.toBeInTheDocument();
  expect(getContentEntries()).not.toContainEqual(
    expect.objectContaining({ id: entry.id })
  );
});
