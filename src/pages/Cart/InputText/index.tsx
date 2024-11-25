import {
  InputZipCode,
  InputContainer,
  InputStreet,
  InputComplementContainer,
  InputNumber,
  InputComplement,
  InputNeighborhood,
  InputCity,
  InputUF,
} from './styles';

export function InputText() {
  return (
    <InputContainer>
      <InputZipCode type="text" placeholder="CEP" />
      <InputStreet type="text" placeholder="Rua" />
      <InputComplementContainer>
        <InputNumber type="text" placeholder="Número" />
        <InputComplement type="text" placeholder="Complemento" />
      </InputComplementContainer>
      <div>
        <InputNeighborhood type="text" placeholder="Bairro" />
        <InputCity type="text" placeholder="Cidade" />
        <InputUF type="text" placeholder="UF" />
      </div>
    </InputContainer>
  );
}
