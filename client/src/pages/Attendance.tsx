import {QRCodeCanvas} from 'qrcode.react'

const Attandance = () =>{
const url = 'localhost:5173/form'
 return(
   <div className='w-1/2 m-auto'>
      <QRCodeCanvas value={url} size={600}/>
   </div>
 )
}
export default Attandance