/// just playing around....

const myArrayOfInfo = [
  {
    name: "jonathon",
    age: 21,
  },
  {
    name: "bob",
    age: 25,
  },
  {
    name: "jim",
    age: 26,
  },
];

// this line creates a call back function
app.get("/", function (req, res) {
  //this line sends the string as a responce to the web page with the path /
  res.send("Hello World!");
});

//creating path to display info on page
app.get("/node", (req, res) => {
  res.send("tutorial on node");
});

// creating path to display my new array
app.get("/jonathon", (req, res) => {
  res.json(myArrayOfInfo);
});

// getting a specific name from my array using req.query
// not sure why the else isn't working
app.get("/myArrayOfInfo", (req, res) => {
  // console.log(req);
  const { name } = req.query;

  if (name) {
    const filteredjonathons = myArrayOfInfo.filter((person) =>
      person.name.includes(name)
    );
    res.json({ filteredjonathons });
  } else {
    res.json({ myArrayOfInfo });
  }
});
