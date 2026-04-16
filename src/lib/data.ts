export interface Product {
  id: string;
  name: string;
  price: number;
  category: "Camisas" | "Pantalones" | "Sudaderas";
  image: string;
  description: string;
  material: string;
}

export const products: Product[] = [
  {
    id: "camisa-negra",
    name: "Camisa Negra",
    price: 15,
    category: "Camisas",
    image: "/images/camisa-negra.png",
    description: "Una pieza fundamental para cualquier armario. Corte preciso, caída perfecta.",
    material: "Algodón 100%"
  },
  {
    id: "camisa-blanca",
    name: "Camisa Blanca",
    price: 22,
    category: "Camisas",
    image: "/images/camisa-blanca.png",
    description: "La camisa blanca esencial. Diseño estructurado sin excesos.",
    material: "Algodón 100%"
  },
  {
    id: "camisa-gris",
    name: "Camisa Gris",
    price: 18,
    category: "Camisas",
    image: "/images/camisa-gris.png",
    description: "Minimalismo en tonos neutros. Elegancia sin esfuerzo.",
    material: "Algodón 100%"
  },
  {
    id: "pantalon-negro",
    name: "Pantalón Negro",
    price: 35,
    category: "Pantalones",
    image: "/images/pantalon-negro.png",
    description: "Sastrería contemporánea. Líneas rectas y textura impecable.",
    material: "Algodón 100%"
  },
  {
    id: "pantalon-blanco",
    name: "Pantalón Blanco",
    price: 30,
    category: "Pantalones",
    image: "/images/pantalon-blanco.png",
    description: "Claridad y estructura. Un lienzo en blanco para tu estilo.",
    material: "Algodón 100%"
  },
  {
    id: "sudadera-negra",
    name: "Sudadera Negra",
    price: 40,
    category: "Sudaderas",
    image: "/images/sudadera-negra.png",
    description: "Confort elevado. Silueta holgada con proporciones calculadas.",
    material: "Algodón 100%"
  },
  {
    id: "sudadera-gris",
    name: "Sudadera Gris",
    price: 38,
    category: "Sudaderas",
    image: "/images/sudadera-gris.png",
    description: "La comodidad redefinida bajo una estética silenciosa.",
    material: "Algodón 100%"
  }
];
