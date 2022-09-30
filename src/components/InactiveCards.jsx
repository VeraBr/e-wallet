import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { changeActive, deleteCard } from "./cardListSlice";


const InactiveCards = () => {

  const dispatch = useDispatch();

  const { cards } = useSelector((state) => state.cardList);

  const handleDeleteCard = (id) => {
    dispatch(deleteCard(id));
  };

  console.log(cards)

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/addcard")
  }

  return(
    <>
      <div className="inactiveCardsContainer">

        <small>INACTIVE CARDS</small>
        {cards.map((card, i) => (card.active === false ? (<div className={`card inactiveCard${i} ${card.vendor} icard`} key={i} >
          <p className="cardNumber">{card.cardNumber}</p>
          <p className="cardHolder">{card.cardHolder}</p>
          <p className="valid">{card.month}/{card.year}</p>
          <div className={`vendor${card.vendor} img`}></div>
          <div className="btnDiv">
            <button className="btn" onClick={() => {dispatch(changeActive(card.id))}}>ACTIVATE</button>
            <button className="btn" onClick={() => {handleDeleteCard(card.id)}}>DELETE</button>
          </div>
        </div>):null))}

        {/* <div className="addCardBtnDiv">
          <button onClick={handleClick} className="newCardBtn btnNewCard">ADD A NEW CARD</button>
        </div> */}
      </div>

      {/* <div className="addCardBtnDiv">
          <button onClick={handleClick} className="newCardBtn">ADD A NEW CARD</button>
      </div> */}

      

    </>

  )
}

export default InactiveCards;