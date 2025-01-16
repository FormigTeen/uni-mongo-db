db = connect("localhost:27017/myProject");

db.createCollection("users");

db.users.insertMany([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
]);
