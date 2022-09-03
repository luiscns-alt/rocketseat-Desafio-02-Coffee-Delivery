import { CustomButton } from '../../../../components/CustomButton'
import { RegularText } from '../../../../components/Typography'
import { ConfirmOrderContainer } from './style'

export function ConfirmOrder() {
  return (
    <ConfirmOrderContainer>
      <div>
        <RegularText size="S">Total de itens</RegularText>
        <RegularText>R$ 99,99</RegularText>
      </div>
      <div>
        <RegularText size="S">Entrega</RegularText>
        <RegularText>R$ 99,99</RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="L">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="L">
          R$ 99,99
        </RegularText>
      </div>

      <CustomButton text="Confirmar Pedido" type="submit" />
    </ConfirmOrderContainer>
  )
}
