import { useState } from 'react';
import axios from '../services/api';

export default function Login() {
  const [form, setForm] = useState({ email: '', senha: '' });

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await axios.post('/artesaos/login', form);
    localStorage.setItem('token', res.data.token);
    alert('Logado com sucesso!');
  };

  return (
    <form onSubmit={handleLogin}>
      <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Senha" onChange={(e) => setForm({ ...form, senha: e.target.value })} />
      <button type="submit">Entrar</button>
    </form>
  );
}
