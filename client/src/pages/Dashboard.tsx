import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SignOutButton, useUser } from "@clerk/clerk-react";
import { SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";

const DashBoard: React.FC = () => {
  const user = useUser();
  const nameOfUser = user.user?.fullName;
  // console.log(typeof(nameOfUser))
  const navigate = useNavigate();
  const submitFunction = (e: SyntheticEvent) => {
    e.preventDefault();
    navigate("/attendance");
  };
  const ValueOnChange = (event: InputEvent) => {
    const value: string = event.target?.value;
    console.log(value);
  };
  return (
    <>
      <div className="flex justify-between mt-6 px-10">
        <h1 className="text-2xl font-extrabold">
          Hello, <span className="text-slate-400">{nameOfUser}</span>
        </h1>
        <a href="http://localhost:5173">
          <SignOutButton>
            <Button>SignOut</Button>
          </SignOutButton>
          <div style={{ background: "white", padding: "16px" }}></div>
        </a>
      </div>
      <br />
      <form onSubmit={submitFunction} className="w-1/2 m-auto">
        <Card className="px-36 py-20 ">
          {/* */}

          <Label htmlFor="className">Enter Class Name</Label>
          <Input
            id="className"
            placeholder="ClassName"
            onChange={ValueOnChange}
          />
          <br />

          <Label>Select Subject</Label>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Name of Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dbms">DBMS</SelectItem>
              <SelectItem value="oops">OOP's</SelectItem>
              <SelectItem value="ML">Machine Learning</SelectItem>
              <SelectItem value="Project managment">Project managment</SelectItem>
            </SelectContent>
          </Select>
          <br />
          <Label>Select Time in Min's</Label>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Duration of Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="30:00">30:00</SelectItem>
              <SelectItem value="45:00">45:00</SelectItem>
              <SelectItem value="60:00">60:00</SelectItem>
              <SelectItem value="120:00">120:00</SelectItem>
            </SelectContent>
          </Select>
          <br />
          <br />
          <div className="text-center">
            <Button className="w-1/2" type="submit">
              Generate QR
            </Button>
          </div>
        </Card>
      </form>
    </>
  );
};

export default DashBoard;
