import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import Circle from "../assets/Circle";
import Sun from "../assets/Sun";
import Moon from "../assets/Moon";
import { v4 as uuidv4 } from "uuid";
import { useDarkMode } from "./DarkModeContext";

export default function TodoList() {
  const [todo, setTodo] = useState("");
  const [items, setItems] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items"));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);

  const updateItemStatus = (itemId) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          active: !item.active,
        };
      }
      return item;
    });

    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  const deleteItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    localStorage.setItem("items", JSON.stringify(newItems));
  };

  const handleInput = (value) => {
    setTodo(value);
  };

  const handleAddItem = () => {
    if (todo.trim() === "") {
      return;
    }

    const newItem = {
      id: uuidv4(),
      task: todo,
      active: true,
    };

    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
    setTodo("");
  };

  const handleClearCompletedItems = () => {
    const onlyActiveItems = items.filter((item) => item.active);
    setItems(onlyActiveItems);
    localStorage.setItem("items", JSON.stringify(onlyActiveItems));
  };

  const activeItems = items.filter((item) => item.active).length;

  const handleChangeActiveTab = (status) => {
    setActiveTab(status);
  };

  const filteredItems = items.filter((item) => {
    if (activeTab === "all") {
      return true;
    } else if (activeTab === "active") {
      return item.active;
    } else if (activeTab === "completed") {
      return !item.active;
    }
    return true;
  });

  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div
      className={` w-11/12 md:w-3/5 lg:w-2/5 m- ${
        darkMode ? "dark" : ""
      } absolute top-20 `}
    >
      <div className="flex flex-row justify-between ">
        <h2 className="tracking-[.40em] text-4xl font-bold mb-6 text-white">
          TODO
        </h2>
        {darkMode ? (
          <span onClick={toggleDarkMode} className="cursor-pointer">
            <Sun />
          </span>
        ) : (
          <span onClick={toggleDarkMode} className="cursor-pointer">
            <Moon />
          </span>
        )}
      </div>
      <div className="flex flex-row items-center bg-white mb-6 pl-3 rounded-sm overflow-hidden">
        <span onClick={handleAddItem}>
          <Circle />
        </span>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddItem();
          }}
        >
          <input
            type="text"
            className="w-full pl-5 py-5 outline-none"
            placeholder="Create a todo..."
            value={todo}
            onChange={(e) => handleInput(e.target.value)}
          />
        </form>
      </div>
      <div className=" bg-white rounded">
        {filteredItems.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            onUpdateStatus={updateItemStatus}
            onDeleteItem={deleteItem}
          />
        ))}
      </div>
      <div className="text-sm  py-5 px-3 bg-white  dark:bg-darkListItem shadow-md">
        {filteredItems.length <= 0 && activeTab === "all" && (
          <span className="text-xl block my-5 pb-5  text-center text-gray-400 font-bold font-sans">
            Your to-do list is empty. <br /> Start by adding tasks and stay
            organized!
          </span>
        )}
        {filteredItems.length <= 0 && activeTab === "completed" && (
          <span className="text-xl block my-5 pb-5  text-center text-gray-400 font-bold font-sans">
            0 completed Items
          </span>
        )}
        {filteredItems.length <= 0 && activeTab === "active" && (
          <span className="text-xl block my-5 pb-5  text-center text-gray-400  font-bold font-sans">
            0 Active Items
          </span>
        )}

        <div className="flex flex-row justify-between ">
          {activeItems > 1 ? (
            <span className="text-grayBlue cursor-pointer">
              {activeItems} items left
            </span>
          ) : (
            <span className="text-grayBlue cursor-pointer">
              {activeItems} item left
            </span>
          )}

          <div className="flex flex-row gap-2">
            <span
              onClick={() => handleChangeActiveTab("all")}
              className={`${
                activeTab === "all" ? "text-brightBlue" : "text-grayBlue"
              } cursor-pointer`}
            >
              All
            </span>
            <span
              onClick={() => handleChangeActiveTab("active")}
              className={`${
                activeTab === "active" ? "text-brightBlue" : "text-grayBlue"
              } cursor-pointer`}
            >
              Active
            </span>
            <span
              onClick={() => handleChangeActiveTab("completed")}
              className={`${
                activeTab === "completed" ? "text-brightBlue" : "text-grayBlue"
              } cursor-pointer`}
            >
              Completed
            </span>
          </div>
          <span
            className="text-grayBlue cursor-pointer"
            onClick={handleClearCompletedItems}
          >
            Clear completed
          </span>
        </div>
      </div>
    </div>
  );
}
