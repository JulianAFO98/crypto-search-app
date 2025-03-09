


export default function Coins({ coins }) {
    return (
        <ul className="result-container">
            {coins && (
                coins.map((coin, index) => {
                    return (<li key={index} className="coin-container">
                        <h2>{coin.name}</h2>
                        <img src={coin.image} alt={coin.name} />
                        <h3>{coin.symbol}</h3>
                        <p>${coin.price}</p>
                    </li>)
                })
            )
            }
        </ul>
    )
}