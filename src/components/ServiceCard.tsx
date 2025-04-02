interface serviceCardProps {
  title: string;
  content: string;
}

export default function ServiceCard({ title, content }: serviceCardProps) {
  return (
    <div className="my-6 lg:max-w-7/10">
      <h3 className="bg-[var(--clr-secondary-400)] text-[var(--clr-neutral)] font-bold w-7/10 p-2 ">
        {title}
      </h3>
      <div className="border-solid border-1 border-gray-600 rounded-r-md rounded-bl-md p-8">
        {content}
      </div>
    </div>
  );
}
