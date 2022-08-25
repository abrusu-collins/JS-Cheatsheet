import img from "../img/carbon.svg"
function Hero() {
    return ( 
        <div className="hero">
            <div className="herotxt">
                <h1>JSCheatSheets</h1>
                <p>Stop wasting your time when writing code.</p>
                <p>Get all your JavaScript cheetsheats here</p>
            </div>
            <img src={img} alt="hero-img" />
        </div>
     );
}

export default Hero;