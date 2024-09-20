import { useEffect, useRef, useState } from "react";
import Button from "../components/Elements/Button/Index";
import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const username = useLogin();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);
  const handleLogout = () => {
    localStorage.removeItem("token");
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

  const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);
  const handleAddToCartRef = (id) => {
    cartRef.current = [...cartRef.current, { id, qty: 1 }];
    localStorage.setItem("cart", JSON.stringify(cartRef.current));
  };

  const totalPriceref = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceref.current.style.display = "table-row";
    } else {
      totalPriceref.current.style.display = "none";
    }
  }, [cart]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <>
      <div className="flex justify-end items-center h-20 text-white bg-blue-600 px-10">
        <span className="capitalize">{username}</span>
        <Button classname="ml-5 text-sm" type="button" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center gap-3">
        <div className="w-3/4 flex flex-wrap gap-3">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header
                image={product.image}
                id={product.id}
              ></CardProduct.Header>
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
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  return (
                    <tr key={item.id}>
                      <td className="line-clamp-1">{product.title}</td>
                      <td>Rp. {product.price.toLocaleString("id-ID")}</td>
                      <td>{item.qty}</td>
                      <td>
                        Rp. {(item.qty * product.price).toLocaleString("id-ID")}
                      </td>
                    </tr>
                  );
                })}
              <tr ref={totalPriceref}>
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
