import Image from "next/image";
import { useRouter } from "next/router";
import Button from "@/components/Micro/Button";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import React from "react";
import { FaSpinner } from "react-icons/fa6";

const GetStarted = () => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  React.useEffect(() => {
    if (user) {
      router.push("/chat");
    }
  }, [user]);

  return (
    <main className="bg-[url('/GetStarted.svg')] bg-cover">
      <div className="flex min-h-screen items-center justify-center p-2 container mx-auto">
        {loading ? (
          <FaSpinner className="text-white text-6xl animate-spin" />
        ) : (
          <div className="border-4 border-white shadow-lg shadow-black flex flex-col justify-center items-center space-y-5 bg-[#293A47] max-w-sm min-h-[370px] rounded-[133px] h-full w-full p-5">
            <div className="flex items-center space-x-3">
              <Image src="/Group 2.svg" alt="paws" width={50} height={50} />
              <h1 className="text-white sm:text-3xl text-2xl font-bold">GET STARTED</h1>
              <Image src="/Group 1.svg" alt="paws" width={50} height={50} />
            </div>

            <Button
              className="flex items-center justify-center w-full sm:text-xl"
              onClick={() => router.push("/login")}
            >
              <span>
                <Image src="login.svg" alt="paws" width={40} height={40} />
              </span>
              LOGIN
            </Button>
            <Button
              className="flex items-center justify-center w-full sm:text-xl"
              onClick={() => router.push("/sign-up")}
            >
              <span>
                <Image src="santa.svg" alt="paws" width={40} height={40} />
              </span>
              CREATE AN ACCOUNT
            </Button>
          </div>
        )}
      </div>
    </main>
  );
};

export default GetStarted;
