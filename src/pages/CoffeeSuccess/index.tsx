import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from 'styled-components'
import Success from '../../assets/img--success.svg'
import { OrderInfo } from '../../components/OrderInfo'
import { RegularText, TitleText } from '../../components/Typography'
import { OrderData } from '../CoffeeCheckout'
import { paymentMethods } from '../CoffeeCheckout/components/PaymentOptions'
import { CoffeeSuccessContainer, OrderDetailsContainer } from './styles'

interface LocationType {
  state: OrderData
}

export function CoffeeSuccess() {
  const { colors } = useTheme()
  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [])

  if (!state) return <></>

  return (
    <CoffeeSuccessContainer>
      <div>
        <TitleText size="L">Uhu! Pedido confirmado</TitleText>
        <RegularText size="L" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <OrderInfo
            icon={<MapPin weight="fill" />}
            iconBg={colors['--purple']}
            text={
              <RegularText>
                Entrega em <strong>{state.street}</strong>, {state.number}
                <br />
                {state.district} - {state.city}, {state.uf}
              </RegularText>
            }
          />

          <OrderInfo
            icon={<Clock weight="fill" />}
            iconBg={colors['--yellow']}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />

          <OrderInfo
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors['--yellow-dark']}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={Success} alt="Order Confirmed Success" />
      </section>
    </CoffeeSuccessContainer>
  )
}
