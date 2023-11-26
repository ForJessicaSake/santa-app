import Image from "next/image";
import { useRouter } from "next/router";
import Button from "@/components/Micro/Button";

const index = () => {
  const router = useRouter();
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col justify-center items-center space-y-5 bg-[#293A47] p-5">
        <div className="flex items-center space-x-3">
          <Image src="/Group 2.svg" alt="paws" width={50} height={50} />
          <h1 className="text-white font-medium">GET STARTED</h1>
          <Image src="/Group 1.svg" alt="paws" width={50} height={50} />
        </div>

        <Button
          className="flex items-center"
          onClick={() => router.push("/login")}
        >
          <span>
            <Image src="login.svg" alt="paws" width={40} height={40} />
          </span>
          LOGIN
        </Button>
        <Button className="flex items-center">
          <span>
            <Image src="santa.svg" alt="paws" width={40} height={40} />
          </span>
          CREATE AN ACCOUNT
        </Button>
      </div>
    </main>
  );
};

export default index;
