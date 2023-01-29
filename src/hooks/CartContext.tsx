import React, { createContext, useState, useEffect, useReducer } from "react";

interface Props {
  children: React.ReactNode;
}

interface Products {
  pack: boolean;
  name: string;
  stock: number;
  description?: Array<Array<string>>;
  price: number;
  quantity: number;
  image: string;
  id: number;
}

//initial Value harcoded for the test
const cart = [
  {
    pack: true,
    name: "My Christmas pack",
    stock: 12,
    description: [
      ["Cardboard box:", "(container)"],
      ["Unisex Short Sleeve T-Shirt", "(Green, Small)"],
      ["Basic bottle", "(Blue)"],
    ],
    price: 71.2,
    quantity: 5,
    image:
      "https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    id: 1,
  },
  {
    pack: false,
    name: "Basic T-Shirt",
    stock: 7,
    price: 13.5,
    quantity: 3,
    image:
      "https://images.unsplash.com/photo-1578021127722-1f1ff95b429e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    id: 2,
  },
  {
    pack: false,
    name: "Woman Bottle",
    stock: 5,
    price: 13.5,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1585083969600-495ee7e3604b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    id: 3,
  },
];

const initialState = {
  state: cart,
  removeItem: (id: number) => {},
  changeQuantity: (id: number, quantity: number) => {},
};

function cartReducer(
  state: Products[],
  action: { type: "REMOVE_ITEM" | "CHANGE_QUANTITY" | undefined; payload: any }
) {
  switch (action.type) {
    case "REMOVE_ITEM": {
      let stateFiltered = state.filter((el) => el.id !== action.payload);
      return stateFiltered;
    }
    case "CHANGE_QUANTITY": {
      let stateChanged = state.map((el) => {
        if (el.id === action.payload.id) {
          el.quantity = action.payload.quantity;
        }

        return el;
      });
      return stateChanged;
    }
    default:
      return state;
  }
}

interface CartContx {
  state: Products[];
  removeItem: (id: number) => void;
  changeQuantity: (id: number, quantity: number) => void;
}

const CartContext = createContext<CartContx>(initialState);

const CartContextProvider = ({ children }: Props) => {
  //const [cart, setCart] = useState(null);

  // fetch a userCart from a fake backend API
  /*  useEffect(() => {
    const fetchUser = () => {
    
      fetch("https://randomCart.me/api/")
        .then((response) => response.json())
        .then((result) => setCart(result)
        .catch((error) => console.log("An error occured"));
    };

    fetchUser();
  }, []); */

  const [state, dispatch] = useReducer(cartReducer, cart);

  function removeItem(id: number) {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  }

  function changeQuantity(id: number, quantity: number) {
    dispatch({
      type: "CHANGE_QUANTITY",
      payload: { id, quantity },
    });
  }

  return (
    <CartContext.Provider value={{ state, removeItem, changeQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
