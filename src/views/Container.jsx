import First from "../components/First";
import Second from "../components/Second";

export default function Container() {
  return (
    <div className="container">
      <h2>Conteneur</h2>
      <div className="row">
        <First />
        <Second />
      </div>
    </div>
  );
}
