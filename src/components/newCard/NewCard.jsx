import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewCard } from "../cardListSlice";

const cardInfo = {
  cardNumber: "",
  month: "",
  year: "",
  vendor: ""
}

const NewCard = () => {

  const navigate = useNavigate();
  const { cards, latestId } = useSelector((state) => state.cardList);
  let cardHolder = cards[0].cardHolder;
  const dispatch = useDispatch();

  const [input, setInput] = useState(cardInfo);

  const handleCardUpdate = (e) => {
    const nextCard = {
      ...input, [e.target.id]: e.target.value
    };
    setInput(nextCard)
  }


  const handleNewcard = (e) => {
    e.preventDefault();
    let cardNumber = document.querySelector("#cardNumber").value;
    let month = document.querySelector("#month").value;
    let year = document.querySelector("#year").value;
    let ccv = document.querySelector("#ccv").value;
    let vendor = document.querySelector("#vendor").value;


    if (cards.length <= 3 && cardNumber.length === 16 && month.length === 2 && year.length === 2 && ccv.length === 3) {
        dispatch(addNewCard({
        cardNumber: [...cardNumber].map((d, i) => (i) % 4 == 0 ? ' ' + d : d).join('').trim(),
        cardHolder: cardHolder.toUpperCase(),
        month: month,
        year: year,
        ccv: ccv,
        vendor: vendor,
        active: false,
        id: latestId + 1
      })) 
      navigate("/");
    } else {
      alert("You have too many cards!")
      navigate("/")
    }
  };

  return(
    <div className="addCardPage">

      <div className={`${input.vendor} card`}>
          <p className="cardHolder">{cardHolder.toUpperCase()}</p>
          <p className="cardNumber">{input.cardNumber}</p>
          <p className="valid">{input.month}/{input.year}</p>
          <div className={`vendor${input.vendor}`}></div>
      </div>

      <form onSubmit={handleNewcard} className="form">
        <label htmlFor="cardNumber">CARD NUMBER</label>
        <input type="text" id="cardNumber" minLength="16" maxLength="16" onChange={handleCardUpdate} required/>

        <label htmlFor="cardHolder">CARDHOLDER NAME</label>
        <input type="text" id="cardHolder" placeholder={cardHolder.toUpperCase()} disabled/>

        <label htmlFor="month">MONTH</label>
        <input type="text" id="month" minLength="2" maxLength="2" onChange={handleCardUpdate} required/>

        <label htmlFor="year">YEAR</label>
        <input type="text" id="year" minLength="2" maxLength="2" onChange={handleCardUpdate} required />

        <label htmlFor="ccv">CCV</label>
        <input type="text" id="ccv" minLength="3" maxLength="3" required/>

        <select name="vendor" id="vendor" onChange={handleCardUpdate} required>
          <option value="" selected disabled>Choose vendor</option>
          <option value="klarna">Klarna</option>
          <option value="mastercard">Mastercard</option>
          <option value="visa">Visa</option>
        </select>

        
        <button type="submit" className="newCardBtn">ADD CARD</button>

      </form>
    </div>
  )
}


export default NewCard