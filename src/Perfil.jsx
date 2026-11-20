import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dataSets } from './component/Database';
import { getUserAccount, logoutUser } from './component/userAccount';
import './component/css/perfil.css';

const PROFILE_STORAGE_KEY = 'edu.userProfile';
const EMPTY_PROFILE = {
  photo: '',
  favoriteSubjects: [],
  difficultSubjects: [],
  participatesInModeration: true,
};

function Perfil() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('Usuário');
  const [hasAccount, setHasAccount] = useState(false);
  const [profile, setProfile] = useState(EMPTY_PROFILE);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      const account = getUserAccount();
      if (account) {
        setUserName(account.name || account.username);
        setHasAccount(true);
      }

      const savedProfile = window.localStorage.getItem(PROFILE_STORAGE_KEY);
      if (savedProfile === null) {
        return;
      }

      const parsedProfile = JSON.parse(savedProfile);
      const difficultSubjects = parsedProfile?.difficultSubjects || [];
      const participatesInModeration = parsedProfile?.participatesInModeration === undefined
        ? true
        : parsedProfile.participatesInModeration;
      if (
        !parsedProfile ||
        typeof parsedProfile.photo !== 'string' ||
        !Array.isArray(parsedProfile.favoriteSubjects) ||
        !parsedProfile.favoriteSubjects.every((slug) => typeof slug === 'string') ||
        !Array.isArray(difficultSubjects) ||
        !difficultSubjects.every((slug) => typeof slug === 'string') ||
        typeof participatesInModeration !== 'boolean'
      ) {
        throw new Error('Os dados do perfil estão em um formato inválido.');
      }

      setProfile({
        ...EMPTY_PROFILE,
        ...parsedProfile,
        difficultSubjects,
        participatesInModeration,
      });
    } catch (loadError) {
      console.error('Não foi possível carregar o perfil.', loadError);
      setError('Não foi possível carregar os dados do perfil.');
    }
  }, []);

  function handlePhotoChange(event) {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    if (!file.type.startsWith('image/')) {
      setError('Escolha um arquivo de imagem.');
      event.target.value = '';
      return;
    }

    if (file.size > 1024 * 1024) {
      setError('A foto deve ter no máximo 1 MB.');
      event.target.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result !== 'string') {
        setError('Não foi possível carregar a foto.');
        return;
      }

      setProfile((currentProfile) => ({ ...currentProfile, photo: reader.result }));
      setError('');
      setMessage('');
    };
    reader.onerror = () => {
      setError('Não foi possível carregar a foto.');
    };
    reader.readAsDataURL(file);
  }

  function handleSubjectChange(field, subjectSlug, isSelected) {
    setProfile((currentProfile) => ({
      ...currentProfile,
      [field]: isSelected
        ? [...new Set([...currentProfile[field], subjectSlug])]
        : currentProfile[field].filter((slug) => slug !== subjectSlug),
    }));
    setMessage('');
  }

  function handleSubmit(event) {
    event.preventDefault();
    try {
      window.localStorage.setItem(
        PROFILE_STORAGE_KEY,
        JSON.stringify(profile)
      );
      window.dispatchEvent(new Event('edu:user-profile-updated'));
      setError('');
      setMessage('Perfil salvo.');
    } catch (saveError) {
      console.error('Não foi possível salvar o perfil.', saveError);
      setMessage('');
      setError('Não foi possível salvar o perfil. Tente novamente.');
    }
  }

  function handleLogout() {
    try {
      logoutUser();
      navigate('/');
    } catch (logoutError) {
      console.error('Não foi possível encerrar a sessão.', logoutError);
      setError('Não foi possível sair. Tente novamente.');
    }
  }

  const initials = userName.trim().charAt(0).toUpperCase() || 'U';

  return (
    <div className="profile-page">
      <header className="profile-header">
        <div>
          <h1>{userName}</h1>
          <p>Gerencie sua foto e matérias favoritas.</p>
        </div>
        {hasAccount && (
          <button className="profile-logout-button" type="button" onClick={handleLogout}>
            Sair
          </button>
        )}
      </header>

      <form className="profile-form" onSubmit={handleSubmit}>
        <section className="profile-card" aria-label="Informações do perfil">
          <label className="profile-photo-upload">
            <span className="profile-photo-slot">
              {profile.photo ? (
                <img src={profile.photo} alt="Foto do perfil" />
              ) : (
                <span aria-hidden="true">{initials}</span>
              )}
            </span>
            <span className="profile-photo-caption">Adicionar foto</span>
            <input
              type="file"
              accept="image/*"
              aria-label="Escolher foto de perfil"
              onChange={handlePhotoChange}
            />
          </label>

          <div className="profile-name-field">
            <span className="profile-name-label">Nome do usuário</span>
            <strong>{userName}</strong>
          </div>
        </section>

        <div className="profile-subject-groups">
        <section className="profile-favorites" aria-labelledby="profile-favorites-title">
          <div className="profile-section-heading">
            <h2 id="profile-favorites-title">Matérias favoritas</h2>
            <p>Selecione as matérias que você quer destacar no seu perfil.</p>
          </div>
          <ul className="profile-subject-list">
            {dataSets.materias.map((subject) => (
              <li key={subject.slug}>
                <label className="profile-subject-option">
                  <input
                    type="checkbox"
                    checked={profile.favoriteSubjects.includes(subject.slug)}
                    onChange={(event) =>
                      handleSubjectChange('favoriteSubjects', subject.slug, event.target.checked)
                    }
                  />
                  <span
                    className="profile-subject-color"
                    style={{ backgroundColor: subject.color }}
                    aria-hidden="true"
                  />
                  <span>{subject.name}</span>
                </label>
              </li>
            ))}
          </ul>
        </section>

        <section className="profile-favorites" aria-labelledby="profile-difficult-title">
          <div className="profile-section-heading">
            <h2 id="profile-difficult-title">Matérias com mais dificuldade</h2>
            <p>Selecione as matérias em que você gostaria de receber mais apoio.</p>
          </div>
          <ul className="profile-subject-list">
            {dataSets.materias.map((subject) => (
              <li key={subject.slug}>
                <label className="profile-subject-option">
                  <input
                    type="checkbox"
                    checked={profile.difficultSubjects.includes(subject.slug)}
                    onChange={(event) =>
                      handleSubjectChange('difficultSubjects', subject.slug, event.target.checked)
                    }
                  />
                  <span
                    className="profile-subject-color"
                    style={{ backgroundColor: subject.color }}
                    aria-hidden="true"
                  />
                  <span>{subject.name}</span>
                </label>
              </li>
            ))}
          </ul>
        </section>
        </div>

        <section className="profile-moderation-setting" aria-labelledby="profile-moderation-title">
          <div className="profile-section-heading">
            <h2 id="profile-moderation-title">Participar da moderação</h2>
            <p>Ative esta opção para participar da moderação da plataforma e ajudar a manter o conteúdo confiável.</p>
          </div>
          <label className="profile-moderation-switch">
            <input
              type="checkbox"
              role="switch"
              aria-label="Mostrar moderação na barra lateral"
              checked={profile.participatesInModeration}
              onChange={(event) => {
                setProfile((currentProfile) => ({
                  ...currentProfile,
                  participatesInModeration: event.target.checked,
                }));
                setMessage('');
              }}
            />
            <span className="profile-switch-track" aria-hidden="true" />
          </label>
        </section>

        {error && <p className="profile-message profile-message-error" role="alert">{error}</p>}
        {message && <p className="profile-message" role="status">{message}</p>}
        <button className="profile-save-button" type="submit">Salvar perfil</button>
      </form>
    </div>
  );
}

export default Perfil;
