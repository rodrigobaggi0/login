import { useEffect, useState } from 'react';
import { cartoesBase } from '../models/cartoes';

const STORAGE_KEY = 'c';

export const useCartoes = () => {
  const [cartoes, setCartoes] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      setCartoes(JSON.parse(data));
    } else {
      setCartoes(cartoesBase);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartoesBase));
    }
  }, []);

  useEffect(() => {
    if (cartoes.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartoes));
    }
  }, [cartoes]);

  const adicionarCartao = (cartao) => setCartoes([...cartoes, cartao]);

  // Recebe o id do cartão e o novo objeto para edição
  const editarCartao = (id, novoCartao) => {
    const novo = cartoes.map((c) => (c.id === id ? novoCartao : c));
    setCartoes(novo);
  };

  // Recebe o id para remover o cartão correto
  const removerCartao = (id) => {
    const novo = cartoes.filter((c) => c.id !== id);
    setCartoes(novo);
  };

  return {
    cartoes,
    adicionarCartao,
    editarCartao,
    removerCartao,
  };
};