import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 10.4rem;
  background: ${({ theme }) => theme.colors['--background']};
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;
`

export const HeaderContent = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 3.2rem 16rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
`

interface HeaderButtonProps {
  variant: 'purple' | 'yellow'
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  min-width: 2.3rem;
  height: 3.8rem;
  border-radius: 6px;
  border: none;
  padding: 0 1.2rem;
  position: relative;
  cursor: inherit;

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    color: ${({ theme }) => theme.colors['--white']};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    font-weight: 400;
  }

  font-size: ${({ theme }) => theme.textSizes['--text-regular-S']};
  ${({ variant }) => css`
    background: ${({ theme }) => theme.colors[`--${variant}-light`]};
    color: ${({ theme }) => theme.colors[`--${variant}-dark`]};

    span {
      background: ${({ theme }) => theme.colors[`--${variant}-dark`]};
    }
  `}
  ${({ variant }) =>
    variant === 'purple' &&
    css`
      svg {
        color: ${({ theme }) => theme.colors[`--${variant}`]};
      }
    `}
`
