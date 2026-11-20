import { fireEvent, render, screen } from '@testing-library/react';
import Sidebar from './Sidebar';

jest.mock('react-router-dom', () => {
  const React = require('react');
  return {
    Link: ({ to, children, ...props }) => React.createElement('a', { href: to, ...props }, children),
    useNavigate: () => jest.fn(),
  };
});

beforeEach(() => {
  window.localStorage.clear();
  window.localStorage.setItem('edu.userAccount', JSON.stringify({
    name: 'Ana Silva',
    username: 'ana',
  }));
});

test('shows or hides the moderation sidebar link when the preference changes', () => {
  window.localStorage.setItem('edu.userProfile', JSON.stringify({
    photo: '',
    favoriteSubjects: [],
    participatesInModeration: true,
  }));

  render(<Sidebar />);
  expect(screen.getByText('Moderação')).toBeInTheDocument();

  window.localStorage.setItem('edu.userProfile', JSON.stringify({
    photo: '',
    favoriteSubjects: [],
    participatesInModeration: false,
  }));
  fireEvent(window, new Event('edu:user-profile-updated'));
  expect(screen.queryByText('Moderação')).not.toBeInTheDocument();

  window.localStorage.setItem('edu.userProfile', JSON.stringify({
    photo: '',
    favoriteSubjects: [],
    participatesInModeration: true,
  }));
  fireEvent(window, new Event('edu:user-profile-updated'));
  expect(screen.getByText('Moderação')).toBeInTheDocument();
});

test('hides the moderation link when there is no logged-in account', () => {
  window.localStorage.removeItem('edu.userAccount');
  window.localStorage.setItem('edu.userProfile', JSON.stringify({
    photo: '',
    favoriteSubjects: [],
    participatesInModeration: true,
  }));

  render(<Sidebar />);

  expect(screen.queryByText('Moderação')).not.toBeInTheDocument();
});

test('shows the Farol logo at the top of the sidebar', () => {
  render(<Sidebar />);

  const toggleButton = screen.getByRole('button', { name: 'Recolher barra lateral' });
  const logo = screen.getByRole('img', { name: 'Farol' });
  expect(screen.getByRole('navigation').firstElementChild).toContainElement(logo);
  expect(logo).toHaveAttribute(
    'src',
    '/farol-logo-full.png'
  );

  fireEvent.click(toggleButton);
  expect(screen.getByRole('button', { name: 'Expandir barra lateral' })).toBeInTheDocument();
  expect(screen.getByRole('img', { name: 'Farol' })).toHaveAttribute(
    'src',
    '/farol-logo-collapsed.png'
  );
});
