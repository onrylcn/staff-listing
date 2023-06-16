import { Component } from "react";
import "./card-list.style.css";

class CardList extends Component {
  render() {
    const { staffes } = this.props;

    return (
      <div className="card-list">
        {staffes.map((staff) => {
            const { name, email, id} = staff;
            return (
          <div className="card-container" key={id}>
            <img
              alt={`staff ${name}`}
              src={`https://robohash.org/${id}?set=set2&size=180x180`}
            />
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
        )})}
      </div>
    );
  }
}

export default CardList;
