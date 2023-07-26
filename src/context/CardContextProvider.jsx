import { useState, createContext } from "react";

export const CardContext = createContext();

const CardContextProvider = ({ children }) => {
  const [cardName, setCardName] = useState("Ade");
  const [cardNumber, setCardNumber] = useState(0);
  const [cardExpDate, setCardExpDate] = useState(0);
  const [cardCVC, setCardCVC] = useState(0);

  const objectsToBePassed = {
    cardName,
    setCardName,
    cardNumber,
    setCardNumber,
    cardExpDate,
    setCardExpDate,
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
