import { useCoins } from "../hooks/useCoins";

import debounce from "just-debounce-it";

import Coins from "./Coins"

export default function Main() {
    const { coins, getCoins, loading } = useCoins();
    const debouncedGetCoins = debounce(value => getCoins(value), 500);

    const handleSubmit = (event) => {
        event.preventDefault();
        const { query } = Object.fromEntries(new window.FormData(event.target));
        getCoins(query);
    };



    const handleChange = (event) => {
        const inputValue = event.target.value;
        if (inputValue.startsWith(" ")) {
            event.target.value = ""
            return;
        }
        debouncedGetCoins(inputValue);
        //Validaciones aqui en caso de que hayan 
    }


    return (
        <main>
            <form onSubmit={handleSubmit}>
                <input name="query" type="text" onChange={handleChange} placeholder="etherium,bitcoin,meth..."></input>
                <button type="submit">Buscar</button>
            </form>
            {loading ? <p className="loading">Cargando...</p> : <Coins coins={coins} />}
            {

            }
        </main>
    )
}