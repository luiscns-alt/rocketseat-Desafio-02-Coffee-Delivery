import styled from 'styled-components'

export const PaymentOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;

  > p {
    grid-column: span 3;
    color: ${({ theme }) => theme.colors['--error']};
  }
`
