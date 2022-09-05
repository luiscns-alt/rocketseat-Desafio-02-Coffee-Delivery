import { TitleText } from '../../../../components/Typography'
import { useCart } from '../../../../Hooks/useCart'
import { CoffeeCartList } from '../CoffeeCartList'
import { ConfirmOrder } from '../ConfirmOrder'
import { DetailsContainer, SelectedCoffeesContainer } from './styles'

export function SelectedCoffees() {
  const { cartItems } = useCart()

  return (
    <SelectedCoffeesContainer>
      <TitleText size="XS" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        {cartItems.map((item) => (
          <CoffeeCartList key={item.id} coffee={item} />
        ))}

        <ConfirmOrder />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}
