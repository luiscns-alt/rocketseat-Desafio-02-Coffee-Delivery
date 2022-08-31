import styled from 'styled-components'

interface TitleTextProps {
  size?: 'XL' | 'L' | 'M' | 'S' | 'XS'
  color?: 'title' | 'subtitle' | 'text'
  weight?: string | number
}

interface RegularTextProps {
  size?: 'L' | 'M' | 'S'
  color?: 'text' | 'subtitle' | 'label'
  weight?: string | number
}

export const TitleText = styled.h1<TitleTextProps>`
  color: ${({ theme, color }) => theme.colors[`--${color ?? 'title'}`]};
  font-size: ${({ theme, size }) => theme.textSizes[`--title-${size ?? 'M'}`]};
  font-family: ${({ theme }) => theme.fonts.title};
  line-height: 130%;
  font-weight: ${({ weight }) => weight ?? 800};
`

export const RegularText = styled.p<RegularTextProps>`
  color: ${({ theme, color }) => theme.colors[`--${color ?? 'text'}`]};
  font-size: ${({ theme, size }) =>
    theme.textSizes[`--text-regular-${size ?? 'M'}`]};
  line-height: 130%;
  font-weight: ${({ weight }) => weight ?? 400};
`
