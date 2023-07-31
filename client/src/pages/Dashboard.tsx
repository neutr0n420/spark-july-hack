import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUser } from "@clerk/clerk-react";
import { SyntheticEvent, useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios"

const DashBoard: React.FC = () => {
  const user = useUser();
  const nameOfUser = user.user?.fullName;
  const [className, setClassName] = useState("");
  // console.log(typeof(nameOfUser))
  // const navigate = useNavigate();

  const submitFunction = (e: SyntheticEvent) => {
    e.preventDefault();
    // navigate("/attendance");
    console.log(className)
    axios.post('http:localhost:3000/api/createClassAndQr',className)
    .then(response => {
      console.log(response.data)
    })
  };
  
  return (
    <div className="flex flex-col items-center h-full">
      <h1 className="text-3xl">Hello, {nameOfUser}</h1>
      <form onSubmit={submitFunction} className="w-full">
        <Card className="max-w-4xl mx-auto">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Generate QR</CardTitle>
            <CardDescription>Create QR code for Attendance</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label>Select Name of the Class</Label>
              <Select
                onValueChange={(event: any) => {
                  setClassName(event);
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Name of Class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="DBMS">DBMS</SelectItem>
                  <SelectItem value="OOPS">OOPS</SelectItem>
                  <SelectItem value="PROJECTMANAGMENT">
                    Project Managment
                  </SelectItem>
                  <SelectItem value="ML">ML</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label>Select Time in Mins</Label>
              <Select
                onValueChange={(e: any) => {
                  console.log(e);
                }}
              >
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
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Generate QR
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default DashBoard;
