import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../pages/Home/components/Coffes/CardElements";

export function CartTotal() {
  const { cartItems } = useContext(CartContext);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const count = Object.values(cartItems).reduce(
      (total, quantity) => total + quantity,
      0
    );
    setTotalItems(count);
  }, [cartItems]);

  console.log(totalItems);
  return <span>{totalItems}</span>;
}
