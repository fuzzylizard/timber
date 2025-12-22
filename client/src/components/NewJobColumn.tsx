import { Plus } from "lucide-react";
import { Button } from "./ui/button";

export default function NewJobColumn() {
  return (
    <div className="w-90 bg-accent p-2 border">
      <div className="">
        <Button
          variant="outline"
          className="text-lg text-center w-full h-full cursor-pointer"
        >
          <Plus /> New Column
        </Button>
      </div>
    </div>
  );
}
