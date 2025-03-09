const api_url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";


export const fetchData = async ({ id }) => {
    try {
        const response = await fetch(`${api_url}${id ? `&ids=${encodeURIComponent(id)}` : ""}`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const coins = await response.json();
        return coins.map(coin => ({
            id: coin.id,
            symbol: coin.symbol,
            name: coin.name,
            image: coin.image,
            price: coin.current_price
        }))
    } catch (error) {
        console.log(error);
    }
}