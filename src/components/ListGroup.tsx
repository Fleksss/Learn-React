function ListGoup() {

  const cities = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris"
  ]

  return (
    <>
      <h1>List</h1>
      {cities.length === 0 && <p>No cities found</p>}
      <ul className="list-group">
        {cities.map(city => <li className="list-group-item" key={city}>{city}</li>)}
      </ul>
    </>
  )
}

export default ListGoup