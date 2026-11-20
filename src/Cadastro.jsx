import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './component/css/cadastro.css';
import './component/css/style.css';
import { saveUserAccount } from './component/userAccount';

function Cadastro() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginView, setIsLoginView] = useState(false);
  const [authError, setAuthError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleOpenLoginModal = () => {
      setIsLoginView(true);
      setAuthError('');
      setIsOpen(true);
    };

    window.addEventListener('edu:open-login-modal', handleOpenLoginModal);
    return () => {
      window.removeEventListener('edu:open-login-modal', handleOpenLoginModal);
    };
  }, []);

  const openModal = (showLogin) => {
    setIsLoginView(showLogin);
    setAuthError('');
    setIsOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoginView) {
      console.log('Logging in...');
      return;
    }

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get('c-nome') || '').trim();
    const username = String(formData.get('c-usuario') || '').trim();

    try {
      saveUserAccount({ name, username });
      setAuthError('');
      setIsOpen(false);
      navigate('/perfil');
    } catch (error) {
      console.error('Não foi possível salvar os dados da conta.', error);
      setAuthError('Não foi possível salvar os dados da conta. Tente novamente.');
    }
  };

  return (
    <div className="Cadastro-body">

      <div className="auth-buttons">
        <button className="btn btn-login" onClick={() => openModal(true)}>
          Entrar
        </button>
        <button className="btn btn-signup" onClick={() => openModal(false)}>
          Criar conta
        </button>
      </div>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            
            <button 
              className="close-btn" 
              onClick={() => setIsOpen(false)} 
              aria-label="Fechar"
            >
              &times;
            </button>

            {!isLoginView ? (
             
              <section className="auth-page" id="cadastro" aria-labelledby="t-cadastro">
                <div className="card">
                  <h1 id="t-cadastro">Criar conta</h1>
                  <p className="subtitle">Preencha os dados para se cadastrar.</p>
                  
                  <form onSubmit={handleSubmit}>
                    {authError && <p className="auth-message auth-message-error" role="alert">{authError}</p>}
                    <div className="field">
                      <label htmlFor="c-nome">Nome completo</label>
                      <div className="input">
                        <i className="fa-solid fa-id-card" aria-hidden="true"></i>
                        <input type="text" id="c-nome" name="c-nome" placeholder="Seu nome" autoComplete="name" required />
                      </div>
                    </div>

                    <div className="field">
                      <label htmlFor="c-email">E-mail</label>
                      <div className="input">
                        <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                        <input type="email" id="c-email" name="c-email" placeholder="voce@email.com" autoComplete="email" required />
                      </div>
                    </div>

                    <div className="field">
                      <label htmlFor="c-usuario">Usuário</label>
                      <div className="input">
                        <i className="fa-solid fa-user" aria-hidden="true"></i>
                        <input type="text" id="c-usuario" name="c-usuario" placeholder="Escolha um usuário" autoComplete="username" required />
                      </div>
                    </div>

                    <div className="field">
                      <label htmlFor="c-senha">Senha</label>
                      <div className="input">
                        <i className="fa-solid fa-lock" aria-hidden="true"></i>
                        <input type="password" id="c-senha" name="c-senha" placeholder="Mínimo de 8 caracteres" minLength="8" autoComplete="new-password" required />
                      </div>
                    </div>

                    <button type="submit" className="btn">
                      <i className="fa-solid fa-user-plus" aria-hidden="true"></i> Criar conta
                    </button>
                  </form>

                  <p className="switch">
                    Já tem conta?{' '}
                    <button type="button" className="link-btn" onClick={() => setIsLoginView(true)}>
                      Entrar
                    </button>
                  </p>
                </div>
              </section>
            ) : (
           
              <section className="auth-page" id="login" aria-labelledby="t-login">
                <div className="card">
                  <h1 id="t-login">Entrar</h1>
                  <p className="subtitle">Acesse sua conta para continuar.</p>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="field">
                      <label htmlFor="l-usuario">Usuário</label>
                      <div className="input">
                        <i className="fa-solid fa-user" aria-hidden="true"></i>
                        <input type="text" id="l-usuario" name="l-usuario" placeholder="Seu usuário" autoComplete="username" required />
                      </div>
                    </div>

                    <div className="field">
                      <label htmlFor="l-senha">Senha</label>
                      <div className="input">
                        <i className="fa-solid fa-lock" aria-hidden="true"></i>
                        <input type="password" id="l-senha" name="l-senha" placeholder="Sua senha" autoComplete="current-password" required />
                      </div>
                    </div>

                    <button type="submit" className="btn">
                      <i className="fa-solid fa-right-to-bracket" aria-hidden="true"></i> Entrar
                    </button>
                  </form>

                  <p className="switch">
                    Ainda não tem conta?{' '}
                    <button type="button" className="link-btn" onClick={() => setIsLoginView(false)}>
                      Criar conta
                    </button>
                  </p>
                </div>
              </section>
            )}

          </div>
        </div>
      )}
    </div>
  );
}

export default Cadastro;