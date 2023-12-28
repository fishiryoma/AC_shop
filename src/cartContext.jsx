import { createContext, useState } from "react";

const CartContext = createContext();
// 起始數據
const initCartItem = [
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://picsum.photos/300/300?text=1",
    price: 100,
    quantity: 4,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "https://picsum.photos/300/300?text=2",
    price: 200,
    quantity: 2,
  },
];

const initCardInfo = {
  cardName: "",
  cardNumber: "",
  vaildDate: "",
  CVC: "",
};

function CartProvider({ children }) {
  const [item, setItem] = useState(initCartItem);
  const [cardinfo, setCardinfo] = useState(initCardInfo);

  // 修改購物車商品數量
  const editQuantity = (id, quantity) => {
    const updatedQuantity = item
      .map((el) => {
        if (el.id === id) {
          return { ...el, quantity: el.quantity + quantity };
        }
        return el;
      })
      .filter((el) => el.quantity !== 0);
    // 確認是否有數量為0的商品，若有則移除出購物車
    setItem(updatedQuantity);
  };

  // 計算總金額
  const totalPrice = () => {
    if (!item.length) return 0;
    const price = item.reduce((acc, cur) => acc + cur.quantity * cur.price, 0);
    return price;
  };

  // 抓取表單資料
  const handleChange = (e) => {
    const value = e.target.value;
    const inputName = e.target.name;
    setCardinfo({ ...cardinfo, [inputName]: value });
  };

  // console.log 信用卡資料
  const showCardinfo = () => {
    console.log(cardinfo, `總金額: ${totalPrice()}`);
  };

  // 需要往下傳的資料
  const provider = {
    initCartItem,
    item,
    editQuantity,
    handleChange,
    showCardinfo,
    totalPrice,
  };

  return (
    <CartContext.Provider value={provider}>{children}</CartContext.Provider>
  );
}

export default CartContext;
export { CartProvider };
