import Image from "next/image";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
import Button from "@/components/Micro/Button";
import { FaMicrosoft, FaApple } from "react-icons/fa6";

const index = () => {
  const router = useRouter();

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col justify-center items-center space-y-5 bg-[#293A47]  p-5">
        <div className="flex items-center space-x-5">
          <Image src="/Group 2.svg" alt="paws" width={50} height={50} />
          <h1 className="text-white font-medium">Login</h1>
          <Image src="/Group 1.svg" alt="paws" width={50} height={50} />
        </div>

        <Button className="flex items-center">
          <span>
            <FcGoogle />
          </span>
          Continue with Google
        </Button>
        <Button className="flex items-center">
          <span>
            <FaMicrosoft />{" "}
          </span>
          Continue with Microsoft
        </Button>
        <Button className="flex items-center space-x-2">
          <span>
            <FaApple />{" "}
          </span>
          Continue with Apple
        </Button>

        <div className="text-center text-white">
          <p>I don’t have an account?</p>
          <div
            onClick={() => router.push("/register")}
            className="cursor-pointer text-[#58CC02]"
          >
            Create Account
          </div>
        </div>
      </div>
    </main>
  );
};

export default index;
