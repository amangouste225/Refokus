import Stripe from "./Stripe";

import css from "../assets/images/stripes/css.svg";
import awwwards from "../assets/images/stripes/awwwward.svg";
import noCode from "../assets/images/stripes/nocode.svg";

export default function Stripes() {
  const data = [
    {
      url: css,
      number: 52,
    },
    {
      url: awwwards,
      number: 2,
    },
    {
      url: noCode,
      number: 15,
    },
    {
      url: css,
      number: 52,
    },
    {
      url: awwwards,
      number: 2,
    },
    {
      url: noCode,
      number: 15,
    },
  ];

  return (
    <div className="flex items-center overflow-hidden box-border">
      {data.map((stripe, i) => (
        <Stripe key={i} url={stripe.url} number={stripe.number} />
      ))}
    </div>
  );
}
