import { ENEM2025 } from './Database';

test('every ENEM 2025 question has a subject tag', () => {
  expect(ENEM2025).not.toHaveLength(0);
  expect(ENEM2025.every((question) => typeof question.tags[0] === 'string')).toBe(true);
});

test('adds subject tags without removing existing question tags', () => {
  const questionTags = ENEM2025.find((question) => question.id === 1).tags;

  expect(questionTags[0]).toBe('Língua Inglesa');
  expect(questionTags).toEqual(expect.arrayContaining([
    'Halloween',
    'indígena',
    'racismo',
    'apropriação cultural',
  ]));
  expect(ENEM2025.find((question) => question.id === 48).tags[0]).toBe('Filosofia');
});
