import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import Success from '../../assets/img--success.svg'
import { OrderInfo } from '../../components/OrderInfo'
import { RegularText, TitleText } from '../../components/Typography'
import { CoffeeSuccessContainer, OrderDetailsContainer } from './styles'
import { useTheme } from 'styled-components'

export function CoffeeSuccess() {
  const { colors } = useTheme()

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
                Entrega em <strong>street</strong>, number
                <br />
                district - city, uf
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
                <strong>lorem</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={Success} alt='Order Confirmed Success'/>
      </section>
    </CoffeeSuccessContainer>
  )
}
