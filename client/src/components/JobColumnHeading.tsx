interface JobColumnHeadingProps {
  columnName: string;
}

export default function JobColumnHeading({columnName}: JobColumnHeadingProps) {
  return (
    <h2 className="font-bold text-lg text-center">{columnName}</h2>
  )
}
