import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './css/style.css';
import Cadastro from "../Cadastro";
import {
  getUserAccount,
  getUserModerationParticipation,
  getUserProfilePhoto,
} from './userAccount';
import { dataSets } from './Database';
import { getContentEntries } from './contentRegistry';


function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [account, setAccount] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState('');
  const [showModerationTab, setShowModerationTab] = useState(true);
  const [profileError, setProfileError] = useState(false);
  const [hasPendingContent, setHasPendingContent] = useState(false);
  const [moderationError, setModerationError] = useState(false);

  useEffect(() => {
    const refreshProfile = () => {
      try {
        setAccount(getUserAccount());
        setProfilePhoto(getUserProfilePhoto());
        setShowModerationTab(getUserModerationParticipation());
        setProfileError(false);
      } catch (error) {
        console.error('Não foi possível carregar o perfil da barra lateral.', error);
        setAccount(null);
        setProfilePhoto('');
        setShowModerationTab(true);
        setProfileError(true);
      }
    };

    refreshProfile();
    window.addEventListener('edu:user-account-updated', refreshProfile);
    window.addEventListener('edu:user-profile-updated', refreshProfile);
    window.addEventListener('storage', refreshProfile);

    return () => {
      window.removeEventListener('edu:user-account-updated', refreshProfile);
      window.removeEventListener('edu:user-profile-updated', refreshProfile);
      window.removeEventListener('storage', refreshProfile);
    };
  }, []);

  useEffect(() => {
    const refreshModerationStatus = () => {
      try {
        const entries = getContentEntries(dataSets.conteudos);
        setHasPendingContent(entries.some((entry) => entry.status === 'pending'));
        setModerationError(false);
      } catch (error) {
        console.error('Não foi possível verificar a fila de moderação.', error);
        setHasPendingContent(false);
        setModerationError(true);
      }
    };

    refreshModerationStatus();
    window.addEventListener('edu:content-registry-updated', refreshModerationStatus);
    window.addEventListener('storage', refreshModerationStatus);

    return () => {
      window.removeEventListener('edu:content-registry-updated', refreshModerationStatus);
      window.removeEventListener('storage', refreshModerationStatus);
    };
  }, []);

  return (
    <nav className={`Sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="Sidebar-brand">
        <img
          className="Sidebar-brand-logo"
          src={collapsed ? '/farol-logo-collapsed.png' : '/farol-logo-full.png'}
          alt="Farol"
        />
      </div>
      <button 
        className="toggle-btn" 
        onClick={() => setCollapsed(!collapsed)}
        aria-expanded={!collapsed}
        aria-label={collapsed ? 'Expandir barra lateral' : 'Recolher barra lateral'}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          width="12"
          height="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {collapsed ? <path d="m6 3 5 5-5 5" /> : <path d="m10 3-5 5 5 5" />}
        </svg>
      </button>

      <div className="Sidebar-link-wrapper">
        <Link className="Sidebar-link" to="/" aria-label="Início">
          <span className="icon" aria-hidden="true">⌂</span>
          {!collapsed && <span className="text">Início</span>}
        </Link>
        <Link className="Sidebar-link" to="/estudar">
          <span className="icon">o</span>
          {!collapsed && <span className="text">Estudar</span>}
        </Link>
        <Link className="Sidebar-link" to="/provas">
          <span className="icon">o</span>
          {!collapsed && <span className="text">Provas</span>}
        </Link>
        {account && showModerationTab && (
          <Link
            className="Sidebar-link"
            to="/moderacao-conteudo"
            aria-label={hasPendingContent ? 'Moderação: há conteúdos novos para revisar' : undefined}
          >
            <span className="icon">o</span>
            {!collapsed && <span className="text">Moderação</span>}
            {hasPendingContent && <span className="Sidebar-notification-dot" aria-hidden="true" />}
          </Link>
        )}
        {account ? (
          <Link
            className="Sidebar-profile"
            to="/perfil"
            aria-label={`Abrir perfil de ${account.name || account.username}`}
          >
            <span className="Sidebar-profile-avatar">
              {profilePhoto ? (
                <img src={profilePhoto} alt="" />
              ) : (
                (account.name || account.username).trim().charAt(0).toUpperCase()
              )}
            </span>
            {!collapsed && (
              <span className="Sidebar-profile-name">
                {account.name || account.username}
              </span>
            )}
          </Link>
        ) : (
          <Cadastro />
        )}
        {profileError && (
          <p className="Sidebar-profile-error" role="alert">
            Perfil indisponível
          </p>
        )}
        {moderationError && (
          <p className="Sidebar-moderation-error" role="alert">
            Fila de moderação indisponível
          </p>
        )}
      </div>
    </nav>
  );
}

export default Sidebar;