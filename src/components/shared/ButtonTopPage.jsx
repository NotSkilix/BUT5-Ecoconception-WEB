const ButtonTopPage = () => {
    function onClickScrollTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div>
            <button className="fixed bottom-4 right-4 bg-green-800 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-700 transition cursor-pointer"
            onClick={onClickScrollTop}>
                🔝 Retour en haut de la page
            </button>
        </div>
    )
}

export default ButtonTopPage;