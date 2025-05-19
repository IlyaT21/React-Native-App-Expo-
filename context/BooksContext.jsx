import { createContext, useState } from "react";

const DATABSE_ID = "682b8853000db49e3701";
const COLLECTION_ID = "682b8870003ae5db5e2a";

export const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);

  async function fetchBooks() {
    try {
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchBookById(id) {
    try {
    } catch (error) {
      console.log(error);
    }
  }

  async function createBook(data) {
    try {
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteBook(id) {
    try {
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <BooksContext.Provider
      value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}
    >
      {children}
    </BooksContext.Provider>
  );
}
