import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logoImg from '../../assets/img--logo.svg'
import {
  HeaderButton,
  HeaderContainer,
  HeaderContent,
  HeaderDiv,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/">
          <img src={logoImg} alt="" />
        </NavLink>
        <HeaderDiv>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Porto Alegre, RS
          </HeaderButton>

          <NavLink to="/complete">
            <HeaderButton variant="yellow">
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderDiv>
      </HeaderContent>
    </HeaderContainer>
  )
}
