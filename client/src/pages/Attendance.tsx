import {QRCodeCanvas} from 'qrcode.react'
const Attandance = () =>{
 return(
   <div className='w-1/2 m-auto'>
      <QRCodeCanvas value='http:localhost:5173/forms' size={600}/>
   </div>
 )
}
export default Attandance