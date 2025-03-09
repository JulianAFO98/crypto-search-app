import { useCoins } from "../hooks/useCoins";
import Coins from "./Coins"

export default function Main() {
    const { coins, getCoins } = useCoins();

    const handleSubmit = (event) => {
        event.preventDefault();
        const searchCoin = Object.fromEntries(new window.FormData(event.target));
        getCoins(searchCoin.search);
    };



    return (
        <main>
            <form onSubmit={handleSubmit}>
                <input name="search" type="text" required placeholder="etherium,bitCoin,putinCoin"></input>
                <button type="submit">Buscar</button>
            </form>
            <Coins coins={coins} />
        </main>
    )
}