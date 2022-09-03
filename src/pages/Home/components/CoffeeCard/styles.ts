import styled from 'styled-components'
import { RegularText, TitleText } from '../../../../components/Typography'

export const CoffeeCardContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors['--card']};
  border-radius: 6px 36px 6px 36px;
  padding: 0 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 12rem;
    height: 12rem;
    margin-top: -2rem;
  }
`

export const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 1.2rem;
  margin-bottom: 1.6rem;
  flex-wrap: wrap;

  span {
    background: ${({ theme }) => theme.colors['--yellow-light']};
    color: ${({ theme }) => theme.colors['--yellow-dark']};
    font-size: ${({ theme }) => theme.textSizes['--components-tag']};
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    font-weight: 700;
  }
`

export const Name = styled(TitleText).attrs({
  size: 'S',
  color: 'subtitle',
})`
  font-weight: 700;
  margin-bottom: 0.8rem;
`

export const Description = styled(RegularText).attrs({
  size: 'S',
  color: 'label',
})`
  margin-bottom: 3.3rem;
`

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 3px;

    p {
      line-height: 1.2rem;
    }
  }
`

export const AddCartWrapper = styled.div`
  width: 11.8rem;

  > button {
    width: 3.8rem;
    height: 3.8rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors['--purple-dark']};
    color: ${({ theme }) => theme.colors['--card']};
    border-radius: 6px;
    margin-left: 0.8rem;
    transition: 0.4s;

    &:hover {
      background: ${({ theme }) => theme.colors['--purple']};
    }
  }
`
