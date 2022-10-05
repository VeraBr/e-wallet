import { useDispatch, useSelector } from "react-redux"
import { changeActive, deleteCard } from "./cardListSlice";


const InactiveCards = () => {

  const dispatch = useDispatch();

  const { cards } = useSelector((state) => state.cardList);

  const handleDeleteCard = (id) => {
    dispatch(deleteCard(id));
  };

  return(
      <div className="inactiveCardsContainer">

        <small>INACTIVE CARDS</small>
        {cards.map((card, i) => (!card.active && (<div className={`card inactiveCard${i} ${card.vendor} icard`} key={i} >
          <p className="cardNumber">{card.cardNumber}</p>
          <p className="cardHolder">{card.cardHolder}</p>
          <p className="valid">{card.month}/{card.year}</p>
          <div className={`vendor${card.vendor} img`}></div>
          <div className="btnDiv">
            <button className="btn" onClick={() => {dispatch(changeActive(card.id))}}>ACTIVATE</button>
            <button className="btn" onClick={() => {handleDeleteCard(card.id)}}>DELETE</button>
          </div>
        </div>)))}

      </div>
  )
}

export default InactiveCards;