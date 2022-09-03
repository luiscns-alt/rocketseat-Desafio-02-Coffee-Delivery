import styled, { css } from 'styled-components'

export interface QuantityInputContainerProps {
  size: 'medium' | 'small';
}

export const QuantityInputContainer = styled.div<QuantityInputContainerProps>`
  width: 7.2rem;
  height: 3.8rem;
  flex: 1;
  background: ${({ theme }) => theme.colors['--button']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  border-radius: 6px;

  input {
    text-align: center;
    width: 100%;
    margin-top: 0.5rem;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors['--title']};

    &:focus {
      outline: none;
    }
  }

  ${({ size }) =>
          size === 'medium' &&
          css`
            padding: 0.8rem;
          `}
  ${({ size }) =>
          size === 'small' &&
          css`
            padding: 0.48rem 0.8rem;
          `}
`

export const IconWrapper = styled.button.attrs({
  type: 'button',
})`
  width: 1.4rem;
  height: 1.4rem;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors['--purple']};
  transition: 0.4s;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.colors['--purple-dark']};
  }
`