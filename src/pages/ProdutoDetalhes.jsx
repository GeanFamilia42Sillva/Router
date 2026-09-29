import { Link, useParams } from 'react-router-dom';
import { useProdutos } from '../contexts/ProdutosContext';

export function ProdutosDetalhes() {
  const { id } = useParams();
  const { produtos } = useProdutos();

  const produto = produtos.find(
    (item) => item.id === Number(id)
  );

  if (!produto) {
    return (
      <main>
        <h1>Produto não encontrado</h1>
        <Link to="/produtos">Voltar para produtos</Link>
      </main>
    );
  }

  return (
    <main>
      <h1>{produto.nome}</h1>
      <p>Código: {produto.id}</p>
      <p>
        Preço:{' '}
        {produto.preco.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </p>
      <Link to="/produtos">Voltar</Link>
    </main>
  );
}
