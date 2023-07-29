import { Button } from "@/components/ui/button"
import qr from "../images/qr.png"

const Index = () => {
    return (
        <div className="flex flex-col items-center justify-center p-5">
            <img className="w-24 mb-5" src={qr} alt="logo" />
            <div className="text-center">
                <h1 className="text-red-500 font-bold text-4xl mb-1">Welcome to QR Attendance</h1>
                <p className="text-gray-300 font-semibold text-lg">A QR based attendance management system</p>
            </div>
            <div className="text-center">
                <h1 className="text-green-500 font-bold text-3xl my-2">Features</h1>
                <div className="text-gray-300 text-lg font-semibold grid grid-cols-2 gap-x-4 mb-0">
                    <span>QR based attendance</span>
                    <span>Real time attendance</span>
                    <span>Attendance report</span>
                    <span>Attendance history</span>
                </div>
            </div>
            <div className="text-center">
                <h1 className="text-yellow-300  font-bold text-3xl mb-1 mt-0">How to use</h1>
                <div className="text-gray-300 font-semibold text-lg grid grid-cols-1">
                    <span>Click on the login button </span>
                    <span className="text-2xl">&darr;</span>
                    <span>Scan the QR code </span>
                    <span className="text-2xl">&darr;</span>
                    <span>Click on the submit button </span>
                    <span className="text-2xl">&darr;</span>
                    <span>Click on the login button</span>
                </div>
            </div>
            <a href="http://localhost:5173/auth">
                <Button className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Click here to Login
                </Button>
            </a>
        </div>
    )
}
export default Index
