import styled, { css } from 'styled-components'

export const PaymentContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    ${({ theme }) => css`
      background: ${theme.colors['--purple-light']};
      border-color: ${theme.colors['--purple']};

      &:hover {
        background: ${theme.colors['--purple-light']};
      }
    `}
  }
`

export const PaymentContent = styled.div`
  padding: 0 1rem;
  background: ${({ theme }) => theme.colors['--button']};
  color: ${({ theme }) => theme.colors['--text']};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.2rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 5.1rem;
  border: 1px solid ${({ theme }) => theme.colors['--button']};
  transition: 0.4s;

  svg {
    color: ${({ theme }) => theme.colors['--purple']};
  }

  &:hover {
    background: ${({ theme }) => theme.colors['--hover']};
  }

  user-select: none;
`
