import { v4 as rid } from "uuid";

const LOAD = "bookStore/book/LOAD_BOOK";
const ADD = "bookStore/book/ADD_BOOK";
const REMOVE = "bookStore/book/REMOVE_Book";

const newBook = [
  {
    id: rid(),
    title: "Atomic Habits",
    author: "James Clear",
  },
  {
    id: rid(),
    title: "Best Self",
    author: "Mike Bayer",
  },
  {
    id: rid(),
    title: "12 Rules For Life",
    author: "Suzanne Collins",
  },
];

export const bookReducer = (state = newBook, action = {}) => {
  const remove = (sourceList, value) => {
    const index = sourceList.indexOf(value);
    if (index >= 0 && index < sourceList.length) {
      return [...sourceList.slice(0, index), ...sourceList.slice(index + 1)];
    }
    return sourceList;
  };
  const { value } = action;
  switch (action.type) {
    case LOAD:
      return [...state];
    case ADD:
      return [...state, value];
    case REMOVE:
      return remove(state, state.filter((item) => item.id === value)[0]);
    default:
      return state;
  }
};

export const loadBook = () => ({
  type: LOAD,
});
export const addBook = (title, author) => ({
  type: ADD,
  value: { id: rid(), title, author },
});

export const removeBook = (book) => ({
  type: REMOVE,
  value: book,
});
