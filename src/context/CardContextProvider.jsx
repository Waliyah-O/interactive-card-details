import { useState, createContext } from "react";

export const CardContext = createContext();

const CardContextProvider = ({ children }) => {
  const [cardName, setCardName] = useState("Jane Appleseed");
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [cardExpDateMonth, setCardExpDateMonth] = useState('MM');
  const [cardExpDateYear, setCardExpDateYear] = useState("YY");
  const [cardCVC, setCardCVC] = useState("123");

  const objectsToBePassed = {
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
  };

  return (
    <CardContext.Provider value={objectsToBePassed}>
      {children}
    </CardContext.Provider>
  );
};

export default CardContextProvider;
