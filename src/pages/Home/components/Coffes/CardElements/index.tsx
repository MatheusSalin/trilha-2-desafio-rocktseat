import { Minus, Plus, ShoppingCart } from "phosphor-react";
import {
  Add,
  CardElementsFormat,
  CoffeesStyleds,
  Description,
  Tag,
  TagItem,
  TagLine,
} from "./styles";
import { CardContext, CardData } from "../../../../../components/Datas";
import { createContext, useContext, useEffect, useState } from "react";
import { CartTotal } from "../../../../../components/CartTotal";

export interface CheckoutProps {
  cards: CardData[];
  cartItems: { [key: number]: number };
}

export const CartContext = createContext<CheckoutProps>({
  cards: [],
  cartItems: {},
});

export function CardElements() {
  const { cards } = useContext(CardContext);
  const [inputValues, setInputValues] = useState<{ [key: number]: number }>({});
  const [cartItems, setCartItems] = useState<{ [key: number]: number }>({});
  const [cartContextValue, setCartContextValue] = useState({
    cards,
    cartItems,
  });

  const handlePlus = (cardId: number) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [cardId]: (prevInputValues[cardId] || 0) + 1,
    }));
  };

  const handleMinus = (cardId: number) => {
    setInputValues((prevInputValues) => {
      const currentValue = prevInputValues[cardId] || 0;
      if (currentValue > 0) {
        return {
          ...prevInputValues,
          [cardId]: currentValue - 1,
        };
      }
      return prevInputValues;
    });
  };

  const addToCart = (cardId: number) => {
    const quantity = inputValues[cardId] || 0;
    if (quantity > 0) {
      setCartItems((prevCartItems) => ({
        ...prevCartItems,
        [cardId]: (prevCartItems[cardId] || 0) + quantity,
      }));
      setInputValues((prevInputValues) => ({
        ...prevInputValues,
        [cardId]: 0,
      }));
    }
  };

  useEffect(() => {
    setCartContextValue({ cards, cartItems });
  }, [cards, cartItems]);

  console.log(cartItems);
  return (
    <CartContext.Provider value={cartContextValue}>
      <CoffeesStyleds>
        {cards.map((card) => (
          <CardElementsFormat key={card.id}>
            <Tag>
              <img src={card.img} alt="" />
              <TagLine>
                {card.tag.map((tagItem) => (
                  <TagItem key={tagItem}>{tagItem}</TagItem>
                ))}
              </TagLine>
            </Tag>
            <Description>
              <h4>{card.title}</h4>
              <p>{card.description}</p>
            </Description>
            <Add>
              <p>R$</p>
              <span>{card.price.toFixed(2)}</span>
              <div>
                <button onClick={() => handleMinus(card.id)}>
                  <Minus />
                </button>
                <input
                  type="number"
                  placeholder="0"
                  step={1}
                  value={inputValues[card.id] || 0}
                  onChange={(e) => {
                    const newValue = parseInt(e.target.value, 10) || 0;
                    setInputValues((prevInputValues) => ({
                      ...prevInputValues,
                      [card.id]: newValue,
                    }));
                  }}
                />
                <button onClick={() => handlePlus(card.id)}>
                  <Plus />
                </button>
              </div>
              <button onClick={() => addToCart(card.id)}>
                <ShoppingCart size={16} weight="fill" color="white" />
              </button>
            </Add>
          </CardElementsFormat>
        ))}
      </CoffeesStyleds>
      <CartTotal />
    </CartContext.Provider>
  );
}
