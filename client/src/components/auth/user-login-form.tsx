import { FormEvent, useState } from "react";

import { cn } from "../../lib/utils";

import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useToast } from "../ui/use-toast";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserLoginForm({ className, ...props }): UserAuthFormProps {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { toast } = useToast();

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    toast({
      description: "Successfully logged in!",
    });

    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
    }, 3000);
  };

  const handleInputChange = (event: InputEvent) => {
    const { target = { name, value } } = event;

    setForm((currState) => ({ ...currState, [target.name]: target.value }));
    console.log(form);
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              name="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              onChange={handleInputChange}
            />
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="password"
              type="password"
              name="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
              onChange={handleInputChange}
            />
          </div>
          <Button disabled={isLoading || !form.email || !form.password}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Sign In with Email
          </Button>
        </div>
      </form>
      <span className="inset-0 w-full border-t" />
    </div>
  );
}
