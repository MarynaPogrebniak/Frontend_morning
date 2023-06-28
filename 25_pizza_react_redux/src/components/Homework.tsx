import React, { useEffect, useRef } from "react";

const Homework = () => {
    // inputRef - ссылка, на какой элемент её повесим, до такого элемента и будем иметь доступ
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const savedValue = localStorage.getItem('myValue');
        if (savedValue && inputRef.current) {
            inputRef.current.value = savedValue;
        }
    }, []);
    
    const handleSave = () => {
        const value = inputRef.current?.value ? inputRef.current?.value : '';
        localStorage.setItem('myValue', value);
    };

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={handleSave}>Сохранить</button>
        </div>
    );
};

export default Homework;


//     "dependencies": {
// библиотека для работы с redux, обновленный вариант
//       "@reduxjs/toolkit": "^1.9.5",

// библиотеки для тестирования
//       "@testing-library/jest-dom": "^5.16.5",
//       "@testing-library/react": "^13.4.0",
//       "@testing-library/user-event": "^13.5.0",
//    библиотеки для типизации при работе с typescript

//   "@types/jest": "^27.5.2",
//       "@types/node": "^16.18.36",
//       "@types/react": "^18.2.12",
//       "@types/react-dom": "^18.2.5",
//       "@types/react-redux": "^7.1.25",
//       "@types/react-router-dom": "^5.3.3",

// библиотека для работы с запросами на сервере
//    "axios": "^1.4.0",

// библиотека со всеми реакт инструментами
//       "react": "^18.2.0",

// библиотека для работы с отображением инфо о загрузке после 
// начала запроса на сервер до его окончания 
//       "react-content-loader": "^6.2.1",

// библиотека для работы с виртуальным деревом нашего проекта
//       "react-dom": "^18.2.0",

// библиотека для связки реакт и редакс
//       "react-redux": "^8.1.0",

// библиотека для маршрутизации проекта
//       "react-router-dom": "^6.13.0",

// например create react app
//       "react-scripts": "5.0.1",

// библиотека для управления глобальным состоянием
//       "redux": "^4.2.1",

// надстройка для языка программирования js для типизации данных в проекте
//       "typescript": "^4.9.5",


//       "web-vitals": "^2.1.4"
//     },
//     "scripts": {
//       "start": "react-scripts start",
//       "build": "react-scripts build",
//       "test": "react-scripts test",
//       "eject": "react-scripts eject"
//     },
//     "eslintConfig": {
//       "extends": [
//         "react-app",
//         "react-app/jest"
//       ]
//     },
//     "browserslist": {
//       "production": [
//         ">0.2%",
//         "not dead",
//         "not op_mini all"
//       ],
//       "development": [
//         "last 1 chrome version",
//         "last 1 firefox version",
//         "last 1 safari version"
//       ]
//     }
//   }
  