import styled from 'styled-components'

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
