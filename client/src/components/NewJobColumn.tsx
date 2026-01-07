import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { useCreateColumnMutation } from "@/hooks/use-columns-hooks";

export default function NewJobColumn() {
  const [clicked, setClicked] = useState(false);
  const [columnName, setColumnName] = useState("");

  const mutation = useCreateColumnMutation();

  function handleClick() {
    setClicked(true);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    mutation.mutate(
      { application_state: { name: columnName } },
      {
        onSuccess: () => {
          setColumnName("");
          setClicked(false);
        },
        onError: (error) => {
          // TODO add toast.error here
          console.error("Error creating column", error);
        },
      }
    );
  }

  return (
    <div className="w-90 bg-accent p-2 border">
      <div className="">
        {clicked && (
          <NewColumnInputField
            onSubmit={handleSubmit}
            columnName={columnName}
            setColumnName={setColumnName}
          />
        )}
        {!clicked && <NewColumnButton onClick={handleClick} />}
      </div>
    </div>
  );
}

function NewColumnButton({ onClick }: { onClick: () => void }) {
  return (
    <Button
      variant="outline"
      className="text-lg text-center w-full h-full cursor-pointer hover:border-slate-400 hover:shadow-sm"
      onClick={onClick}
    >
      <Plus /> New Column
    </Button>
  );
}

function NewColumnInputField({
  onSubmit,
  columnName,
  setColumnName,
}: {
  onSubmit: (event: React.FormEvent) => void;
  columnName: string;
  setColumnName: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <form action="" onSubmit={onSubmit}>
      <input
        type="text"
        value={columnName}
        onChange={(e) => setColumnName(e.target.value)}
        className="w-full p-2 border rounded-md bg-background"
        placeholder="Enter column name"
      />
    </form>
  );
}
