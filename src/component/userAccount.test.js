import { getUserModerationParticipation } from './userAccount';

beforeEach(() => {
  window.localStorage.clear();
});

test('keeps moderation visible for profiles without a saved preference', () => {
  expect(getUserModerationParticipation()).toBe(true);

  window.localStorage.setItem('edu.userProfile', JSON.stringify({
    photo: '',
    favoriteSubjects: [],
  }));
  expect(getUserModerationParticipation()).toBe(true);
});

test('reads the saved moderation participation preference', () => {
  window.localStorage.setItem('edu.userProfile', JSON.stringify({
    photo: '',
    favoriteSubjects: [],
    participatesInModeration: false,
  }));

  expect(getUserModerationParticipation()).toBe(false);
});
