import React from "react";
import ProductCard from "./ProductCard";
interface Players {
  list: Joeurs[];
}
interface Joeurs {
  imageUrl: string;
  name: string;
  team: string;
  nationality: string;
  jerseyNumber: string;
}
const ProductList: React.FC<Players> = ({ list }) => {
  // console.log(list)
  return <div>
    {
      React.Children.toArray(

        list.map(el=><ProductCard item={el} />)
        )
    }
  </div>;
};

export default ProductList;
