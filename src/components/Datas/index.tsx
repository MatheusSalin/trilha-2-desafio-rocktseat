import Expresso from "../../assets/Expresso.png";
import Americano from "../../assets/Americano.png";
import Expresso_Cremoso from "../../assets/Expresso_Cremoso.png";
import Gelado from "../../assets/Gelado.png";
import Leite from "../../assets/Leite.png";
import Latte from "../../assets/Latte.png";
import Capuccino from "../../assets/Capuccino.png";
import Macchiato from "../../assets/Macchiato.png";
import Mocaccino from "../../assets/Mochaccino.png";
import ChocolateIMG from "../../assets/Chocolate.png";
import Cubano from "../../assets/Cubano.png";
import Havaiano from "../../assets/Havaiano.png";
import Arabe from "../../assets/Arabe.png";
import Irlandes from "../../assets/Irlandes.png";

import React, { PropsWithChildren, createContext, useState } from "react";

export interface CardData {
  id: number;
  img: string;
  tag: string[];
  title: string;
  description: string;
  price: number;
  quantity: number;
}

export interface CardContextProps {
  cards: CardData[];
}

export const CardContext = createContext<CardContextProps>({
  cards: [],
});

export const CardProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [cards, setCards] = useState<CardData[]>([
    {
      id: 1,
      img: Expresso,
      tag: ["TRADICIONAL"],
      title: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
      quantity: 0,
    },
    {
      id: 2,
      img: Americano,
      tag: ["TRADICIONAL"],
      title: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
      price: 9.9,
      quantity: 0,
    },
    {
      id: 3,
      img: Expresso_Cremoso,
      tag: ["TRADICIONAL"],
      title: "Expresso Cremoso",
      description: "Café expresso tradicional com espuma cremosa",
      price: 9.9,
      quantity: 0,
    },
    {
      id: 4,
      img: Gelado,
      tag: ["TRADICIONAL", "GELADO"],
      title: "Expresso Gelado",
      description: "Bebida preparada com café expresso e cubos de gelo",
      price: 9.9,
      quantity: 0,
    },
    {
      id: 5,
      img: Leite,
      tag: ["TRADICIONAL", "COM LEITE"],
      title: "Café com Leite",
      description: "Meio a meio de expresso tradicional com leite vaporizado",
      price: 9.9,
      quantity: 0,
    },
    {
      id: 6,
      img: Latte,
      tag: ["TRADICIONAL", "COM LEITE"],
      title: "Latte",
      description:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      price: 9.9,
      quantity: 0,
    },
    {
      id: 7,
      img: Capuccino,
      tag: ["TRADICIONAL", "COM LEITE"],
      title: "Capuccino",
      description:
        "Bebida com canela feita de doses iguais de café, leite e espuma",
      price: 9.9,
      quantity: 0,
    },
    {
      id: 8,
      img: Macchiato,
      tag: ["TRADICIONAL", "COM LEITE"],
      title: "Macchiato",
      description: "Café expresso misturado com um pouco de leite e espuma",
      price: 9.9,
      quantity: 0,
    },
    {
      id: 9,
      img: Mocaccino,
      tag: ["TRADICIONAL", "COM LEITE"],
      title: "Mocaccino",
      description: "Café expresso com caldo de chocolate, pouco leite e espuma",
      price: 9.9,
      quantity: 0,
    },
    {
      id: 10,
      img: ChocolateIMG,
      tag: ["ESPECIAL", "COM LEITE"],
      title: "Mocaccino",
      description:
        "Bebida feita com chocolate dissolvido no leite quente e café",
      price: 9.9,
      quantity: 0,
    },
    {
      id: 11,
      img: Cubano,
      tag: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
      title: "Cubano",
      description:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
      price: 9.9,
      quantity: 0,
    },
    {
      id: 12,
      img: Havaiano,
      tag: ["ESPECIAL"],
      title: "Havaiano",
      description: "Bebida adocicada preparada com café e leite de coco",
      price: 9.9,
      quantity: 0,
    },
    {
      id: 13,
      img: Arabe,
      tag: ["ESPECIAL"],
      title: "Árabe",
      description: "Bebida preparada com grãos de café árabe e especiarias",
      price: 9.9,
      quantity: 0,
    },
    {
      id: 14,
      img: Irlandes,
      tag: ["ESPECIAL", "ALCOÓLICO"],
      title: "Árabe",
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      price: 9.9,
      quantity: 0,
    },
  ]);

  return (
    <CardContext.Provider value={{ cards }}>{children}</CardContext.Provider>
  );
};
