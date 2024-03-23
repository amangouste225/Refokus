interface Props {
  children: React.ReactNode;
}

export default function Button({ children }: Props) {
  return (
    <div className="min-w-40 px-3 bg-zinc-100 text-black rounded-full">
      <span className="text-sm font-regular">{children}</span>
    </div>
  );
}
