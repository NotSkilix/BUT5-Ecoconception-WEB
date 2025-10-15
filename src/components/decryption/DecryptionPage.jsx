import usePageTitle from "../../hooks/usePageTitle.js";
import Navbar from "../shared/Navbar.jsx";
import GeneralPresentation from "./GeneralPresentation.jsx";
import TechnicalOperation from "./TechnicalOperation.jsx";
import PracticalExample from "./PracticalExample.jsx";
import LimitsAndBias from "./LimitsAndBias.jsx";
import EducationalApplication from "./EducationalApplication.jsx";
import ButtonTopPage from "../shared/ButtonTopPage.jsx";
import Conclusion from "./Conclusion.jsx";
import {motion} from "framer-motion";

const DecryptionPage = () => {
    usePageTitle("Decryption");

    return (
        <div id="top-page">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 py-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut"
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h1>🔍 Décryptage technique et pédagogique de Website Carbon Calculator </h1>
                    <div className="mt-4 py-5 px-5 rounded-lg border border-green-200 inline-block">
                        <h2>Sommaire</h2>
                        <p>Cette page est séparée en 6 étapes que vous pouvez trouver juste ici suivant votre besoin:</p>
                        <ul>
                            <li><a href={"#general-presentation"}>Présentation Générale</a></li>
                            <li><a href={"#technical-operation"}>Présentation Technique</a></li>
                            <li><a href={"#practical-example"}>Exemple Pratique</a></li>
                            <li><a href={"#limits-and-bias"}>Limites et biais</a></li>
                            <li><a href={"#educational-application"}>Application pédagogique</a></li>
                            <li><a href={"#conclusion"}>Conclusion</a></li>
                        </ul>
                    </div>
                </motion.div>
                <div className="mt-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 1.5,
                            ease: "easeInOut"
                        }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-4 space-y-4 py-8 px-8 bg-white rounded-lg shadow-md border border-green-200">
                        <h2 id="general-presentation">Présentation générale</h2>
                        <GeneralPresentation />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 1.5,
                            ease: "easeInOut"
                        }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-4 space-y-4 py-8 px-8 bg-white rounded-lg shadow-md border border-green-200">
                        <h2 id="technical-operation">Présentation technique</h2>
                        <TechnicalOperation />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 1.5,
                            ease: "easeInOut"
                        }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-4 space-y-4 py-8 px-8 bg-white rounded-lg shadow-md border border-green-200">
                        <h2 id="practical-example">Exemple pratique</h2>
                        <PracticalExample />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 1.5,
                            ease: "easeInOut"
                        }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-4 space-y-4 py-8 px-8 bg-white rounded-lg shadow-md border border-green-200">
                        <h2 id="limits-and-bias">Limites et biais</h2>
                        <LimitsAndBias />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 1.5,
                            ease: "easeInOut"
                        }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-4 space-y-4 py-8 px-8 bg-white rounded-lg shadow-md border border-green-200">
                        <h2 id="educational-application">Application pédagogique</h2>
                        <EducationalApplication />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 1.5,
                            ease: "easeInOut"
                        }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-4 space-y-4 py-8 px-8 bg-white rounded-lg shadow-md border border-green-200">
                        <h2 id="conclusion">Conclusion</h2>
                        <Conclusion />
                    </motion.div>
                </div>
            </div>
            <ButtonTopPage id={"top-page"} />
        </div>
    );
}

export default DecryptionPage