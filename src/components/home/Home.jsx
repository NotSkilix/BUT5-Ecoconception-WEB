import Navbar from "../shared/Navbar.jsx";
import text from "../../data/home/homeText.json"
import HomeText from "./HomeText.jsx";
import usePageTitle from "../../hooks/usePageTitle.js";
import React, {useEffect} from "react";
import {motion} from "framer-motion";
import { WebsiteCarbonBadge } from 'react-websitecarbon-badge';

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
                <div className={"mb-4 space-y-6 py-8 px-8 bg-white rounded-lg shadow-md"}>
                    <h3>Trouver les résultats de cette page</h3>
                    <p>Voici les résultats de ce site qui fait office de compte rendu, réalisé de manière éco-responsable.</p>
                    <ul>
                        <li><a href="https://www.websitecarbon.com/website/notskilix-github-io-but5-ecoconception-web/">Website Carbone Calculator</a></li>
                        <li><a href="https://www.ecoindex.fr/resultat/?id=6699db85-4507-4cae-9883-b034bd60256e">EcoIndex</a></li>
                    </ul>

                    <h4>Badge</h4>
                    <p>Et nous avons même un badge pour notre site!</p>
                    <WebsiteCarbonBadge
                        lang="fr"
                        co2="0.01"
                        percentage="99"/>
                    <p>Malheuresement <a href={"https://www.ecoindex.fr"} target={"_blank"}>EcoIndex</a> ne propose pas de badge pour les sites en React.</p>
                </div>
            </motion.div>
        </div>
    )
}

export default Home