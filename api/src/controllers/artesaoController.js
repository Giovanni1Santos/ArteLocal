const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Artesao = require('../models/artesaoModel');

exports.registrar = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    const hashedSenha = await bcrypt.hash(senha, 10);
    const novoArtesao = await Artesao.create({ nome, email, senha: hashedSenha });
    res.status(201).json(novoArtesao);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, senha } = req.body;
  const artesao = await Artesao.findOne({ where: { email } });

  if (!artesao || !(await bcrypt.compare(senha, artesao.senha))) {
    return res.status(401).json({ erro: 'Credenciais inválidas' });
  }

  const token = jwt.sign({ id: artesao.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
  res.json({ token, artesao });
};

exports.listar = async (req, res) => {
  const artesoes = await Artesao.findAll();
  res.json(artesoes);
};

exports.atualizar = async (req, res) => {
  const { id } = req.params;
  await Artesao.update(req.body, { where: { id } });
  res.sendStatus(204);
};

exports.deletar = async (req, res) => {
  const { id } = req.params;
  await Artesao.destroy({ where: { id } });
  res.sendStatus(204);
};
