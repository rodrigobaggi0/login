import { useFormCard } from '../../hooks/useFormCard.js';
import FormCard from '../../components/container/form_cards/FormCard.js';

export default function FormCardPage() {
  const {
    formData,
    handleChange,
    handleSubmit,
    modoEdicao,
  } = useFormCard();

  return (
    <FormCard
      formData={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
      modoEdicao={modoEdicao}
    />
  );
}
