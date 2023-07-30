import { FC } from "react";
import { Icons } from "./icons";

interface FooterProps {
  className?: string;
}

const Footer: FC<FooterProps> = ({ className }) => {
  return (
    <footer className={className}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Icons.logo />
          <p className="text-center text-sm leading-loose md:text-left">
            The source code is available on{" "}
            <a
              href="https://github.com/SazedWorldbringer/spark-july-hack"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
