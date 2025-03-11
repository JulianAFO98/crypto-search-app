import { useState, useEffect, useRef, useCallback } from "react";
import { fetchData } from "../services/fetch"

export function useCoins() {
    const [coins, setCoins] = useState();
    const [loading, setLoading] = useState(false);
    const previousId = useRef();

    const getCoins = useCallback(async (id = "") => {
        if (previousId.current === id) return;
        try {
            setLoading(true);
            previousId.current = id;
            const coins = await fetchData({ id });
            setCoins(coins);
            console.log("Doing Fetch");
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        getCoins();
    }, [])

    return { coins, getCoins, loading };
}