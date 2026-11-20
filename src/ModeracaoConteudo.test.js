import { fireEvent, render, screen, within } from '@testing-library/react';
import ModeracaoConteudo from './ModeracaoConteudo';
import { dataSets } from './component/Database';
import { getContentEntries } from './component/contentRegistry';

beforeEach(() => {
  window.localStorage.clear();
});

test('rejects a submission with multiple selected reasons and saves them', () => {
  render(<ModeracaoConteudo />);

  fireEvent.click(screen.getByRole('button', { name: 'Rejeitar' }));

  const dialog = screen.getByRole('dialog', {
    name: 'Por que este conteúdo está sendo rejeitado?',
  });
  const confirmButton = within(dialog).getByRole('button', { name: 'Confirmar rejeição' });
  expect(within(dialog).getByLabelText('Linguagem ofensiva')).toBeInTheDocument();
  expect(confirmButton).toBeDisabled();

  fireEvent.click(within(dialog).getByLabelText('Fonte não confiável'));
  fireEvent.click(within(dialog).getByLabelText('Linguagem ofensiva'));
  expect(confirmButton).toBeEnabled();
  fireEvent.click(confirmButton);

  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  const rejectedEntry = getContentEntries(dataSets.conteudos).find(
    (entry) => entry.id === 'example-content-algebra'
  );
  expect(rejectedEntry.status).toBe('rejected');
  expect(rejectedEntry.rejectionReasons).toEqual([
    'Fonte não confiável',
    'Linguagem ofensiva',
  ]);
});

test('opens a read-only review when incorrect information is selected', () => {
  render(<ModeracaoConteudo />);

  fireEvent.click(screen.getByRole('button', { name: 'Rejeitar' }));
  const reasonDialog = screen.getByRole('dialog', {
    name: 'Por que este conteúdo está sendo rejeitado?',
  });
  fireEvent.click(within(reasonDialog).getByLabelText('Informação incorreta'));

  const reviewDialog = screen.getByRole('dialog', {
    name: 'Revisar informações do conteúdo',
  });
  const titleInput = within(reviewDialog).getByLabelText('Título');
  expect(titleInput).toHaveAttribute('readonly');

  fireEvent.click(
    within(reviewDialog).getByRole('button', { name: 'Marcar Título como incorreto' })
  );
  expect(titleInput.closest('.moderation-review-field')).toHaveClass('is-incorrect');

  const tagMarkButton = within(reviewDialog).getByRole('button', {
    name: 'Marcar tag matemática como incorreta',
  });
  fireEvent.click(tagMarkButton);
  expect(tagMarkButton.closest('li')).toHaveClass('is-incorrect');
  expect(tagMarkButton).toHaveAttribute('aria-pressed', 'true');

  const categorySelect = within(reviewDialog).getByLabelText('Categoria');
  fireEvent.change(categorySelect, { target: { value: 'Astronomia' } });
  expect(categorySelect.closest('.moderation-review-field')).toHaveClass('is-changed');
  expect(
    within(categorySelect).getByRole('option', { name: 'Matemática (original)' })
  ).toHaveClass('moderation-review-original-option');
  expect(
    within(within(reviewDialog).getByLabelText('Subcategoria')).getByRole('option', {
      name: 'Álgebra (original)',
    })
  ).toHaveClass('moderation-review-original-option');
  fireEvent.change(categorySelect, { target: { value: 'Matemática' } });
  expect(categorySelect.closest('.moderation-review-field')).not.toHaveClass('is-changed');

  fireEvent.click(within(reviewDialog).getByRole('button', { name: 'Voltar aos motivos' }));
  const returnedDialog = screen.getByRole('dialog', {
    name: 'Por que este conteúdo está sendo rejeitado?',
  });
  expect(within(returnedDialog).getByLabelText('Informação incorreta')).toBeChecked();
});

test('cancelling the dialog leaves the submission pending', () => {
  render(<ModeracaoConteudo />);

  fireEvent.click(screen.getByRole('button', { name: 'Rejeitar' }));
  const dialog = screen.getByRole('dialog');
  fireEvent.click(within(dialog).getByRole('button', { name: 'Cancelar' }));

  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Rejeitar' })).toBeInTheDocument();
  expect(
    getContentEntries(dataSets.conteudos).find(
      (entry) => entry.id === 'example-content-algebra'
    ).status
  ).toBe('pending');
});
