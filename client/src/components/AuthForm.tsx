import { signInQuery } from "@/lib/auth";
import type { User } from "@/types";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface AuthFormProps {
  isSignIn: boolean;
  setUser: (user: User) => void;
  setLoggedIn: (loggedIn: boolean) => void;
  setAuthChecked: (authChecked: boolean) => void;
}

export default function AuthForm({
  isSignIn,
  setUser,
  setLoggedIn,
  setAuthChecked,
}: AuthFormProps) {
  const [isSignInState, setIsSignInState] = useState(isSignIn);

  const { register, handleSubmit, reset } = useForm<User>();

  async function signIn(user: User) {
    const data = await signInQuery(user);

    console.log("Fetched user data:", data);

    if (data) {
      setUser(data);
      setLoggedIn(true);
      setAuthChecked(true);
    }

    reset();
  }

  function signUp(data: User) {
    console.log("Sign Up data:", data);
    reset();
  }

  function onSubmit(data: User) {
    if (isSignInState) {
      signIn(data);
    } else {
      signUp(data);
    }
  }

  return (
    <div className="mx-auto mt-20 w-full max-w-md p-8 border border-gray-300 rounded-lg shadow-lg">
      <div className="text-center">
        <h2 className="text-4xl">Welcome to Timber</h2>
        <p className="m-2">
          Please sign {isSignInState ? "in" : "up"} to continue
        </p>
      </div>

      <form
        className="mt-4 flex flex-col gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="email">Email:</label>
        <input
          className="border border-gray-300 rounded-md p-1 inline-block w-full focus:bg-white"
          type="email"
          id="email"
          {...register("email_address")}
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          className="border border-gray-300 rounded-md p-1 inline-block w-full focus:bg-white"
          type="password"
          id="password"
          {...register("password")}
          required
        />
        <br />
        {!isSignInState && (
          <>
            <label htmlFor="passwordConfirmation">Password Confirmation:</label>
            <input
              className="border border-gray-300 rounded-md p-1 inline-block w-full focus:bg-white"
              type="password"
              id="passwordConfirmation"
              {...register("password_confirmation")}
              required
            />
            <br />
          </>
        )}
        <button
          type="submit"
          className="bg-primary border border-gray-500 rounded-md p-1 mt-2 cursor-pointer hover:bg-secondary hover:text-foreground text-white"
        >
          {isSignInState ? "Sign In" : "Sign Up"}
        </button>
      </form>
      {isSignInState ? (
        <p
          className="mt-4 hover:underline cursor-pointer"
          onClick={() => setIsSignInState(!isSignInState)}
        >
          Don't have an account? Sign Up
        </p>
      ) : (
        <p
          className="mt-4 hover:underline cursor-pointer"
          onClick={() => setIsSignInState(!isSignInState)}
        >
          Already have an account? Sign In
        </p>
      )}
    </div>
  );
}
