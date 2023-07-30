import { FC } from "react";
import { Link } from "react-router-dom";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { SignOutButton, SignedIn, SignedOut } from "@clerk/clerk-react";

interface MainNavProps {
  items?: string[];
}

const MainNav: FC<MainNavProps> = ({ items }) => {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link to="/" className="items-center space-x-2 md:flex">
        <Icons.logo />
        <span className="font-bold inline-block">Attendance</span>
      </Link>
    </div>
  );
};

export default function Nav() {
  return (
    <div className="flex h-20 items-center justify-between py-6">
      <MainNav />
      <nav>
        <SignedOut>
          <Link
            to="/auth"
            className={cn("px-4", buttonVariants({ variant: "secondary" }))}
          >
            Login
          </Link>
        </SignedOut>
        <SignedIn>
          <SignOutButton>
            <Link
              to="/auth"
              className={cn("px-4", buttonVariants({ variant: "secondary" }))}
            >
              Sign out
            </Link>
          </SignOutButton>
        </SignedIn>
      </nav>
    </div>
  );
}
