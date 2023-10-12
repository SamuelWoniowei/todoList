import TodoList from "./components/TodoList";
import { useDarkMode } from "./components/DarkModeContext";

function App() {
  const { darkMode } = useDarkMode();
  console.log(darkMode);
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className={` h-screen relative bg-white dark:bg-darkBackground  font-josefin`}>
        <div>
          {darkMode ? (
            <img src="/src/assets/bg-desktop-dark.jpg" alt="dark mode background" className="h-64 lg:h-full"  />
          ) : (
            <img src="/src/assets/bg-desktop-light.jpg" alt="light mode background" className="h-64 lg:h-full"  />
          )}
        </div>
        <div className="flex justify-center">
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
