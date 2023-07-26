import CustomInput from "./CUstomInput";
import { useContext } from "react";
import { CardContext } from "../context/CardContextProvider";

const Form = () => {
  const {
    cardName,
    setCardName,
    cardNumber,
    setCardNumber,
    cardExpDateMonth,
    setCardExpDateMonth,
    cardExpDateYear,
    setCardExpDateYear,
    cardCVC,
    setCardCVC,
  } = useContext(CardContext);
  return (
    <form className="form">
      <div className="details">
        <CustomInput
          isLabel={true}
          labelText={"cardholder name"}
          type="text"
          placeholder={cardName}
          onInput={(e) => setCardName(e.target.value)}
        />
        <CustomInput
          isLabel={true}
          labelText={"card number"}
          type="number"
          placeholder={cardNumber}
          onInput={(e) => setCardNumber(e.target.value)}
        />
      </div>
      <div className="dateAndCVC">
        <div className="date">
          <CustomInput
            isLabel={true}
            labelText={"exp date"}
            type="number"
            placeholder={cardExpDateMonth}
            onInput={(e) => setCardExpDateMonth(e.target.value)}
          />{" "}
          <CustomInput
            isLabel={true}
            labelText={"exp date"}
            type="number"
            placeholder={cardExpDateYear}
            onInput={(e) => setCardExpDateYear(e.target.value)}
          />
        </div>
        <CustomInput
          isLabel={true}
          labelText={"cvc"}
          type="number"
          placeholder={cardCVC}
          b
          onInput={(e) => setCardCVC(e.target.value)}
        />
      </div>

      <button>Confirm</button>
    </form>
  );
};

export default Form;
