import { Coffes, H2 } from "./components/Coffes";
import { CardProvider } from "../../components/Datas";
import { Header } from "./components/Header";

export function Home() {
  return (
    <div>
      <Header />
      <H2 />
      <CardProvider>
        <Coffes />
      </CardProvider>
    </div>
  );
}
