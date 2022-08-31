import styled from 'styled-components'
import introBackgroundImg from '../../assets/background--home.svg'
import { rgba } from 'polished'

export const HomeContainer = styled.section`
  width: 100%;
  height: 54.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9.4rem 16rem 10.8rem;

  background: ${({ theme }) => `url(${introBackgroundImg}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors['--white']} 0%,
        ${rgba(theme.colors['--background'], 0.2)} 50%,
        ${theme.colors['--background']} 100%
      )`};
  background-size: cover;
`

export const BenefitsCard = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;
  margin-top: 6.6rem;
`

export const InfoWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`

interface IconsContainerProps {
  iconBg: string
}

export const IconContainer = styled.div<IconsContainerProps>`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  background: ${({ iconBg }) => iconBg};
  color: ${({ theme }) => theme.colors['--white']};
  display: flex;
  align-items: center;
  justify-content: center;
`
