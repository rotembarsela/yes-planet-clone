import { FooterSections } from "./FooterSections";

export const Footer = () => {
  return (
    <footer className="h-[335px] border-t border-t-[#b2b2b2] py-[25px]">
      <div className="w-[980px] h-full mx-auto flex flex-col justify-between items-center">
        <FooterSections />
        <p>
          All rights reserved Planet Cinemas {new Date().getFullYear()} &copy;
        </p>
      </div>
    </footer>
  );
};
