import usePageTitle from "../../hooks/usePageTitle.js";
import Navbar from "../shared/Navbar.jsx";

const DecryptionPage = () => {
    usePageTitle("Decryption");
    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 py-8 text-center">
                <h1>Decryption Page</h1>
            </div>
        </div>
    );
}

export default DecryptionPage