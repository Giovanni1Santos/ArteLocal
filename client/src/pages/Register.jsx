import { useState } from 'react';
import axios from '../services/api';

export default function Register() {
  const [form, setForm] = useState({ nome: '', email: '', senha: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/artesaos/register', form);
    alert('Cadastro realizado!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Nome" onChange={(e) => setForm({ ...form, nome: e.target.value })} />
      <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Senha" onChange={(e) => setForm({ ...form, senha: e.target.value })} />
      <button type="submit">Cadastrar</button>
    </form>
  );
}
