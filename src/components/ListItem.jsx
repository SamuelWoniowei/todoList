/* eslint-disable react/prop-types */
import Circle from "../../assets/Circle";
import Cancel from "../../assets/Cancel";
import CheckedCircle from "../../assets/CheckedCirlce";
import { useDarkMode } from "./DarkModeContext";
export default function ListItem({ item, onUpdateStatus, onDeleteItem }) {
  const handleItemClick = () => {
    onUpdateStatus(item.id);
  };
  const handleDeleteItem = () => {
    onDeleteItem(item.id);
  };
  const {darkMode} = useDarkMode();
  return (
    <div 
      className={`flex flex-row items-center gap-5 px-3 border-b border-gray-200 dark:border-gray-700 py-6 
      ${darkMode ? "dark" : ""}
      ${item.active ? "" : "line-through text-grayBlue  dark:text-grayBlue bg-checkBackground"} dark:text-lightGray dark:bg-darkListItem`}
    >
      {item.active ? (
        <span onClick={handleItemClick} className="cursor-pointer">
          <Circle />
        </span>
      ) : (
        <span onClick={handleItemClick} className="cursor-pointer">
          <CheckedCircle />
        </span>
      )}

      <span className="flex-grow">{item.task}</span>
      <div className="ml-auto">
        {item.active && (
          <span onClick={handleDeleteItem} className="cursor-pointer">
            <Cancel />
          </span>
        )}
      </div>
    </div>
  );
}
