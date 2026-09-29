import { Link } from 'react-router-dom';

export function PaginaNaoEncontrada() {
  return (
    <main>
      <h1>Página não encontrada</h1>
      <p>A rota que você tentou acessar não existe.</p>
      <Link to="/">Voltar para o início</Link>
    </main>
  );
}
