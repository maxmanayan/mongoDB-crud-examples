// from local computer:
// database: mthree-labs
// collection: bands

// Update documents in 'bands' collection:

// 1. City of Guns n' Roses to Los Angeles.
db.bands.updateOne(
  { name: "Guns n' Roses" },
  { $set: { "formed.city": "Los Angeles" } }
);

// 2. Formed year of Metallica to 1981.
db.bands.updateOne({ name: "Metallica" }, { $set: { "formed.year": 1981 } });

// 3. Update Black Sabbath’s formed year to 1969, country to United Kingdom and city to Birmingham.
db.bands.updateOne(
  { name: "Black Sabbath" },
  {
    $set: {
      formed: { year: 1969, country: "United Kingdom", city: "Birmingham" },
    },
  }
);

// 4. Update Led Zeppelin’s formed year to 1988, country to United Kingdom and city to Bristol.
db.bands.updateOne(
  { name: "Led Zeppelin" },
  {
    $set: {
      formed: { year: 1988, country: "United Kingdom", city: "Bristol" },
    },
  }
);

// 5. Update Rolling Stones formed year to 1962, country to United Kingdom and city to London.
db.bands.updateOne(
  { name: "The Rolling Stones" },
  {
    $set: { formed: { year: 1962, country: "United Kingdom", city: "London" } },
  }
);

// 6. Update Led Zeppelin’s year and city to 1968 and London.
db.bands.updateOne(
  { name: "Led Zeppelin" },
  { $set: { "formed.year": 1968, "formed.city": "London" } }
);

// 7. Add Pink Floyd’s formed in the year 1965.
db.bands.insertOne({ name: "Pink Floyd", formed: { year: 1965 } });
