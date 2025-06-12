import { isPasswordValid } from '../user.service.js';

describe('Validação de senha', () => {
  test('Senha válida', () => {
    expect(isPasswordValid('Senha@123')).toBe(true);
    expect(isPasswordValid('Abcdefg!')).toBe(true);
  });

  test('Senha inválida', () => {
    expect(isPasswordValid('abc')).toBe(false);
    expect(isPasswordValid('semmaiuscula@')).toBe(false);
    expect(isPasswordValid('SEMESPECIAL123')).toBe(false);
  });
});