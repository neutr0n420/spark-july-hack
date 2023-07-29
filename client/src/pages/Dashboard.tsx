import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {SignOutButton, useUser} from "@clerk/clerk-react"
import { SyntheticEvent } from "react"
import { useNavigate } from "react-router-dom"

const DashBoard:React.FC = () => {
    const user = useUser()
    const nameOfUser= user.user?.fullName
    // console.log(typeof(nameOfUser))
    const navigate = useNavigate()
    const submitFunction = (e:SyntheticEvent) =>{
        e.preventDefault()
        navigate('/attendance')
    }
    const ValueOnChange = (event:InputEvent) =>{
        const value:string = event.target?.value
        console.log(value)

    }
    return (
        <>
        DashBoard
            <h1>Hello, {nameOfUser}</h1> 
            <a href="http://localhost:5173">
            <SignOutButton >
                <Button>SignOut</Button>                
            </SignOutButton>
            <div style={{ background: 'white', padding: '16px' }}>

</div>
            </a>
            <br />
            <form onSubmit={submitFunction} className="w-64">
                <Label htmlFor="className">Enter Class Name</Label>    
                <Input id="className" placeholder="ClassName" onChange={ValueOnChange}/> 
                <Label>Select Time in Min's</Label>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder= "Duration of Class"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="30:00">30:00</SelectItem>
                        <SelectItem value="45:00">45:00</SelectItem>
                        <SelectItem value="60:00">60:00</SelectItem>
                        <SelectItem value="120:00">120:00</SelectItem>
                    </SelectContent>
                </Select>
                <Button type="submit">Generate QR</Button>
            </form>
                
        </>
    )
} 

export default DashBoard