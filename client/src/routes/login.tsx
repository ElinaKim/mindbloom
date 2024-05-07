import { useForm, SubmitHandler } from "react-hook-form";

import {
  createFileRoute,
  useRouterState,
  useRouter,
  redirect,
} from "@tanstack/react-router";

import { useAuth } from '../auth'
import Petals from "../assets/images/petals.webp"
import { CustomInput } from "../components/input"
import * as userApi from '../api/userApi'

export const Route = createFileRoute("/login")({
  beforeLoad: async ({ context }) => {
    console.log('context.auth.isAuthenticated', context.auth.isAuthenticated)
    if (context.auth.isAuthenticated) {
      throw redirect({ to: '/tasks/upcoming' })
    }
  },
  component: Login,
});

type LoginInputs = {
  email: string;
  password: string;
};

function Login() {
  const auth = useAuth()
  const router = useRouter()
  const isLoading = useRouterState({ select: (s) => s.isLoading })
  const navigate = Route.useNavigate()
  const search = Route.useSearch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>()

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    if (!data.email || !data.password) {
      return
    }

    const token = await userApi.login(data.email, data.password)
    auth.login(token)

    router.invalidate().finally(() => {
      navigate({ to: '/tasks/upcoming' })
    })
  };

  return (
    <>
      <div
        className={`relative flex flex-col items-center justify-items-center h-screen`}
      >
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
            <h2 className="text-xl font-kumbh-bold">Login</h2>
            <p className="text-xl text-grey mt-2">
              Nice to see you again! Enter your information below to login.
            </p>
          </div>
          <form
            className="flex flex-col w-[90%] md:w-[500px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <CustomInput
              labelText="Email"
              placeholder="Enter your email"
              type="email"
              id="email"
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
            <button
              className="my-4 py-2 px-14 rounded-md text-white bg-black"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
