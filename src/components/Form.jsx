import CustomInput from "./CUstomInput";
import { useContext } from "react";
import { CardContext } from "../context/CardContextProvider";

const Form = () => {
  const { setCardName, setCardNumber, setCardExpDate, setCardCVC } =
    useContext(CardContext);
  return (
    <form className="form">
      <div className="details">
        <CustomInput
          isLabel={true}
          labelText={"cardholder name"}
          type="text"
          placeholder="e.g Jane Appleseed"
          onInput={(e) => setCardName(e.target.value)}
        />
        <CustomInput
          isLabel={true}
          labelText={"card number"}
          type="number"
          placeholder="00000"
          onInput={(e) => setCardNumber(e.target.value)}
          
        />
      </div>
      <div className="dateAndCVC">
        <div className="date">
          <CustomInput
            isLabel={true}
            labelText={"exp date"}
            type="number"
            placeholder="00"
            onInput={(e) => setCardExpDate(e.target.value)}
          />{" "}
          <strong>/</strong>
          <CustomInput
            isLabel={true}
            type="number"
            placeholder="00"
            onInput={(e) => setCardCVC(e.target.value)}
          />
        </div>
        <CustomInput
          isLabel={true}
          labelText={"cvc"}
          type="number"
          placeholder="000"
        />
      </div>

      <button>Confirm</button>
    </form>
  );
};

export default Form;
