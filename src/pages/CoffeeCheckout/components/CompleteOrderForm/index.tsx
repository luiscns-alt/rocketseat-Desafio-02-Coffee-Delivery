import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { TitleText } from '../../../../components/Typography'
import { CompleteAddressForm } from '../CompleteAddressForm'
import { PaymentOptions } from '../PaymentOptions'
import { SectionTitle } from '../SectionTitle'
import { CompleteOrderFormContainer, FormContainer } from './styles'

export function CompleteOrderForm() {
  const { colors } = useTheme()

  return (
    <CompleteOrderFormContainer>
      <TitleText size="XS" color="subtitle">
        Complete seu pedido
      </TitleText>
      <FormContainer>
        <SectionTitle
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine color={colors['--yellow-dark']} size={22} />}
        />
        <CompleteAddressForm />
      </FormContainer>
      <FormContainer>
        <SectionTitle
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar color={colors['--purple']} size={22} />}
        />
        <PaymentOptions />
      </FormContainer>
    </CompleteOrderFormContainer>
  )
}
