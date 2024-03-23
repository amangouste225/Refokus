import { IoIosReturnRight } from "react-icons/io";

interface Props {
  children: React.ReactNode;
}

export default function Button({ children }: Props) {
  return (
    <div className="min-w-40 px-3 py-1 bg-zinc-100 text-black rounded-full flex justify-between items-center">
      <span className="text-sm font-regular">{children}</span>
      <IoIosReturnRight />
    </div>
  );
}
