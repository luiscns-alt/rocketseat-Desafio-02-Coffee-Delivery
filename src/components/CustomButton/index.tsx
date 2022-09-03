import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | number
}

export function CustomButton({ text, ...rest }: ButtonProps) {
  return <ButtonContainer {...rest}>{text}</ButtonContainer>
}
