import contatoService from '../contato.service.js';

describe('Contato Service', () => {
  test('Deve retornar erro para e-mail inválido', async () => {
    const req = {
      userId: 1,
      body: { name: 'Teste', telefone: '123', email: 'emailinvalido' }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    await contatoService.registerContact(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
  });
});
