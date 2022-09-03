import styled from 'styled-components'

export const CoffeeCartListContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors['--button']};
  padding-bottom: 2.4rem;
  margin-bottom: 2.4rem;

  > div {
    display: flex;
    align-items: center;
    gap: 2rem;

    img {
      width: 6.4rem;
      height: 6.4rem;
    }
  }

  > p {
    align-self: flex-start;
    font-weight: 700;
  }
`

export const ActionsContainer = styled.div`
  margin-top: 0.8rem;
  height: 3.2rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  > div {
    max-width: 7.2rem;
    height: 100%;
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: ${({ theme }) => theme.colors['--text']};
  font-size: 1.2rem;
  height: 100%;
  border: none;
  background: ${({ theme }) => theme.colors['--button']};
  padding: 0.65rem 0.8rem;

  border-radius: 6px;
  transition: 0.4s;

  svg {
    color: ${({ theme }) => theme.colors['--purple']};
  }

  &:hover {
    background: ${({ theme }) => theme.colors['--hover']};
  }
`
