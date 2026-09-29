import { Link, useParams } from 'react-router-dom';
import { useCategorias } from '../contexts/CategoriasContext';

export function CategoriaDetalhes() {
  const { id } = useParams();
  const { categorias } = useCategorias();

  const categoria = categorias.find(
    (item) => item.id === Number(id)
  );

  if (!categoria) {
    return (
      <main>
        <h1>Categoria não encontrada</h1>
        <p>Não existe uma categoria com o código informado.</p>
        <Link to="/categorias">Voltar para categorias</Link>
      </main>
    );
  }

  return (
    <main>
      <h1>{categoria.nome}</h1>
      <p><strong>Código:</strong> {categoria.id}</p>
      <p>{categoria.descricao}</p>

      <Link to="/categorias">Voltar para categorias</Link>
    </main>
  );
}
