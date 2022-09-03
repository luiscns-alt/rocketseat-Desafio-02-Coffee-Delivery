import styled, { css } from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;

  > p {
    color: ${({ theme }) => theme.colors['--error']};
  }
`

interface InputContainerProps {
  hasError: boolean
}

export const InputStyleContainer = styled.div<InputContainerProps>`
  height: 4.2rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors['--button']};
  background: ${({ theme }) => theme.colors['--input']};
  display: flex;
  align-items: center;
  transition: 0.4s;
  justify-content: space-between;
  overflow: hidden;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors['--yellow-dark']};
  }

  ${({ theme, hasError }) =>
    hasError &&
    css`
      border-color: ${theme.colors['--error']};
    `}
`

export const InputStyled = styled.input`
  flex: 1;
  background: none;
  border: none;
  padding: 0 1.2rem;
  height: 100%;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors['--text']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['--label']};
  }
`

export const RightText = styled.p`
  font-size: 1.2rem;
  margin-right: 1.2rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors['--label']};
`
