import { forwardRef, InputHTMLAttributes } from 'react'
import { RegularText } from '../Typography'
import {
  InputWrapper,
  InputStyleContainer,
  InputStyled,
  RightText,
} from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  rightText?: string
}

export const CustomInput = forwardRef<HTMLInputElement, InputProps>(
  ({ error, rightText, className, ...props }, ref) => {
    return (
      <InputWrapper>
        <InputStyleContainer hasError={!!error}>
          <InputStyled ref={ref} {...props} />
          {rightText && <RightText>{rightText}</RightText>}
        </InputStyleContainer>
        {error && <RegularText size="S">{error}</RegularText>}
      </InputWrapper>
    )
  },
)
