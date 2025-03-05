import baklavaImage from "../../assets/images/image-baklava-thumbnail.jpg";
import brownieImage from "../../assets/images/image-brownie-thumbnail.jpg";
import cakeImage from "../../assets/images/image-cake-thumbnail.jpg";
import cremeBruleeImage from "../../assets/images/image-creme-brulee-thumbnail.jpg";
import macaronImage from "../../assets/images/image-macaron-thumbnail.jpg";
import meringueImage from "../../assets/images/image-meringue-thumbnail.jpg";
import pannaCottaImage from "../../assets/images/image-panna-cotta-thumbnail.jpg";
import tiramisuImage from "../../assets/images/image-tiramisu-thumbnail.jpg";
import waffleImage from "../../assets/images/image-waffle-thumbnail.jpg";

import { v4 as uuidv4 } from "uuid";

export interface Product {
  name: string;
  description: string;
  price: number;
  image: string;
  id: string;
}

export const products: Product[] = [
  {
    name: "baklava",
    description: "",
    price: 4,
    image: baklavaImage,
    id: uuidv4(),
  },
  {
    name: "brownie",
    description: "",
    price: 5.5,
    image: brownieImage,
    id: uuidv4(),
  },
  {
    name: "cake",
    description: "",
    price: 4.5,
    image: cakeImage,
    id: uuidv4(),
  },
  {
    name: "creme-brulee",
    description: "",
    price: 7,
    image: cremeBruleeImage,
    id: uuidv4(),
  },
  {
    name: "macaron",
    description: "",
    price: 8,
    image: macaronImage,
    id: uuidv4(),
  },
  {
    name: "meringue",
    description: "",
    price: 5,
    image: meringueImage,
    id: uuidv4(),
  },
  {
    name: "panna-cotta",
    description: "",
    price: 6.5,
    image: pannaCottaImage,
    id: uuidv4(),
  },
  {
    name: "tiramisu",
    description: "",
    price: 5.5,
    image: tiramisuImage,
    id: uuidv4(),
  },
  {
    name: "waffle",
    description: "",
    price: 6.5,
    image: waffleImage,
    id: uuidv4(),
  },
];
