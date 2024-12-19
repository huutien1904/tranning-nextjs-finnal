import { Button } from "@/components/ui/button";
import envConfig from "@/config";

export default function Home() {
  console.log("check3", envConfig);
  const isBrowser = typeof window !== "undefined";
  console.log(isBrowser);

  return <Button>Click me</Button>;
}
