type Props = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionTitle({ eyebrow, title, description }: Props) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-zinc-300">{description}</p>
    </div>
  );
}