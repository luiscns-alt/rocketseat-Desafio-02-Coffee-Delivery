import { ReactNode } from 'react'
import { RegularText } from '../../../../components/Typography'
import { TitleContainer } from './styles'

interface SectionTitleProps {
  title: string
  subtitle: string
  icon: ReactNode
}

export function SectionTitle({ title, subtitle, icon }: SectionTitleProps) {
  return (
    <TitleContainer>
      {icon}
      <div>
        <RegularText color="subtitle">{title}</RegularText>
        <RegularText size="S">{subtitle}</RegularText>
      </div>
    </TitleContainer>
  )
}
