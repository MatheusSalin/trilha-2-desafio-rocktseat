import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import Copo from "../../../../assets/Copo.png";
import { HomeContainer, PhosphorContainer } from "./styles";

export function Header() {
  return (
    <HomeContainer>
      <header>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <tr>
          <td>
            <PhosphorContainer iconColor="darkYellow">
              <ShoppingCart size={16} weight="fill" color="white" />
            </PhosphorContainer>
            <p>Compra simples e segura</p>
          </td>
          <td>
            <PhosphorContainer iconColor="gray">
              <Package size={16} weight="fill" color="white" />
            </PhosphorContainer>
            <p>Embalagem matém o café intacto</p>
          </td>
          <td>
            <PhosphorContainer iconColor="yeloow">
              <Timer size={16} weight="fill" color="white" />
            </PhosphorContainer>
            <p>Entrega rápida e rastreada</p>
          </td>
          <td>
            <PhosphorContainer iconColor="purple">
              <Coffee size={16} weight="fill" color="white" />
            </PhosphorContainer>
            <p>O café chega fresquinho até você</p>
          </td>
        </tr>
      </header>
      <img src={Copo} alt="" />
    </HomeContainer>
  );
}
