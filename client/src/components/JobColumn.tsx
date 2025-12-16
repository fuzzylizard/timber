import JobColumnHeading from "./JobColumnHeading";
import Jobs from "./Jobs";
import { Button } from "./ui/button";

interface JobColumnProps {
  columnName: string;
  handleClick: () => void;
}

export default function JobColumn({ columnName, handleClick }: JobColumnProps) {
  return (
    <>
      <JobColumnHeading columnName={columnName} />
      <Button
        className="my-2 hover:bg-slate-600 cursor-pointer w-full"
        onClick={handleClick}
      >
        New Job
      </Button>
      <Jobs />
    </>
  );
}
