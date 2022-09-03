import { CompleteOrderForm } from './components/CompleteOrderForm'
import { SelectedCoffees } from './components/SelectedCoffees'
import { CoffeeCheckoutContainer } from './styles'

export function CoffeeCheckout() {
  return (
    <CoffeeCheckoutContainer>
      <CompleteOrderForm />
      <SelectedCoffees />
    </CoffeeCheckoutContainer>
  )
}
