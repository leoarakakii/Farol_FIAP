import { fireEvent, render, screen } from '@testing-library/react';
import Home from './Home';
import Cadastro from './Cadastro';

jest.mock('react-router-dom', () => {
  const React = require('react');
  return {
    Link: ({ to, children, ...props }) => React.createElement('a', { href: to, ...props }, children),
    useNavigate: () => jest.fn(),
  };
});

function renderHome() {
  return render(<Home />);
}

beforeEach(() => {
  window.localStorage.clear();
});

test('shows the signed-in user and saved favorite and difficult subjects', () => {
  window.localStorage.setItem('edu.userAccount', JSON.stringify({
    name: 'Ana Silva',
    username: 'ana',
  }));
  window.localStorage.setItem('edu.userProfile', JSON.stringify({
    photo: '',
    favoriteSubjects: ['Matemática'],
    difficultSubjects: ['Astronomia'],
  }));

  renderHome();

  expect(screen.getByRole('heading', { name: 'Olá, Ana Silva!' })).toBeInTheDocument();
  expect(screen.getByText('Matemática')).toBeInTheDocument();
  expect(screen.getByText('Astronomia')).toBeInTheDocument();
});

test('refreshes the displayed preferences after the profile is updated', () => {
  renderHome();
  expect(screen.getByText(/Você ainda não selecionou matérias favoritas/)).toBeInTheDocument();
  expect(
    screen.getAllByRole('button', { name: 'Entrar com seu perfil' })
  ).toHaveLength(2);

  window.localStorage.setItem('edu.userProfile', JSON.stringify({
    photo: '',
    favoriteSubjects: ['Matemática'],
    difficultSubjects: [],
  }));
  fireEvent(window, new Event('edu:user-profile-updated'));

  expect(screen.getByText('Matemática')).toBeInTheDocument();
  expect(screen.queryByText(/Você ainda não selecionou matérias favoritas/)).not.toBeInTheDocument();
});

test('opens the login popup from the home sign-in action', () => {
  render(
    <>
      <Home />
      <Cadastro />
    </>
  );

  fireEvent.click(screen.getAllByRole('button', { name: 'Entrar com seu perfil' })[0]);

  expect(screen.getByRole('heading', { name: 'Entrar' })).toBeInTheDocument();
});

test('links signed-in users to their profile to update empty subject preferences', () => {
  window.localStorage.setItem('edu.userAccount', JSON.stringify({
    name: 'Ana Silva',
    username: 'ana',
  }));

  renderHome();

  const profileLinks = screen.getAllByRole('link', { name: 'Atualize seu perfil' });
  expect(profileLinks).toHaveLength(2);
  profileLinks.forEach((link) => expect(link).toHaveAttribute('href', '/perfil'));
});
