import { Link } from "react-router-dom";
import Button from "../Elements/Button/Index";

const CardProduct = ({ children }) => {
  return (
    <div className="w-full max-w-sm bg-gray-700 border border-gray-200 rounded-lg shadow flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = ({ id, image }) => {
  return (
    <Link to={`/products/${id}`}>
      <img
        src={image}
        alt="product"
        className="p-8 rounded-t-lg h-60 w-full object-cover"
      />
    </Link>
  );
};

const BodyTest = ({ children, title }) => {
  return (
    <div className="p-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white line-clamp-1">
          {title}
        </h5>
        <p className="text-m text-white line-clamp-4">{children}</p>
      </a>
    </div>
  );
};

const FooterTest = (props) => {
  const { price, handleAddToCart, id } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">
        Rp. {price.toLocaleString("id-ID")}
      </span>
      <Button classname="bg-blue-600" onClick={() => handleAddToCart(id)}>
        Add to cart
      </Button>
    </div>
  );
};

CardProduct.FooterTest = FooterTest;
CardProduct.BodyTest = BodyTest;
CardProduct.Header = Header;

export default CardProduct;
