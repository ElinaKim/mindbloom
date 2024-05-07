import { useForm, SubmitHandler } from 'react-hook-form'
import { CustomInput } from '../components/input'
import { createLazyFileRoute } from '@tanstack/react-router'
import Petals from '../assets/images/petals.webp'

export const Route = createLazyFileRoute('/login')({
  component: Login,
})

type LoginInputs = {
  email: string
  password: string
}

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>()

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {

  }

  return (
    <>
      <div className={`relative flex flex-col items-center justify-items-center h-screen`}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${Petals})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'scroll',
            backgroundPosition: 'left',
            opacity: '0.5',
          }}
        />
        <div
          className='flex flex-col items-center mt-8 w-[90%]'
          style={{ zIndex: 10 }}>
          <div className='w-[90%] md:w-[500px]'>
            <h2 className='text-xl font-kumbh-bold'>
              Login</h2>
            <p className='text-xl text-grey mt-2'>
              Nice to see you again! Enter your information below to login.</p>
          </div>
          <form
            className='flex flex-col w-[90%] md:w-[500px]'
            onSubmit={handleSubmit(onSubmit)}
          >
            <CustomInput
              labelText='Email'
              placeholder='Enter your email'
              type='email'
              id='email'
              errorMessage={errors.email ? 'Please provide an email' : undefined}
              aria-invalid={errors.email ? 'true' : 'false'}
              {...register('email', { required: true })}
            />
            <CustomInput
              labelText='Password'
              placeholder='Enter your password'
              type='password'
              id='password'
              errorMessage={errors.password ? 'Password must be at least 8 characters' : undefined}
              aria-invalid={errors.password ? 'true' : 'false'}
              {...register('password', { required: true, minLength: 8 })}
            />
            <button className='my-4 py-2 px-14 rounded-md text-white bg-black'
              type='submit'>
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
