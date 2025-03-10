import { useCoins } from "../hooks/useCoins";
import { useState } from "react";

import Coins from "./Coins"

export default function Main() {
    const { coins, getCoins, loading } = useCoins();

    const handleSubmit = (event) => {
        event.preventDefault();
        const { query } = Object.fromEntries(new window.FormData(event.target));

        getCoins(query);
    };



    const handleChange = (event) => { // forma controlada
        const inputValue = event.target.value;
        if (inputValue.startsWith(" ")) {
            event.target.value = ""
            return;
        }
        getCoins(inputValue);
        //Validaciones aqui en caso de que hayan con setError
    }
    console.log("Rendering?");
    return (
        <main>
            <form onSubmit={handleSubmit}>
                <input name="query" type="text" onChange={handleChange} placeholder="etherium,bitCoin,putinCoin"></input>
                <button type="submit">Buscar</button>
            </form>
            {
                loading ? <p>Cargando...</p> : <Coins coins={coins} />
            }
        </main>
    )
}