interface contactCardProps {
  title: string;
  content: string;
}

export default function ContactCard({ title, content }: contactCardProps) {
  return (
    <div className="bg-[var(--clr-primary-400)] my-4 p-2 w-8/10 ">
      <h3 className=" text-[var(--clr-neutral)]  font-extrabold text-2xl py-2 mb-4">
        {title}
      </h3>
      <div className=" ">{content}</div>
    </div>
  );
}
