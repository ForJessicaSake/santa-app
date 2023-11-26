import { useRouter } from "next/router";
import Button from "@/components/Micro/Button";

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <div className="flex flex-col justify-center items-center text-center space-y-7 min-h-screen">
        <h1 className="font-medium max-w-sm">
          JollyTalks with <span className=""> SANTA</span>
        </h1>
        <Button className="w-64" onClick={() => router.replace("/get-started")}>
          Welcome
        </Button>
      </div>
    </main>
  );
}
