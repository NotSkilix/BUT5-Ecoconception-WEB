import Navbar from "../shared/Navbar.jsx";

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="px-4 py-8">
                <h1 className="text-4xl font-bold text-green-900 text-center mb-4"> Bienvenue ! </h1>
                <h2 className="text-3xl text-center mb-4">Voici le compte rendu du premier TP d'écoconception Web </h2>
            </div>
            <div>
                <h2>Le but de ce cours est de sensibiliser sur <span className="font-bold">l'écoconception web</span></h2>
                <p></p>
            </div>
        </div>
    )
}

export default Home