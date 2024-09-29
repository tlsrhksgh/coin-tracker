import { useParams } from "react-router-dom";

interface ICoinType {
  coinId: string;
}

function Coin() {
  const { coinId } = useParams<ICoinType>();

  return <h1>Coin: {coinId}</h1>;
}

export default Coin;
