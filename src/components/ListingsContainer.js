import React, {useEffect, useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ search }) {
  const [listings, setListings] = useState([]);


  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(resp => resp.json())
    //.then(data => setListings(data))
    .then(setListings);
  }, []);

  const filteredListings = listings.filter((listing) => {
      const lowercasedDescription = listing.description.toLowerCase();
      const lowercasedLocation = listing.location.toLowerCase();
      const lowercasedSearch = search.toLowerCase();

      return lowercasedDescription.includes() || 
        lowercasedLocation.includes(lowercasedSearch);
  });
  

  const renderListings = filteredListings.map((listing) => (
    <ListingCard key={listing.id} listing={listing} setListings={setListings} />
  ));

  return (
    <main>
      <ul className="cards">
        {renderListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
