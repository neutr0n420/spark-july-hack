import axios from "axios"
import { useEffect, useState } from "react"

const GetAllStud:React.FC = () => {
const [stud , setStud] = useState(null)

useEffect(()=> {
    axios.get('http://localhost:3000/api/getstuds')
    .then(res => setStud(res.data))

} , [])

return (
<>

{ stud ?stud.map(el => <li>{el.email} {"  "}{el.rollnumber}</li>) : null}
</>
)
}

export default GetAllStud