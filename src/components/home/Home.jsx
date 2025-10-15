import Navbar from "../shared/Navbar.jsx";
import text from "../../data/home/homeText.json"
import HomeText from "./HomeText.jsx";
import usePageTitle from "../../hooks/usePageTitle.js";
import React, {useEffect} from "react";
import {motion} from "framer-motion";

const Home = () => {
    const BASE_URL= import.meta.env.BASE_URL;
    useEffect(() => {
        window.history.replaceState(null, "", BASE_URL)
    }, [BASE_URL]);

    usePageTitle("Accueil");

    return (
        <div>
            <Navbar />
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                    duration: 1.5,
                    ease: "easeInOut"
                }}
                className="max-w-7xl mx-auto px-4 py-8 text-center">
                <div className="px-4 py-20">
                    <h1> Bienvenue ! </h1>
                    <h2 className="text-black font-normal">Voici le compte rendu du premier TP d'écoconception Web </h2>
                </div>
                <div>
                    <HomeText texts={text}/>
                </div>
            </motion.div>
        </div>
    )
}

export default Home