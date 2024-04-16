import Navbar from "../components/Navbar";

export default function Layout({children}){
    return(
        <>
            {window.location !== '/login' && (<Navbar></Navbar>)}
            {children}
        </>
    )
}