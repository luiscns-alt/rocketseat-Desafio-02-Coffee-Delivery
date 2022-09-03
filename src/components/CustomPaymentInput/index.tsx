import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { PaymentContainer, PaymentContent } from './styles'

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

export const CustomPaymentInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ id, icon, label, ...props }, ref) => {
  return (
    <PaymentContainer>
      <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        <PaymentContent>
          {icon}
          {label}
        </PaymentContent>
      </label>
    </PaymentContainer>
  )
})
