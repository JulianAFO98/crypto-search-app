import { useState, useEffect } from "react";
import { fetchData } from "../services/fetch"

export function useCoins() {
    const [coins, setCoins] = useState();

    const getCoins = (id = "") => {
        fetchData({ id }).then(data => setCoins(data));
        console.log("Doing Fetch");
    }


    useEffect(() => {
        getCoins();
    }, [])

    return { coins, getCoins };
}