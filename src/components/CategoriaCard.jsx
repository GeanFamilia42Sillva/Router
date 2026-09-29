import { Link } from 'react-router-dom';

export function CategoriaCard({ categoria }) {
  return (
    <article className="categoria-card">
      <h2>{categoria.nome}</h2>
      <p>{categoria.descricao}</p>
      <Link to={`/categorias/${categoria.id}`}>Ver detalhes</Link>
    </article>
  );
}
