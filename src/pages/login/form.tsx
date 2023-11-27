import Button from "@/components/Micro/Button";
import { logIn } from "@/lib/firebase";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";

const Form = () => {
  const [isLoading, setIsLoading] = React.useState({
    emailAuth: false,
  });
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading({ ...isLoading, emailAuth: true });
      await logIn(user.email, user.password);
      setTimeout(() => {
        router.push("/chat");
      }, 2500);
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email already in use, kindly log in");
      } else if (error.code === "auth/user-not-found") {
        toast.error("User not found");
      } else {
        toast.error("Network error, kindly check your internet connection");
      }
    }
    setIsLoading({ ...isLoading, emailAuth: false });
  };
  return (
    <main className="bg-[url('/GetStarted.svg')] bg-cover">
      <div className="flex min-h-screen items-center justify-center p-2 container mx-auto">
        <div className="border-4 border-white shadow-lg shadow-black flex flex-col justify-center items-center space-y-5 bg-[#293A47] max-w-sm min-h-[480px] rounded-[133px] h-full w-full p-5">
          <div className="flex items-center space-x-5">
            <Image src="/Group 2.svg" alt="paws" width={50} height={50} />
            <h1 className="text-white  sm:text-3xl text-2xl font-bold">
              Login
            </h1>
            <Image src="/Group 1.svg" alt="paws" width={50} height={50} />
          </div>
          <form
            onSubmit={handleLogin}
            className="flex flex-col space-y-5 w-full items-center"
          >
            <input
              placeholder="Enter Your Email Adress"
              required
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="border-[3px] rounded-full h-12 p-3 w-full border-white  shadow-md shadow-black bg-[#212F38] text-white font-medium"
            ></input>
            <input
              placeholder="Enter Your Password"
              required
              type="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="border-[3px] rounded-full h-12 p-3 w-full border-white  shadow-md shadow-black bg-[#212F38] text-white font-medium"
            ></input>

            <Button className="w-full">LOGIN</Button>
          </form>
          <div className="text-center pt-5 text-white">
            <p>I don’t have an account?</p>
            <div
              onClick={() => router.push("/sign-up")}
              className="cursor-pointer text-[#58CC02]"
            >
              Create Account
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Form;
