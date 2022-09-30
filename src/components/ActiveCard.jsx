import { useSelector } from "react-redux"

const ActiveCard = () => {

  const { cards } = useSelector((state) => state.cardList);

  return(
    <div>

      {cards.map((card, i) => (card.active && (<div key={i} className={`${card.vendor} card activeCard`}>
        <p className="cardNumber">{card.cardNumber}</p>
        <p className="cardHolder">{card.cardHolder}</p>
        <p className="valid">{card.month}/{card.year}</p>
        <div className={`vendor${card.vendor}`}></div>
      </div>)))}

    </div>
  )
}

export default ActiveCard;


  
