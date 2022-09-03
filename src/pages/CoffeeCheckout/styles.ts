import styled from 'styled-components'

export const CoffeeCheckoutContainer = styled.form`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  padding-left: 16rem;
  padding-right: 16rem;
  gap: 2rem;
`

export const SectionDefaultStyle = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors['--card']};
  border-radius: 6px;
  padding: 4rem;
`
