import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
import bannerImg from '../../assets/img--banner.svg'
import { RegularText, TitleText } from '../../components/Typography'
import {
  BenefitsCard,
  HomeContainer,
  IconContainer,
  InfoWithIconContainer,
} from './styles'

export function Home() {
  const { colors } = useTheme()

  return (
    <HomeContainer>
      <div>
        <TitleText size="XL">
          Encontre o café perfeito para qualquer hora do dia
        </TitleText>
        <RegularText as="h3" size="L" color="subtitle">
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </RegularText>
        <BenefitsCard>
          <InfoWithIconContainer>
            <IconContainer iconBg={colors['--yellow-dark']}>
              <ShoppingCart weight="fill" />
            </IconContainer>
            Compra simples e segura
          </InfoWithIconContainer>
          <InfoWithIconContainer>
            <IconContainer iconBg={colors['--text']}>
              <Package weight="fill" />
            </IconContainer>
            Embalagem mantém o café intacto
          </InfoWithIconContainer>
          <InfoWithIconContainer>
            <IconContainer iconBg={colors['--yellow']}>
              <Timer weight="fill" />
            </IconContainer>
            Entrega rápida e rastreada
          </InfoWithIconContainer>
          <InfoWithIconContainer>
            <IconContainer iconBg={colors['--purple']}>
              <Coffee weight="fill" />
            </IconContainer>
            O café chega fresquinho até você
          </InfoWithIconContainer>
        </BenefitsCard>
      </div>
      <div>
        <img src={bannerImg} alt="" />
      </div>
    </HomeContainer>
  )
}
