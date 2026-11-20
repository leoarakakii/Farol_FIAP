import { fireEvent, render, screen } from '@testing-library/react';
import Perfil from './Perfil';

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

beforeEach(() => {
  window.localStorage.clear();
});

test('saves the moderation sidebar preference from the profile switch', () => {
  render(<Perfil />);

  const moderationSwitch = screen.getByRole('switch', {
    name: 'Mostrar moderação na barra lateral',
  });
  expect(moderationSwitch).toBeChecked();

  fireEvent.click(moderationSwitch);
  fireEvent.click(screen.getByRole('button', { name: 'Salvar perfil' }));

  expect(JSON.parse(window.localStorage.getItem('edu.userProfile')).participatesInModeration).toBe(false);
});
