import { v4 as uuidv4 } from "uuid";

const users = [
  {
    id: uuidv4(),
    name: "User",
    email: "user@nextmail.com",
    password: "123456",
  },
];

const recettes = [
  {
    id: uuidv4(),
    name: "risotto",
    process: "fais cuire le ris et ajoute le otto dedans, top bravo à toi",
  },
  {
    id: uuidv4(),
    name: "risottard",
    process:
      "fais cuire le ris et ajoute le otto dedans, top bravo à toi, mais fais ça de façon artistique",
  },
  {
    id: uuidv4(),
    name: "sangoku no gohan",
    process: "raissu no gohan cuku sochite goku no bulma hai desu ne",
  },
];

export { users, recettes };
