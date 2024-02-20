import { InventoryType } from "../types/inventory";
import FedoraHat from "./fedora-hat.webp";
import TeeShirt from "./tee-shirt.webp";

export const inventoryData: InventoryType[] = [
  {
    name: "Hello World Hat",
    price: 23.99,
    img: "https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/hello-world-hat.jpg",
  },
  {
    name: "Learn From Home Joggers",
    price: 45.99,
    img: "https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/sweatpants.jpg",
  },
  {
    name: "Nikky Tee Shirt",
    price: 25.99,
    img: TeeShirt,
  },
  {
    name: "Java Tee",
    price: 17.99,
    img: "https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/java-tee.jpg",
  },
  {
    name: "Fedora Hat",
    price: 39.99,
    img: FedoraHat,
  },
  {
    name: "Python Tee",
    price: 17.99,
    img: "https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/python-tee.jpg",
  },
  {
    name: "SQL Tee",
    price: 17.99,
    img: "https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/sql-tee.jpg",
  },
  {
    name: "Hello World Hoodie",
    price: 49.99,
    img: "https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/hoodie.jpg",
  },
];

export const currenciesData = ["USD", "EUR", "CAD"];
