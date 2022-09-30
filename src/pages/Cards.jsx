import { Link } from "react-router-dom"
import ActiveCard from "../components/ActiveCard"
import InactiveCards from "../components/InactiveCards"
import NewCardButton from "../components/NewCardButton"


const Cards = () => {

  return(
    <div className="cards">
      <small>ACTIVE CARD</small>
      <ActiveCard />
      <NewCardButton />
      <InactiveCards />
      

    </div>
  )
}

export default Cards