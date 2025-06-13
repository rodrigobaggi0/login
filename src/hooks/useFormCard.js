import { useState, useEffect } from 'react';
import { useCartoes } from './useCartoes';
import { useNavigate, useLocation } from 'react-router-dom';


export const useFormCard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const idParam = location.state?.id;

  const { cartoes, adicionarCartao, editarCartao } = useCartoes();

  const [formData, setFormData] = useState({
    id: '',
    nome: '',
    img: '',
    value: '',
  });

  // Corrigido: useEffect só roda se cartoes estiver preenchido
  useEffect(() => {
    if (idParam !== undefined && cartoes.length > 0) {
      const id = Number(idParam); // garantir que seja number
      const cartaoEncontrado = cartoes.find(c => c.id === Number(id));
      if (cartaoEncontrado) {
        setFormData({
          id: cartaoEncontrado.id,
          nome: cartaoEncontrado.nome,
          img: cartaoEncontrado.img,
          value: cartaoEncontrado.value || '',
        });
      }
    }
  }, [idParam, cartoes]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoCartao = {
      id: Number(formData.id),
      nome: formData.nome,
      img: formData.img,
      value: formData.value,
    };

    if (idParam === undefined) {
      adicionarCartao(novoCartao);
    } else {
      editarCartao(Number(idParam), novoCartao);
    }

    navigate('/home');
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    modoEdicao: idParam !== undefined,
  };
};