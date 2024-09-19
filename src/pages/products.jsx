import { useEffect, useState } from "react";
import Button from "../components/Elements/Button/Index";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: 1000000,
    image: "/images/image1.webp",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptatem nihil beatae ducimus iure laudantium similique, molestias, tempora eligendi et pariatur, officiis totam harum sit distinctio dolores iusto consequatur provident.`,
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: 500000,
    image: "/images/image1.webp",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
  {
    id: 3,
    name: "Sepatu Adidong",
    price: 5000000,
    image: "/images/image1.webp",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart([
        ...cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        ),
      ]);
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  return (
    <>
      <div className="flex justify-end items-center h-20 text-white bg-blue-600 px-10">
        {email}
        <Button classname="ml-5 text-sm" type="button" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center gap-3">
        <div className="w-3/4 flex flex-wrap gap-3">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image}></CardProduct.Header>
              <CardProduct.BodyTest title={product.title}>
                {product.description}
              </CardProduct.BodyTest>
              <CardProduct.FooterTest
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              ></CardProduct.FooterTest>
            </CardProduct>
          ))}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>Rp. {product.price.toLocaleString("id-ID")}</td>
                    <td>{item.qty}</td>
                    <td>
                      Rp. {(item.qty * product.price).toLocaleString("id-ID")}
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>Rp. {totalPrice.toLocaleString("id-ID")}</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* <div className="mt-5 flex justify-center">
        <Counter></Counter>
      </div> */}
    </>
  );
};

export default ProductsPage;
