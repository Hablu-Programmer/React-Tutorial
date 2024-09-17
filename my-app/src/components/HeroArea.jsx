import "./Hero.css"; // normal

import Hablu from "./heroArea.module.css"

function Hero(){
    const MyStyle = {
        color:"white",
        backgroundColor:"tomato",
        textAlign:"center",

    }

    return (
        <>
            <h1 style={{backgroundColor:"green", color:"white", textAlign:"center"}}>This Is Hero Section</h1>

            <h2 id="Heading2">This Section Design Comes From External CSS </h2>

            <h3 style={MyStyle}>This Styling Coming From Object</h3>

            <div className={Hablu.Joker}>

            </div>

            
        </>
    )
}

export default Hero; 