
const API_KEY = 'ESEKC3R-VA94RS5-MSMQFBJ-PCTTGY9';

const api = (API_URL = 'https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh/api/v1/') => {
    const SEARCH_API_URL = `${API_URL}beers?search=`;
    const BEERS_URL = `${API_URL}beers`
    return {
        getBeers: async (query) => {
            try {                
                const requestURL = query ? `${SEARCH_API_URL}${query}` : BEERS_URL;
                const response = await fetch(requestURL, {
                    headers: {
                        'Content-type': 'application/json',
                        'X-API-KEY': API_KEY,
                    },
                });
                console.log(response);
                const datos = await response.json();
                return datos;
            } catch (e) {
                console.error(e);
                throw e;
            }
        },
    };
};
export default api;