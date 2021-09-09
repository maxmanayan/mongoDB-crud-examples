// on local computer:
// database: mthree-labs
// collection: movies

// Data Manipulation and Aggregation

// 1. Write a query to find anyone movie name using findOne method.
db.movies.findOne({}, { name: "The Arrived" });
// ---> returns first matching document

// 2. Write a query that returns the three highest-rated movies.
db.movies.find().sort({ rating: -1 }).limit(3);

// 3. Add a key called achievements in any two documents. One document should have ‘Super hit’
// and other should have ‘Super Duper Hit’ as value to key achievements. This task should be
// performed in two ways.
//  - Using update () method.
db.movies.update(
  { _id: ObjectId("6138d226a378f19f49993771") },
  { $set: { achievements: "Super hit" } }
);
//  - Using save () method -- SAVE() IS DEPRECATED IN MONGOSH
// db.movies.save({
//   _id: "1260b70caw15672332177",
//   achievements: "Super Duper Hit",
// });
db.movies.updateOne(
  { _id: "1260b70caw15672332177" },
  { $set: { achievements: "Super Duper Hit" } }
);

// 4. Write a query that returns all the movies that have both the ‘Super hit’ and the ‘Super Duper hit’’ achievements.
db.movies.find({ achievements: { $in: ["Super hit", "Super Duper Hit"] } });

// 5. Write a query that returns only those movies that have achievement.
db.movies.find({ achievements: { $exists: true } });

// 6. List the movies grouped by year.
// link to ROOT variable - [ https://docs.mongodb.com/manual/reference/aggregation-variables/ ]
db.movies.aggregate([
  { $match: {} },
  { $group: { _id: "$year", movie: { $push: "$$ROOT" } } },
]);
// just the titles and sorted
db.movies.aggregate([
  { $match: {} },
  { $group: { _id: "$year", titles: { $push: "$$ROOT.title" } } },
  { $sort: { _id: -1 } },
]);

// 7. Count number of movies produced in this year.
db.movies.aggregate([
  { $match: { year: 2021 } },
  { $group: { _id: "$year", count: { $count: {} } } },
]);

// 8. Group list of movies collection by genres.
// movies must include all genres
db.movies.aggregate([
  { $match: {} },
  { $group: { _id: "$genre", title: { $push: "$$ROOT.title" } } },
]);
// movies grouped if included in one genre (splits genre array apart)
db.movies.aggregate([
  { $match: {} },
  { $unwind: "$genre" },
  { $group: { _id: "$genre", title: { $push: "$$ROOT.title" } } },
]);
