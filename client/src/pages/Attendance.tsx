import {QRCodeCanvas} from 'qrcode.react'
import { useState } from 'react'

const Attandance = () =>{
const [url , setUrl ] = useState('http://localhost:5173/forms')
 return(
   <div className='w-1/2 m-auto'>
      <QRCodeCanvas value={url} size={600}/>
   </div>
 )
}
export default Attandance