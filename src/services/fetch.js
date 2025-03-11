const api_url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";


export const fetchData = async ({ id }) => {
    try {
        const response = await fetch(`${api_url}${id ? `&ids=${encodeURIComponent(id)}` : ""}`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const coins = await response.json();

        return coins.map(item => {
            const { roi, ...newCoin } = item;
            return newCoin;
        });
    } catch (error) {
        throw new Error("Error fetching data", error.message);
    }
}