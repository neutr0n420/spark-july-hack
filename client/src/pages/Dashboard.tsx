import {SignOutButton, SignedOut, RedirectToSignIn} from "@clerk/clerk-react"
const DashBoard:React.FC = () => {
    return (
        <>
        DashBoard
        
            <a href="http://localhost:5173">
            <SignOutButton>
                <button>Sign out</button>
            </SignOutButton>

            </a>
        
        
        </>
    )
} 

export default DashBoard