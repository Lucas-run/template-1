interface testimonialCardProps {
  title: string;
  content: string;
}

export default function TestimonialCard({
  title,
  content,
}: testimonialCardProps) {
  return (
    <div className="bg-[var(--clr-primary-400)] my-6 mx-auto py-20 px-6 w-8/10 ">
      <h3 className=" text-[var(--clr-secondary-400)] text-center font-bold p-2 mb-4">
        {title}
      </h3>
      <div className=" text-center">{content}</div>
    </div>
  );
}
