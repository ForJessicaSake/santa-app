import { useRouter } from "next/router";
import Button from "@/components/Micro/Button";

export default function Home() {
  const router = useRouter();
  return (
    <main  className="bg-[url('/Welcome.svg')] bg-cover">
      <div className="flex flex-col justify-center items-center text-center space-y-7 min-h-screen container mx-auto">
        <h1 className="font-extrabold sm:max-w-sm max-w-[250px] text-5xl sm:text-7xl text-[#43C000]">
          JollyTalks with <span className="text-white"> SANTA</span>
        </h1>
        <Button className="w-64 text-2xl" onClick={() => router.replace("/get-started")}>
          Welcome
        </Button>
      </div>
    </main>
  );
}


