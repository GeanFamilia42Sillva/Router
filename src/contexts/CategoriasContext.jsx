import { createContext, useContext, useState } from 'react';

const CategoriasContext = createContext();

export function CategoriasProvider({ children }) {
  const [categorias] = useState([
    {
      id: 1,
      nome: 'Eletrônicos',
      descricao: 'Produtos eletrônicos para facilitar o dia a dia.',
    },
    {
      id: 2,
      nome: 'Informática',
      descricao: 'Computadores, periféricos e acessórios de informática.',
    },
    {
      id: 3,
      nome: 'Acessórios',
      descricao: 'Acessórios diversos para seus equipamentos.',
    },
  ]);

  return (
    <CategoriasContext.Provider value={{ categorias }}>
      {children}
    </CategoriasContext.Provider>
  );
}

export function useCategorias() {
  return useContext(CategoriasContext);
}
