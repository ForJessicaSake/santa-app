import Image from "next/image";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
import Button from "@/components/Micro/Button";
import { FaMicrosoft, FaApple } from "react-icons/fa6";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import React from "react";
import Link from "next/link";
const SignUp = () => {
    const router = useRouter();

    const [signInWithGoogle, , loading, error] = useSignInWithGoogle(auth);

    const [user] = useAuthState(auth);

    React.useEffect(() => {
        if (user) {
            router.push("/chat");
        }
    }, [user]);

    return (
        <main className="bg-[url('/GetStarted.svg')] bg-cover">
            <div className="flex min-h-screen items-center justify-center p-2 container mx-auto">
                <div className="border-4 border-white shadow-lg shadow-black flex flex-col justify-center items-center space-y-5 bg-[#293A47] max-w-sm min-h-[480px] rounded-[133px] h-full w-full p-5">
                    <div className="flex items-center space-x-5">
                        <Image
                            src="/Group 2.svg"
                            alt="paws"
                            width={50}
                            height={50}
                        />
                        <h1 className="text-white  sm:text-3xl text-2xl font-bold">
                            SIGN UP
                        </h1>
                        <Image
                            src="/Group 1.svg"
                            alt="paws"
                            width={50}
                            height={50}
                        />
                    </div>

                    <Button
                        onClick={() => signInWithGoogle()}
                        className="flex items-center justify-center w-full sm:text-xl"
                    >
                        <span>
                            <FcGoogle className="mr-2" />
                        </span>
                        Continue with Google
                    </Button>
                    <Button
                        className="w-full sm:text-xl"
                        onClick={() => router.push("/sign-up/form")}
                    >
                        Continue with Email & Password
                    </Button>

                    <div className="text-center pt-5 text-white">
                        <p>Already have an account?</p>
                        <Link
                            href={"/login"}
                            className="cursor-pointer text-[#58CC02]"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SignUp;
