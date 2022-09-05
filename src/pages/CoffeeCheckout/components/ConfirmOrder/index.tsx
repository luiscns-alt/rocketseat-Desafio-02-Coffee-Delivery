import { CustomButton } from '../../../../components/CustomButton'
import { RegularText } from '../../../../components/Typography'
import { useCart } from '../../../../Hooks/useCart'
import { formatMoney } from '../../../../utils/format'
import { ConfirmOrderContainer } from './style'

const DELIVERY_VALUE = 3.5

export function ConfirmOrder() {
  const { cartItemsTotal, cartQuantity } = useCart()
  const cartTotal = DELIVERY_VALUE + cartItemsTotal
  const formattedItemsTotal = formatMoney(cartItemsTotal)
  const formattedCartTotal = formatMoney(cartTotal)
  const formattedDeliveryPrice = formatMoney(DELIVERY_VALUE)

  return (
    <ConfirmOrderContainer>
      <div>
        <RegularText size="S">Total de itens</RegularText>
        <RegularText>R$ {formattedItemsTotal}</RegularText>
      </div>
      <div>
        <RegularText size="S">Entrega</RegularText>
        <RegularText>R$ {formattedDeliveryPrice}</RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="L">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="L">
          R$ {formattedCartTotal}
        </RegularText>
      </div>

      <CustomButton
        text="Confirmar Pedido"
        type="submit"
        disabled={cartQuantity <= 0}
      />
    </ConfirmOrderContainer>
  )
}
