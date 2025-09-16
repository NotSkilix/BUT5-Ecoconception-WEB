import Navbar from "../shared/Navbar.jsx";
import TextSection from "../shared/TextSection.jsx";
import text from "../../data/home/homeText.json"

const Home = () => {
    return (
        <div >
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 py-8 text-center">
                <div className="px-4 py-20">
                    <h1> Bienvenue ! </h1>
                    <h2 className="text-black font-normal">Voici le compte rendu du premier TP d'écoconception Web </h2>
                </div>
                <div>
                    <div>
                        <TextSection content={text.introduction.content} title={text.introduction.title} subtitle={text.introduction.subtitle} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home