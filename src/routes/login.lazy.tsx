import { useForm, SubmitHandler } from 'react-hook-form'
import { CustomInput } from '../components/input'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/login')({
  component: LoginComponent,
})

type LoginComponentInputs = {
  userName: string
  password: string
}

function LoginComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginComponentInputs>()

  const onSubmit: SubmitHandler<LoginComponentInputs> = (data) => alert(JSON.stringify(data))

  return (
    <>
      <form 
        className='w-[80%]'
        onSubmit={handleSubmit(onSubmit)}
      >
        <CustomInput 
          labelText='User Name'
          id='username'
          errorMessage={errors.userName ? 'Invalid User Name' : undefined}
          aria-invalid={errors.userName ? "true" : "false"}
          {...register('userName', { required: true })}
        />
        <CustomInput 
          labelText='Password'
          id='password'
          errorMessage={errors.password ? 'Invalid Password' : undefined}
          aria-invalid={errors.password ? "true" : "false"}
          {...register('password', { required: true })}
        />
        <button type='submit'> Submit </button>
      </form>
    </>
  )
}
