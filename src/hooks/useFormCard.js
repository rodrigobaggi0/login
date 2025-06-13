import { useState, useEffect } from 'react';
import { useCartoes } from './useCartoes'; // A função useCartoes deve estar no caminho correto
import { useNavigate, useLocation } from 'react-router-dom';

export const useFormCard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = Number(location.state?.id); // Recupera o ID do cartão

  const { cartoes, adicionarCartao, editarCartao } = useCartoes();
  const [formData, setFormData] = useState({
    id: '',
    nome: '',
    img: '',
    value: '',
  });

  const [carregandoDados, setCarregandoDados] = useState(true); // Estado para saber se os dados foram carregados

  useEffect(() => {
    if (id) {
      const cartaoSelecionado = cartoes.find(c => c.id === id); // Busca o cartão com o ID correto
      if (cartaoSelecionado) {
        setFormData(cartaoSelecionado); // Preenche os dados no formData
        setCarregandoDados(false); // Marca que os dados foram carregados
      }
    }
  }, [id, cartoes]); // Executa quando o id ou os cartoes mudam
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoCartao = {
      id: Number(formData.id),
      nome: formData.nome,
      img: formData.img,
      value: formData.value,
    };

    if (id) {
      editarCartao(id, novoCartao); // Se houver ID, edita o cartão
    } else {
      adicionarCartao(novoCartao); // Caso contrário, adiciona um novo
    }

    navigate('/home');  // Redireciona para a página de listagem de cartões
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    modoEdicao: !!id,  // Se o ID existir, está no modo de edição
    carregandoDados,  // Indica se os dados ainda estão carregando
  };
};