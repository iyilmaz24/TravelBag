import { useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import { initialItems } from "./lib/constants";

function App() {
  const [itemsList, setItemsList] = useState(initialItems);

  const handleAddItem = (input: string) => {
    const newItem = {
      id: new Date().getTime(),
      text: input,
      packed: false,
    };
    setItemsList([...itemsList, newItem]);
  };

  const handleRemoveAllItems = () => {
    setItemsList([]);
  };
  const handleResetToInitial = () => {
    setItemsList(initialItems);
  };
  const handleMarkAllAsComplete = () => {
    setItemsList(itemsList.map((item) => ({ ...item, packed: true })));
  };
  const handleMarkAllAsIncomplete = () => {
    setItemsList(itemsList.map((item) => ({ ...item, packed: false })));
  };
  const handleDeleteItem = (id: number) => {
    setItemsList(itemsList.filter((item) => item.id !== id));
  };
  const handleToggleItem = (id: number) => {
    setItemsList(
      itemsList.map((item) => {
        if (item.id === id) {
          return { ...item, packed: !item.packed };
        }
        return item;
      })
    );
  };

  const packedItemsCount = itemsList.filter((item) => item.packed).length;

  return (
    <>
      <BackgroundHeading />

      <main>
        <Header
          totalItemsCount={itemsList.length}
          packedItemsCount={packedItemsCount}
        />
        <ItemList
          items={itemsList}
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        />
        <Sidebar
          handleAddItem={handleAddItem}
          handleRemoveAllItems={handleRemoveAllItems}
          handleResetToInitial={handleResetToInitial}
          handleMarkAllAsComplete={handleMarkAllAsComplete}
          handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
