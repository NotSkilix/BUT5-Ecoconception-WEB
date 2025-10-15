import Navbar from "../shared/Navbar.jsx";
import ButtonTopPage from "../shared/ButtonTopPage.jsx";
import TextReader from "../shared/TextReader.jsx";
import Table from "../shared/Table.jsx";
import usePageTitle from "../../hooks/usePageTitle.js";
import {motion} from "framer-motion";
import data from "../../data/accessibility/accessibility.json"
const AccessibilityPage = () => {
    usePageTitle("Accessibilité")

    return (
        <div>
            <Navbar/>
            <div className="max-w-7xl mx-auto px-4 py-8 text-center ">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut"
                    }}
                    viewport={{ once: true, margin: "-100px" }}>
                    <h1>🦾 Découverte de l’accessibilité numérique</h1>
                    <h2>Audit et correction avec WAVE</h2>

                    <div className="mt-4 py-5 px-5 rounded-lg border border-green-200 inline-block">
                        <h2>Sommaire</h2>
                        <p>Cette page est séparée en 4 parties:</p>
                        <ul>
                            <li><a href={"#introduction"}>Introduction</a></li>
                            <li><a href={"#audit"}>Audit avec Wave</a></li>
                            <li><a href={"#analyse"}>Analyse et correction</a></li>
                            <li><a href={"#conclusion"}>Synthèse</a></li>
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
                        <h2 id={"introduction"}>Introduction</h2>
                        <TextReader document={data.introduction} />
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
                        <h2 id={"audit"}>Audit avec Wave</h2>
                        <Table document={data.audit} />
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
                        <h2 id={"analyse"}>Analyse et correction</h2>
                        <TextReader document={data.analyse} />
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
                        <h2 id={"conclusion"}>Synthèse</h2>
                        <TextReader document={data.conclusion} />
                    </motion.div>
                </div>
            </div>

            <ButtonTopPage />
        </div>
    )
}

export default AccessibilityPage