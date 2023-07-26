import { useContext } from "react";
import { CardContext } from "../context/CardContextProvider";

//assets
import frontCard from "../assets/images/bg-card-front.png";
import backCard from "../assets/images/bg-card-back.png";

const CardDetails = () => {
  const { cardName, cardNumber, cardExpDateMonth, cardExpDateYear, cardCVC } =
    useContext(CardContext);

  return (
    <div className="cardDetails">
      <div className="topARea">
        <img src={frontCard} alt="" />
        <div className="frontCardDits">
          <h1>{cardNumber}</h1>
          <div className="up">
            <h3>{cardName}</h3>
            <div className="dates">
              <h3>{cardExpDateMonth}</h3>
              <em>/</em>
              <h3>{cardExpDateYear}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="backCardDits">
        <img className="img2" src={backCard} alt="" />
        <h3>{cardCVC}</h3>
      </div>
    </div>
  );
};

export default CardDetails;
