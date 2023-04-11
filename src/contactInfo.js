const contactBook = [
  {
    first: "Dheeraj",
    last: "Parashar",
    id: 1,
  },
  {
    first: "Yash",
    last: "Jain",
    id: 2,
  },
  {
    first: "Parikshit",
    last: "",
    id: 3,
  },
];

export function getContactFromId(contactId) {  
  return contactBook.find(({ id }) => contactId == id);
}

export function getAllContacts() {
  return contactBook;
}
