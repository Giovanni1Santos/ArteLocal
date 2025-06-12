import produtoService from '../produto.service.js';

describe('Produto Service', () => {
  test('Deve retornar erro ao cadastrar produto já existente', async () => {
    const req = {
      userId: 1,
      body: { nome: 'Produto', descricao: 'desc', disp: true }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    // Mock Produto.findOne para simular produto existente
    produtoService.Produto = { findOne: jest.fn().mockResolvedValue(true) };
    await produtoService.registerProduct(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
  });
});
