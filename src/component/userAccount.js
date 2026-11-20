const ACCOUNT_STORAGE_KEY = 'edu.userAccount';
const PROFILE_STORAGE_KEY = 'edu.userProfile';

export function getUserAccount() {
  const savedAccount = window.localStorage.getItem(ACCOUNT_STORAGE_KEY);
  if (savedAccount === null) {
    return null;
  }

  const account = JSON.parse(savedAccount);
  if (
    !account ||
    typeof account.name !== 'string' ||
    typeof account.username !== 'string'
  ) {
    throw new Error('Os dados da conta estão em um formato inválido.');
  }

  return account;
}

export function getUserProfilePhoto() {
  const savedProfile = window.localStorage.getItem(PROFILE_STORAGE_KEY);
  if (savedProfile === null) {
    return '';
  }

  const profile = JSON.parse(savedProfile);
  if (
    !profile ||
    typeof profile.photo !== 'string' ||
    (profile.photo !== '' && !profile.photo.startsWith('data:image/'))
  ) {
    throw new Error('A foto do perfil está em um formato inválido.');
  }

  return profile.photo;
}

export function getUserModerationParticipation() {
  const savedProfile = window.localStorage.getItem(PROFILE_STORAGE_KEY);
  if (savedProfile === null) {
    return true;
  }

  const profile = JSON.parse(savedProfile);
  if (
    !profile ||
    typeof profile !== 'object' ||
    Array.isArray(profile) ||
    (profile.participatesInModeration !== undefined &&
      typeof profile.participatesInModeration !== 'boolean')
  ) {
    throw new Error('A preferência de moderação está em um formato inválido.');
  }

  return profile.participatesInModeration === undefined
    ? true
    : profile.participatesInModeration;
}

export function saveUserAccount(account) {
  window.localStorage.setItem(ACCOUNT_STORAGE_KEY, JSON.stringify(account));
  window.dispatchEvent(new Event('edu:user-account-updated'));
}

export function logoutUser() {
  window.localStorage.removeItem(ACCOUNT_STORAGE_KEY);
  window.localStorage.removeItem(PROFILE_STORAGE_KEY);
  window.dispatchEvent(new Event('edu:user-account-updated'));
  window.dispatchEvent(new Event('edu:user-profile-updated'));
}
