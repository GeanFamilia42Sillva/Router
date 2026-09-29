import { NavLink } from 'react-router-dom';

export function Menu() {
  return (
    <nav>
      <NavLink to="/">Início</NavLink>
      <NavLink to="/produtos">Produtos</NavLink>
      <NavLink to="/produtos/cadastrar">Cadastrar</NavLink>
      <NavLink to="/categorias">Categorias</NavLink>
      <NavLink to="/sobre">Sobre</NavLink>
    </nav>
  );
}
