import { Trash } from 'phosphor-react'
import { useState } from 'react'
import imgMocaccino from '../../../../assets/Coffee_Card/img--mocaccino.svg'
import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText } from '../../../../components/Typography'
import {
  ActionsContainer,
  CoffeeCartListContainer,
  RemoveButton,
} from './styles'

export function CoffeeCartList() {
  const [quantity, setQuantity] = useState(1)

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state) => state - 1)
  }

  return (
    <CoffeeCartListContainer>
      <div>
        <img src={imgMocaccino} alt={''} />
        <div>
          <RegularText color="subtitle">Expresso Tradicional</RegularText>
          <ActionsContainer>
            <QuantityInput
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={quantity}
              size="small"
            />
            <RemoveButton type="button">
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ 9,99</p>
    </CoffeeCartListContainer>
  )
}
