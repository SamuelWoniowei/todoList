# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot
<img width="1286" alt="Screenshot 2023-10-12 at 15 43 47" src="https://github.com/SamuelWoniowei/todoList/assets/18232000/e4dd0e93-2e2b-43e9-92c9-b80270f0b472">



### Links

- Solution URL: [https://github.com/SamuelWoniowei/todoList](https://github.com/SamuelWoniowei/todoList)
- Live Site URL: [Live site](https://fancytodolist.netlify.app)

### Built with

- Semantic HTML5 markup
- Tailwind
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


### What I learned
I learned about more about context API in Reactjs because I needed to manage my darkMode state across the whole app.

To see how you can add code snippets, see below:

```js
import { createContext, useContext, useState } from "react";

const DarkModeContext = createContext();

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }} >
      {children}
    </DarkModeContext.Provider>
  );
};
```


### Continued development

I will be implementing the drag and drop feature in the the nearest future.

