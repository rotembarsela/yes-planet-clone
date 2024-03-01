import { IPromoLink } from "@/lib/types";
import { Link } from "@tanstack/react-router";

type PromoLinkProps = {
  promoLink: IPromoLink;
};

export const PromoLink = ({ promoLink }: PromoLinkProps) => {
  const { title, subTitle } = promoLink;

  return (
    <Link
      to="/vip"
      className="text-sm group-hover:underline w-full h-full block py-[6px]"
    >
      <h3 className="text-[#f5821e] font-bold">{title}</h3>
      {subTitle ? <p className="text-white">{subTitle}</p> : null}
    </Link>
  );
};
