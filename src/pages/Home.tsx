import { MoveLeft } from "lucide-react";
import { Button } from "../components/ui/button";

export const Home = () => {
  // const api = import.meta.env.VITE_API_BASE_URL;

  return (
    <div>
      <Button className="w-full">
        <MoveLeft />
      </Button>
    </div>
  );
};
