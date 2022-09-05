import { useFormContext } from 'react-hook-form'
import { CustomInput } from '../../../../components/CustomInput'
import { AddressFormContainer, Div1, Div2, Div3 } from './style'

interface IErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function CompleteAddressForm() {
  const { register, formState } = useFormContext()
  const { errors } = formState as unknown as IErrorsType

  return (
    <AddressFormContainer>
      <Div1>
        <CustomInput
          placeholder="CEP"
          type="number"
          className="div1"
          {...register('cep')}
          error={errors.cep?.message}
        />
      </Div1>
      <Div2>
        <CustomInput
          placeholder="Rua"
          className="street"
          {...register('street')}
          error={errors.street?.message}
        />
      </Div2>
      <CustomInput
        type="number"
        placeholder="Número"
        {...register('number')}
        error={errors.number?.message}
      />
      <Div3>
        <CustomInput
          placeholder="Complemento"
          className="complement"
          rightText="Opcional"
          {...register('complement')}
          error={errors.complement?.message}
        />
      </Div3>
      <CustomInput
        placeholder="Bairro"
        {...register('district')}
        error={errors.district?.message}
      />
      <CustomInput
        placeholder="Cidade"
        {...register('city')}
        error={errors.city?.message}
      />
      <CustomInput
        placeholder="UF"
        {...register('uf')}
        error={errors.uf?.message}
      />
    </AddressFormContainer>
  )
}
