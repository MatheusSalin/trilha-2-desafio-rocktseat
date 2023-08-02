import { useContext, useState } from "react";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
} from "phosphor-react";
import {
  Address,
  BoxAddress,
  BoxPayment,
  CheckoutStyled,
  Order,
  Request,
} from "./styled";
import { CheckoutProps } from "../Home/components/Coffes/CardElements";
import { CardContext } from "../../components/Datas";

export function Checkout(props: CheckoutProps) {
  const [selectedPayment, setSelectedPayment] = useState("");
  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPayment(event.target.id);
  };

  const cartItems = useContext(CardContext);

  return (
    <CheckoutStyled>
      <Address>
        <h2>Complete seu pedido</h2>
        <BoxAddress>
          <div>
            <MapPinLine fontSize={22} color="#C47F17" />
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>
          <form>
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <input type="text" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </form>
        </BoxAddress>
        <BoxPayment>
          <div>
            <CurrencyDollar fontSize={22} color="#8047F8" />
            <div>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
          <form>
            <input
              type="radio"
              name="payment"
              id="credit_card"
              checked={selectedPayment === "credit_card"}
              onChange={handlePaymentChange}
            />
            <label htmlFor="credit_card">
              <CreditCard fontSize={16} color="#8047F8" />
              <span>Cartão de crédito</span>
            </label>
            <input
              type="radio"
              name="payment"
              id="bank"
              checked={selectedPayment === "bank"}
              onChange={handlePaymentChange}
            />
            <label htmlFor="bank">
              <Bank fontSize={16} color="#8047F8" />
              <span>Cartão de Débito</span>
            </label>
            <input
              type="radio"
              name="payment"
              id="money"
              checked={selectedPayment === "money"}
              onChange={handlePaymentChange}
            />
            <label htmlFor="money">
              <Money fontSize={16} color="#8047F8" />
              <span>Dinheiro</span>
            </label>
          </form>
        </BoxPayment>
      </Address>
      <Order>
        <h2>Cafés selecionados</h2>
        <Request>
          {Object.keys(cartItems).map((cardId) => {
            const quantity = cartItems[Number(cardId)];
            const cardData = props.cards.find(
              (card) => card.id === Number(cardId)
            );
            if (cardData) {
              return (
                <div key={cardId}>
                  <img src={cardData.img} alt={cardData.title} />
                  <p>{cardData.description}</p>
                  <div>
                    <button>
                      <Minus />
                    </button>
                    <input type="number" step={1} />
                    <button>
                      <Plus />
                    </button>
                  </div>
                  <div>lixo</div>
                </div>
              );
            }
            return null;
          })}
          <div>
            <div className="total Itens">
              <p>Total de itens</p>
              <>{"R$ 17,80"}</>
            </div>
            <div className="entrega">
              <p>Entrega</p>
              <>{"R$ 3,50"}</>
            </div>
            <div>
              <input type="button" id="purchase" value="CONFIRMAR PEDIDO" />
              <label htmlFor="purchase">
                <p>CONFIRMAR PEDIDO</p>
              </label>
            </div>
          </div>
        </Request>
      </Order>
    </CheckoutStyled>
  );
}
