import { CustomInput } from '../../../../components/CustomInput'
import { AddressFormContainer, Div1, Div2, Div3 } from './style'

export function CompleteAddressForm() {
  return (
    <AddressFormContainer>
      <Div1>
        <CustomInput placeholder="CEP" type="number" className="div1" />
      </Div1>
      <Div2>
        <CustomInput placeholder="Rua" className="street" />
      </Div2>
      <CustomInput type="number" placeholder="Número" />
      <Div3>
        <CustomInput
          placeholder="Complemento"
          className="complement"
          rightText="Opcional"
        />
      </Div3>
      <CustomInput placeholder="Bairro" />
      <CustomInput placeholder="Cidade" />
      <CustomInput placeholder="UF" />
    </AddressFormContainer>
  )
}
