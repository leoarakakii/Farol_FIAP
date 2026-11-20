import { useEffect, useState } from 'react';
import './component/css/style.css';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './Home';
import Provas from './Provas';
import Sidebar from './component/Sidebar';
import RealizarProvas from './RealizarProvas';
import VerMateria from './VerMateria';
import Cadastro from './Cadastro';
import InserirConteudo from './InserirConteudo';
import ModeracaoConteudo from './ModeracaoConteudo';
import Estudar from './Estudar';
import Perfil from './Perfil';
import { getUserAccount } from './component/userAccount';

function useIsLoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const refreshAccount = () => {
      try {
        const account = getUserAccount();
        setIsLoggedIn(Boolean(account));
      } catch (error) {
        console.error('Não foi possível verificar a autenticação do usuário.', error);
        setIsLoggedIn(false);
      }
    };

    refreshAccount();
    window.addEventListener('edu:user-account-updated', refreshAccount);
    window.addEventListener('storage', refreshAccount);

    return () => {
      window.removeEventListener('edu:user-account-updated', refreshAccount);
      window.removeEventListener('storage', refreshAccount);
    };
  }, []);

  return isLoggedIn;
}

function ContentEntryLauncher() {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = useIsLoggedIn();
  const location = useLocation();

  useEffect(() => {
    if (!isLoggedIn) {
      setIsOpen(false);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isLoggedIn || location.pathname === '/inserir-conteudo') {
    return null;
  }

  return (
    <>
      <button
        type="button"
        className="content-entry-fab"
        aria-label="Adicionar conteúdo"
        onClick={() => setIsOpen(true)}
      >
        +
      </button>
      {isOpen && (
        <InserirConteudo isPopup onClose={() => setIsOpen(false)} />
      )}
    </>
  );
}

function AuthenticatedContentEntry() {
  const isLoggedIn = useIsLoggedIn();
  if (isLoggedIn === null) {
    return null;
  }
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return <InserirConteudo />;
}

function AuthenticatedModeration() {
  const isLoggedIn = useIsLoggedIn();
  if (isLoggedIn === null) {
    return null;
  }
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return <ModeracaoConteudo />;
}

function App() {
  return (
    <div className="App-shell">
    <BrowserRouter>

      <div className="App-layout">

        <Sidebar />

        <main className="App-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/estudar" element={<Estudar />} />
            <Route path="/estudar/:slug/:subcategory/:specialty" element={<VerMateria />} />
            <Route path="/estudar/:slug/:subcategory" element={<VerMateria />} />
            <Route path="/provas" element={<Provas />} />
            <Route path="/provas/:slug/:numero?" element={<RealizarProvas />} />
            <Route path="/estudar/:slug" element={<VerMateria />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/inserir-conteudo" element={<AuthenticatedContentEntry />} />
            <Route path="/moderacao-conteudo" element={<AuthenticatedModeration />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </main>

        <ContentEntryLauncher />
      </div>

    </BrowserRouter>
    
    <footer className="App-footer">
      <p>© 2026 Farol. Todos os direitos reservados.</p>
    </footer>
    </div>
  );
}

export default App;
