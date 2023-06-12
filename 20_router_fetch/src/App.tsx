import React, { useState } from "react";
import "./App.css";
import { Router, Routes, Link, Route } from "react-router-dom";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";

const baseUrl = "https://jsonplaceholder.typicode.com";

interface IUser {
  id: number;
  name: string;
  email: string;
}

interface IComment {
  id: number;
  body: string;
}

interface IPost {
  id: number;
  title: string;
  body: string;
}

enum MenuItems {
  Users = "users",
  Comments = "comments",
  Posts = "posts",
}

function App() {
  // создали 3 состояния для сохранения данных после 
  // 1го из 3 потенциальных запросов на сервер
  const [users, setUsers] = useState<IUser[]>([]);
  const [comments, setComments] = useState<IComment[]>([]);
  const [posts, setPosts] = useState<IPost[]>([]);


  const fetchData = async (menuItem: MenuItems) => {
    try {
      // реализуем запрос на сервер в зависимости от того, что
      // принимаем в качестве параметра
      const response = await fetch(`${baseUrl}/${menuItem}`);
      const data = await response.json();

      switch (menuItem) {
        case MenuItems.Users:
          setUsers(data);
          break;
        case MenuItems.Comments:
          setComments(data);
          break;
        case MenuItems.Posts:
          setPosts(data);
          break;

          default: break;

      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Routes>
    {/* <Route path="/" element= {</>} /> */}

    <Route path="/users" element= {<Users users={users} />} />
    <Route path="/posts" element= {<Posts posts={posts} />} />
    <Route path="/comments" element= {<Comments comments={comments} />} />

      
    </Routes>
  );
}

export default App;
