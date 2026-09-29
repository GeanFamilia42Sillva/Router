import { CategoriaCard } from '../components/CategoriaCard';
import { useCategorias } from '../contexts/CategoriasContext';

export function Categorias() {
  const { categorias } = useCategorias();

  return (
    <main>
      <h1>Categorias</h1>

      <section className="cards">
        {categorias.map((categoria) => (
          <CategoriaCard key={categoria.id} categoria={categoria} />
        ))}
      </section>
    </main>
  );
}
