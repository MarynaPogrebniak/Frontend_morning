import React from 'react';
import './App.css';
import DataFetcher from './components/DataFetcher';
import { setComments, setPhotos, setPosts, setUsers } from './reducer/reducers';
import Posts from './components/Posts';
import Comments from './components/Comments';
import RenderUsers from './components/RenderUsers';
import Photos from './components/Photos';

function App() {
  return (
    <div className="App">
      <DataFetcher
        endpoint='https://jsonplaceholder.typicode.com/users'
        action={setUsers}
      />
      <DataFetcher
        endpoint='https://jsonplaceholder.typicode.com/posts'
        action={setPosts}
      />
      <DataFetcher
        endpoint='https://jsonplaceholder.typicode.com/comments'
        action={setComments}
      />
      <DataFetcher
        endpoint='https://jsonplaceholder.typicode.com/photos'
        action={setPhotos}
      />
      <Posts />
      <Comments />
      <RenderUsers />
      <Photos />
    </div>
  );
}

export default App;