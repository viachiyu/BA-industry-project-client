import "./DestinationCard.scss";
import prague from "../../assets/images/Prague.svg";
import barcelona from "../../assets/images/Barcelona.svg";
import amsterdam from "../../assets/images/Amsterdam.svg";

const images = [prague, barcelona, amsterdam];

function DestinationCard({ destination }) {
  return (
    <article className="card">
      {destination.map((dest, index) => (
        <div key={index} className="card__wrapper">
          <img className="card__img" src={images[index]} alt="image" />
          <div className="card__text">
            <h2 className="card__title">{dest.name}</h2>
            <h3 className="card__price">{dest.price}</h3>
            <p className="card__description">{dest.description}</p>
          </div>
        </div>
      ))}
    </article>
  );
}

export default DestinationCard;
