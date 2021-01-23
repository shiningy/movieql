const people = [
  {
    id: "0",
    name: "Nicolas",
    age: 18,
    gender: "female",
  },
  {
    id: "1",
    name: "Eric",
    age: 18,
    gender: "male",
  },
  {
    id: "2",
    name: "Jessy",
    age: 24,
    gender: "female",
  },
  {
    id: "3",
    name: "Austin",
    age: 20,
    gender: "male",
  },
  {
    id: "4",
    name: "Sean",
    age: 30,
    gender: "male",
  },
];

const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
}

export {people, getById};