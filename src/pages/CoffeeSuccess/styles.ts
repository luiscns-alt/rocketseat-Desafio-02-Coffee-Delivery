import styled from 'styled-components'

export const CoffeeSuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8rem 16rem 0;
  gap: 2.5rem;
  h1 {
    color: ${({ theme }) => theme.colors['--yellow-dark']};
  }
  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const OrderDetailsContainer = styled.div`
  padding: 4rem;
  border-radius: 6px 36px 6px 36px;
  position: relative;
  background: ${({ theme }) => theme.colors['--background']};
  min-width: 51.2rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`
