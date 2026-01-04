import laptopImg from "../assets/images/laptop.jpg";
import shoesImg from "../assets/images/shoes.jpg";
import smartphoneImg from "../assets/images/smartphone.jpg";
import headphoneImg from "../assets/images/headphone.jpg";

export const initialProducts = [
  { 
    id: 1, name: "Laptop", price: 800, category: "Electronics", stock: 10,
    description: "High performance laptop", 
    image: laptopImg
  },
  { 
    id: 2, name: "Running Shoes", price: 50, category: "Fashion", stock: 0,
    description: "Comfortable running shoes", 
    image: shoesImg
  },
  { 
    id: 3, name: "Smartphone", price: 600, category: "Electronics", stock: 5,
    description: "Latest model smartphone", 
    image: smartphoneImg
  },
  { 
    id: 4, name: "Headphones", price: 120, category: "Electronics", stock: 15,
    description: "Noise cancelling headphones", 
    image: headphoneImg
  },
];
