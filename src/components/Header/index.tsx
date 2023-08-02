import { HeaderContainer } from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";
import Logo from "../../assets/Logo.svg";
import { CartTotal } from "../CartTotal";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../pages/Home/components/Coffes/CardElements";

export function Header() {
  const { cartItems } = useContext(CartContext);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const count = Object.values(cartItems).reduce(
      (total, quantity) => total + quantity,
      0
    );
    setTotalItems(count);
  }, [cartItems]);

  console.log("Header", totalItems);
  return (
    <HeaderContainer>
      <img src={Logo} alt=" " />
      <nav>
        <div>
          <MapPin size={18} weight="fill" />
          <p>Missal, PR</p>
        </div>
        <a href="/checkout">
          <span>
            <CartTotal />
          </span>
          <ShoppingCart size={21} weight="fill" />
        </a>
      </nav>
    </HeaderContainer>
  );
}
