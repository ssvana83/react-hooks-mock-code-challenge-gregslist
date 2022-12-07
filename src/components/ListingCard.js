import React, {useState} from "react";

function ListingCard({ listing, setListings }) {
  const { description, id, image, location } = listing;
  const [favorited, setFavorited] = useState(false);

  function handleFavorite() {
    console.log("clicked");
    setFavorited(true);
  }

  function handleUnfavorite() {
    console.log("clicked");
    setFavorited(false);
  }

  function handleDelete () {
    console.log("delete");
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    });

    setListings((currentListings) => 
      currentListings.filter((listing) => listing.id !== id )
    );
  }

  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorited ? (
          <button className="emoji-button favorite active" onClick={handleUnfavorite}>
            ★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavorite}>
            ☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>
            🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
