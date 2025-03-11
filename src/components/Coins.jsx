import { useState } from "react";



export default function Coins({ coins }) {
    const [details, setDetails] = useState();

    const handleClick = (coin) => {
        setDetails(coin);
    }
    return (
        <>
            <ul className="result-container">
                {
                    coins?.map((coin) => {
                        return (<li key={coin.id} onClick={() => handleClick(coin)} className="coin-container">
                            <h2>{coin.name}</h2>
                            <img src={coin.image} alt={coin.name} />
                            <h3>{coin.symbol}</h3>
                            <p>${coin.current_price}</p></li>)
                    })
                }
            </ul>
            {
                details && (
                    <div className="details">
                        <div>
                            <button onClick={() => handleClick(null)}>X</button>
                        </div>

                        <ul >
                            {
                                Object.entries(details).map(([key, value]) => {
                                    return ((key !== "image") ? <li key={key}>{key} : {value}</li> : null);
                                })
                            }

                        </ul>
                    </div>

                )
            }
        </>

    )
}