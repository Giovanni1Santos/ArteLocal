import userService from '../user.service.js';

describe('Validação de senha', () => {
  test('Senha válida', () => {
    // Função interna do userService
    const isPasswordValid = userService.__proto__.constructor.isPasswordValid || userService.isPasswordValid;
    expect(isPasswordValid('Senha@123')).toBe(true);
    expect(isPasswordValid('Abcdefg!')).toBe(true);
  });

  test('Senha inválida', () => {
    const isPasswordValid = userService.__proto__.constructor.isPasswordValid || userService.isPasswordValid;
    expect(isPasswordValid('abc')).toBe(false);
    expect(isPasswordValid('semmaiuscula@')).toBe(false);
    expect(isPasswordValid('SEMESPECIAL123')).toBe(false);
  });
});
