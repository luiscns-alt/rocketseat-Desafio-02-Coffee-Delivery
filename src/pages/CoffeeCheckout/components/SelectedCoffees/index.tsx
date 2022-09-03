import { TitleText } from '../../../../components/Typography'
import { CoffeeCartList } from '../CoffeeCartList'
import { ConfirmOrder } from '../ConfirmOrder'
import { DetailsContainer, SelectedCoffeesContainer } from './styles'

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <TitleText size="XS" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        <CoffeeCartList />
        <CoffeeCartList />
        <CoffeeCartList />
        <ConfirmOrder />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}
