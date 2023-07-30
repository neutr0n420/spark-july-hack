import { buttonVariants } from "@/components/ui/button";
import { SignIn } from "@clerk/clerk-react";

const Auth: React.FC = () => {
  return (
    <div>
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary: buttonVariants({ variant: "default" }),
            formFieldInput:
              "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            formFieldLabel:
              "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            card: "rounded-xl",
          },
        }}
      />
    </div>
  );
};

export default Auth;
