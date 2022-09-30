import { useNavigate } from "react-router-dom"

const NewCardButton = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/addcard")
  }

  return (
    <div className="addCardBtnDiv">
    <button onClick={handleClick} className="newCardBtn">ADD A NEW CARD</button>
    </div>
  )
}

export default NewCardButton;