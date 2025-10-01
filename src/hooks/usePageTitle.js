import { useEffect } from 'react';

const usePageTitle = (pageTitle) => {
    useEffect(() => {
        const isDevelopment = import.meta.env.DEV;

        let fullTitle = 'Ecoconception Web';

        if (pageTitle) {
            fullTitle = `${pageTitle} - ` + fullTitle;
        }

        // Depending on the ENV
        if (isDevelopment) {
            fullTitle = '[DEV] ' + fullTitle;
        }

        document.title = fullTitle;

        return () => {
            document.title = 'Ecoconception Web';
        };
    }, [pageTitle]);
};

export default usePageTitle;
