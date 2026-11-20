import {
  getContentReports,
  getContentEntries,
  rejectContentEntry,
  reportContentEntry,
  saveContentEntry,
} from './contentRegistry';
import { dataSets } from './Database';

beforeEach(() => {
  window.localStorage.clear();
});

test('rejects invalid or empty reason lists', () => {
  expect(() => rejectContentEntry('example-content-algebra', [])).toThrow(
    'Selecione pelo menos um motivo válido para rejeitar o conteúdo.'
  );
  expect(() =>
    rejectContentEntry('example-content-algebra', ['Motivo inválido'])
  ).toThrow('Selecione pelo menos um motivo válido para rejeitar o conteúdo.');
});

test('reads reasons saved for built-in example submissions', () => {
  const rejectionReasons = ['Linguagem ofensiva'];
  rejectContentEntry('example-content-algebra', rejectionReasons);

  const rejectedEntry = getContentEntries(dataSets.conteudos).find(
    (entry) => entry.id === 'example-content-algebra'
  );
  expect(rejectedEntry.status).toBe('rejected');
  expect(rejectedEntry.rejectionReasons).toEqual(rejectionReasons);
});

test('stores rejection reasons on submitted content entries', () => {
  const [submittedEntry] = saveContentEntry({
    title: 'Video de teste',
    type: 'video',
    category: 'Matemática',
    subcategory: 'Álgebra',
    link: 'https://example.com/video',
    tags: [],
    createdAt: new Date().toISOString(),
  });
  const rejectionReasons = ['Informação incorreta', 'Linguagem ofensiva'];

  rejectContentEntry(submittedEntry.id, rejectionReasons);

  const rejectedEntry = getContentEntries().find(
    (entry) => entry.id === submittedEntry.id
  );
  expect(rejectedEntry.status).toBe('rejected');
  expect(rejectedEntry.rejectionReasons).toEqual(rejectionReasons);
});

test('stores content reports separately from content status', () => {
  const reasons = [
    'Informação incorreta',
    'Irrelevante para Matemática',
  ];

  reportContentEntry('example-content-algebra', reasons, 'Matemática');

  expect(getContentReports()).toEqual([
    expect.objectContaining({
      contentId: 'example-content-algebra',
      reasons,
      subjectName: 'Matemática',
    }),
  ]);
  expect(
    getContentEntries(dataSets.conteudos).find(
      (entry) => entry.id === 'example-content-algebra'
    ).status
  ).toBe('pending');
});

test('rejects invalid content report reasons', () => {
  expect(() =>
    reportContentEntry('example-content-algebra', [], 'Matemática')
  ).toThrow('Selecione pelo menos um motivo válido para denunciar o conteúdo.');
  expect(() =>
    reportContentEntry(
      'example-content-algebra',
      ['Irrelevante para Física'],
      'Matemática'
    )
  ).toThrow('Selecione pelo menos um motivo válido para denunciar o conteúdo.');
});
