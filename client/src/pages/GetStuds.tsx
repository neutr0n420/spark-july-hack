import { useEffect, useState } from "react"
import axios  from "axios"
import {z} from 'zod'

const userObj = z.array(
z.object({
    email: z.string(),
    rollnumber : z.number(),
    id: z.number(),
    time : z.string()
})
)

type UserProp = z.infer <typeof userObj>

const GetStuds:React.FC = () => {
    const [allStud , setAllStud] = useState<UserProp>()
    useEffect(()=> {
        axios.get('https://attendance-kl6p.onrender.com/api/getstuds').then(
            res => {
                setAllStud(res.data)
                console.log(res.data)
            } 
        )
    } , [])
    return(
        <>
        <div>
        {allStud ? allStud.map(el => <li >{el.email}{'  '}{el.rollnumber}{'  '}{el.time}</li>) : null}
        </div>
        </>
    )
}

export default GetStuds