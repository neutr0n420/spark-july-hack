import { Button } from '@/components/ui/button'
import {QRCodeCanvas} from 'qrcode.react'
import { Link } from 'react-router-dom'
const Attandance = () =>{
const url = 'https://spark-july-hack-self.vercel.app/forms'
 return(
  <>
   <div className='w-1/2 m-auto'>
      <QRCodeCanvas value={url} size={600}/>
   </div>
    <Link to={'/allstuds'}>
   <Button>Show Attendence</Button>
   </Link>
   </>
 )
}
export default Attandance
