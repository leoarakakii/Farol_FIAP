import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './component/css/style.css';
import './component/css/home.css';
import SearchBar from './component/SearchBar';
import { dataSets } from './component/Database';
import { getUserAccount } from './component/userAccount';

const PROFILE_STORAGE_KEY = 'edu.userProfile';

function readHomeData() {
  const account = getUserAccount();
  const savedProfile = window.localStorage.getItem(PROFILE_STORAGE_KEY);
  if (savedProfile === null) {
    return { account, favoriteSubjects: [], difficultSubjects: [] };
  }

  const profile = JSON.parse(savedProfile);
  const difficultSubjects = profile?.difficultSubjects || [];
  if (
    !profile ||
    typeof profile.photo !== 'string' ||
    !Array.isArray(profile.favoriteSubjects) ||
    !profile.favoriteSubjects.every((slug) => typeof slug === 'string') ||
    !Array.isArray(difficultSubjects) ||
    !difficultSubjects.every((slug) => typeof slug === 'string')
  ) {
    throw new Error('Os dados do perfil estão em um formato inválido.');
  }

  return {
    account,
    favoriteSubjects: profile.favoriteSubjects,
    difficultSubjects,
  };
}

function Home() {
  const [homeData, setHomeData] = useState({
    account: null,
    favoriteSubjects: [],
    difficultSubjects: [],
  });
  const [loadError, setLoadError] = useState('');

  useEffect(() => {
    const refreshHomeData = () => {
      try {
        setHomeData(readHomeData());
        setLoadError('');
      } catch (error) {
        console.error('Não foi possível carregar os dados da página inicial.', error);
        setHomeData({ account: null, favoriteSubjects: [], difficultSubjects: [] });
        setLoadError('Não foi possível carregar seus dados. Confira seu perfil e tente novamente.');
      }
    };

    refreshHomeData();
    window.addEventListener('edu:user-account-updated', refreshHomeData);
    window.addEventListener('edu:user-profile-updated', refreshHomeData);
    window.addEventListener('storage', refreshHomeData);

    return () => {
      window.removeEventListener('edu:user-account-updated', refreshHomeData);
      window.removeEventListener('edu:user-profile-updated', refreshHomeData);
      window.removeEventListener('storage', refreshHomeData);
    };
  }, []);

  const userName = homeData.account?.name || homeData.account?.username;
  const isLoggedIn = Boolean(homeData.account);
  const favoriteSubjects = dataSets.materias.filter((subject) =>
    homeData.favoriteSubjects.includes(subject.slug)
  );
  const difficultSubjects = dataSets.materias.filter((subject) =>
    homeData.difficultSubjects.includes(subject.slug)
  );

  function renderSubjects(subjects, emptyMessage) {
    if (subjects.length === 0) {
      return (
        <p className="home-subject-empty">
          {emptyMessage}{' '}
          {isLoggedIn ? (
            <Link to="/perfil">Atualize seu perfil</Link>
          ) : (
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event('edu:open-login-modal'))}
            >
              Entrar com seu perfil
            </button>
          )}
          .
        </p>
      );
    }

    return (
      <ul className="home-subject-list">
        {subjects.map((subject) => (
          <li key={subject.slug}>
            <span className="home-subject-color" style={{ backgroundColor: subject.color }} aria-hidden="true" />
            {subject.name}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="home-page">
      <header className="home-header">
        <div className="home-welcome">
          <p className="home-eyebrow">Seu espaço de aprendizagem</p>
          <h1>{userName ? `Olá, ${userName}!` : 'Olá!'}</h1>
          <p>Encontre conteúdos e acompanhe as matérias importantes para você.</p>
        </div>
        <SearchBar
          categoria="materias"
          page="estudar"
          className="Search-bar-page home-search"
        />
      </header>

      {loadError && <p className="home-error" role="alert">{loadError}</p>}

      <div className="home-subject-groups">
        <section className="home-subject-card" aria-labelledby="home-favorites-title">
          <h2 id="home-favorites-title">Matérias favoritas</h2>
          <p>O que você mais gosta de estudar.</p>
          {renderSubjects(favoriteSubjects, 'Você ainda não selecionou matérias favoritas.')}
        </section>
        <section className="home-subject-card" aria-labelledby="home-difficult-title">
          <h2 id="home-difficult-title">Matérias mais desafiadoras</h2>
          <p>Onde você gostaria de receber mais apoio.</p>
          {renderSubjects(difficultSubjects, 'Você ainda não selecionou matérias com dificuldade.')}
        </section>
      </div>
    </div>
  );
}

export default Home;