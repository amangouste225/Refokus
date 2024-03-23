interface Props {
  url: "string";
  number: number;
}

export default function Stripe({ url, number }: Props) {
  return (
    <div className="px-4 stripes py-5 border border-y-[1px] border-r-[1px] box-content border-zinc-600 flex justify-between items-center text-white">
      <span className="w-24">
        <img src={url} className="w-full" alt={`stripe for ${url}`} />{" "}
      </span>
      <span className="font-semibold"> {number} </span>
    </div>
  );
}
