import { Button } from "@/components/ui/button";
import envConfig from "@/config";

export default function Home() {
  console.log("check3", envConfig);

  return <Button className="bg-background">Click me</Button>;
}
