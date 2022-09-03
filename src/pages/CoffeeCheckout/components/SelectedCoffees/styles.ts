import styled from 'styled-components'
import { SectionDefaultStyle } from '../../styles'

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 44.8rem;
`

export const DetailsContainer = styled(SectionDefaultStyle)`
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
`

export const ConfirmationSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
