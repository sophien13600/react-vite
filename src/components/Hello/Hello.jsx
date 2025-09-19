// composant fonctionnel
import classNames from "classnames";
import "./Hello.css";

function Hello({ nom, children }) {
  const numbers = [2, 3, 8, 5, 1];
  const objet = { nom: "Wick", prenom: "John" };
  const firstname = "MacGyver";
  const link = "http://www.francefootball.fr";
  const linkTarget = {
    href: "http://www.franceinfo.fr",
    target: "_blank",
  };
  const style = {
    color: "white",
    backgroundColor: "tomato",
  };
  const couleur = "white";
  const bgCouleur = "dodgerblue";
  const classes = classNames(
    "gras",
    { rouge: firstname.length % 2 == 0 },
    { bleu: firstname.length % 2 != 0 }
  );
  const personnes = [
    { id: 100, nom: "Wick", prenom: "John" },
    { id: 101, nom: "Abruzzi", prenom: "John" },
    { id: 102, nom: "Marley", prenom: "Bob" },
    { id: 103, nom: "Segal", prenom: "Steven" },
  ];
  return (
    <div>
      <h2>Props</h2>
      <p>
        Hello {nom} from {children}
      </p>
      <h2>Interpolation</h2>
      <h3>Tableau</h3>
      <ul>
        <li>{numbers[0]}</li>
        <li>{numbers["1"]}</li>
        <li>{numbers["2"]}</li>
      </ul>
      <h3>Objet</h3>
      <ul>
        <li>{objet.nom}</li>
        <li>{objet["prenom"]}</li>
      </ul>
      <h3>Expression</h3>
      <p>{objet.nom.length}</p>
      <p>{Math.sqrt(25)}</p>
      <p>{numbers[0] % 2 == 0 ? "pair" : "impair"}</p>
      <h3>Fonction</h3>
      <p>{afficherBonjour()}</p>
      <h2>Interpoler un attribut</h2>
      <p>
        Pour les infos sportives,
        <a href={link}>consulter</a>
      </p>
      <p>
        Pour les infos,
        <a {...linkTarget}>consulter</a>
      </p>
      <h3>Style</h3>
      <p style={style}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non fuga eum
        eveniet voluptatum vitae ducimus suscipit possimus, consequatur
        perspiciatis quaerat rem repellendus quas amet nisi! Sequi, tenetur!
        Ratione, eligendi dolores?
      </p>
      <p style={{ color: couleur, backgroundColor: bgCouleur }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non fuga eum
        eveniet voluptatum vitae ducimus suscipit possimus, consequatur
        perspiciatis quaerat rem repellendus quas amet nisi! Sequi, tenetur!
        Ratione, eligendi dolores?
      </p>
      <h3>Classe</h3>
      <p className="rouge">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
        sunt eaque quia, fugit pariatur praesentium corrupti laborum ut nemo
        fugiat accusamus odit! Ipsa, molestiae. Ipsa odit facilis dignissimos
        fugit ducimus.
      </p>
      <p className={firstname.length == 8 ? "bleu" : "rouge"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
        sunt eaque quia, fugit pariatur praesentium corrupti laborum ut nemo
        fugiat accusamus odit! Ipsa, molestiae. Ipsa odit facilis dignissimos
        fugit ducimus.
      </p>
      <p className={classes}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eum
        dolores eveniet, laborum aperiam necessitatibus voluptates libero alias
        placeat nam provident suscipit ut, consequatur eligendi incidunt
        voluptatem impedit dolorem at?
      </p>
      <h2>Boucles</h2>
      <ul>
        {numbers.map((elt, ind) => (
          <li key={ind}>{elt}</li>
        ))}
      </ul>
      <h2>Exercice</h2>
      <ul>
        {
        personnes.map((p) => (
          <li key={p.id}>
            {p.prenom} {p.nom}
          </li>
        ))}
      </ul>
      <ul>
                {
                    personnes.map(({ id, nom, prenom }) =>
                        <li
                            key={id}
                            className={id % 2 == 0 ? 'rouge' : 'bleu'}
                        >{prenom} {nom}
                        </li>
                    )
                }
            </ul>
            <h2>Evenements</h2>
            <button onClick={direBonjour}>
              afficher Bonjour
            </button>
    </div>
      )
    function afficherBonjour() {
        return `Bonjour ${firstname}`
    }
}
function direBonjour() {
    alert(`Bonjour`)
}


export default Hello;
// function Hello(props) {
//     return (
//         <div>
//             <h2>Hello {props.nom} from {props.children}</h2>
//         </div>
//     )
// }

// export default Hello
