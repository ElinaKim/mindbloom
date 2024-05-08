import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CustomInput } from '../components/input';
import { createLazyFileRoute, Link, useRouter } from '@tanstack/react-router';
import Petals from '../assets/images/petals.webp';
import * as usersApi from '../api/userApi';

export const Route = createLazyFileRoute("/register")({
  component: Register,
});

type RegisterInputs = {
  userName: string;
  email: string;
  password: string;
}

function Register() {
  const [loading, setLoading] = useState(false);
  const router = useRouter()
  const navigate = Route.useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>();

  const onSubmit: SubmitHandler<RegisterInputs> = async (data) => {
    try {
      setLoading(true)
      await usersApi.register(data.userName, data.email, data.password)
      router.invalidate().finally(() => {
        navigate({ to: '/login' })
      })
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="relative flex flex-col items-center justify-items-center h-screen">
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${Petals})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll",
            backgroundPosition: "left",
            opacity: "0.5",
          }}
        />
        <div
          className="flex flex-col items-center mt-8 w-[90%]"
          style={{ zIndex: 10 }}
        >
          <div className="w-[90%] md:w-[500px]">
            <h2 className="text-xl font-kumbh-bold">Register</h2>
            <p className="text-xl text-grey mt-2">
              Nice to meet you! Enter your details below to register.
            </p>
          </div>
          <form
            className="flex flex-col w-[90%] md:w-[500px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <CustomInput
              labelText="User Name"
              placeholder="Enter your username"
              type="text"
              id="username"
              errorMessage={
                errors.userName ? "Please provide a name" : undefined
              }
              aria-invalid={errors.email ? "true" : "false"}
              {...register("userName", { required: true })}
            />
            <CustomInput
              labelText="Email"
              placeholder="Enter your email"
              type="email"
              errorMessage={
                errors.email ? "Please provide an email" : undefined
              }
              aria-invalid={errors.email ? "true" : "false"}
              {...register("email", { required: true })}
            />
            <CustomInput
              labelText="Password"
              placeholder="Enter your password"
              type="password"
              id="password"
              errorMessage={
                errors.password
                  ? "Password must be at least 8 characters"
                  : undefined
              }
              aria-invalid={errors.password ? "true" : "false"}
              {...register("password", { required: true, minLength: 8 })}
            />
            {
              loading
                ?
                <span>Loading...</span>
                :
                <button className="my-4 py-2 px-14 rounded text-white bg-black" disabled={loading}>
                  Register
                </button>

            }
            <p className="self-center">
              <span className="text-grey py-0.5 px-1">
                Already have an account?
              </span>
              <Link className="mx-2" to="/login">
                <span className="hover:underline">Login</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
