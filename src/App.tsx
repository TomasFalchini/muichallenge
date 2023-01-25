import React from "react";
import RemoveButton from "./components/RemoveButton";

export const CartContext = React.createContext({
  items: [{ id: 1 }, { id: 2 }, { id: 3 }],
});

function App() {
  return (
    <CartContext.Provider value={{ items: [{ id: 1 }, { id: 2 }, { id: 3 }] }}>
      <RemoveButton id={"12"} />
    </CartContext.Provider>
  );
}

export default App;
