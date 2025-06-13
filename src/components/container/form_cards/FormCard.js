import { useNavigate } from 'react-router-dom';
import styles from '../../../pages/form_card/form_card_page.module.scss'; // Ajuste para o caminho correto
import Input from '../../ui/input/Input'; // Ajuste para o caminho correto
import ButtonText from '../../ui/btn_text/ButtonText'; // Ajuste para o caminho correto
import { faCircleDollarToSlot, faIdCard, faImage, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // Importando o componente FontAwesomeIcon
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';  

export default function FormCard({ formData, onChange, onSubmit, modoEdicao, carregandoDados, removerCartao }) {
  const navigate = useNavigate();

  // Função para chamar a exclusão do cartão
  const handleDelete = () => {
    if (formData.id) {
      removerCartao(formData.id);  // Passa o ID correto para a função de exclusão
      navigate('/home');  // Redireciona para a página de cartões após excluir
    }
  };

  // Se os dados estiverem carregando, exibe uma mensagem
  if (carregandoDados) {
    return <p>Carregando dados...</p>;
  }

  return (
    <div className={styles.FormContainer}>
      <h2 className={styles.Title}>{modoEdicao ? 'Editar Cartão' : 'Novo Cartão'}</h2>
      <form onSubmit={onSubmit} className={styles.Form}>
        <Input
          name="id"
          type="number"
          icon={faIdCard}
          value={formData.id}
          onChange={onChange}
          disabled={modoEdicao}  // Impede a edição do ID se estiver no modo de edição
        />
        <Input
          name="nome"
          type="text"
          icon={faUser}
          value={formData.nome}
          onChange={onChange}
        />
        <Input
          name="img"
          type="text"
          icon={faImage}
          value={formData.img}
          onChange={onChange}
        />
        <Input
          type="text"
          name="value"
          icon={faCircleDollarToSlot}
          value={formData.value}
          onChange={onChange}
        />
        <ButtonText type="submit">
          {modoEdicao ? 'Atualizar' : 'Criar'}
        </ButtonText>
        {/* Botão de exclusão com ícone */}
        {modoEdicao && (
          <button
            type="button"
            onClick={handleDelete}
            className={styles.DeleteButton}  // Classe CSS para o botão de exclusão
          >
            <FontAwesomeIcon icon={faTrashCan} /> Excluir Cartão
            
          </button>
        )}
      </form>
    </div>
  );
}