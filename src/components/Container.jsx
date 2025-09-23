import First from "./First";
import Second from "./Second";

export default function Container() {
    return (
        <div className="container">
            <h2>Conteneur</h2>
            <div className="row">
                <First />
                <Second />
            </div>
        </div>
    )
}