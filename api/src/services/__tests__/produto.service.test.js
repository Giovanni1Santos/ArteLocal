// Mocks
jest.mock('../../models/Produto.js', () => ({
  __esModule: true,
  default: {
    findOne: jest.fn(),
    create: jest.fn()
  }
}));

import Produto from '../../models/Produto.js';
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

    Produto.findOne.mockResolvedValue(true); // Simula produto já existente

    await produtoService.registerProduct(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: "Produto já cadastrado" });
  });
});
