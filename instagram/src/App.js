import React ,{useState,useEffect} from 'react';
import './App.css';
import insta_logo from './insta_logo.jpg';
import basil from './basil.jpeg';

import android from './android.jfif';

import Post from './Post';
import {db} from './Fireabase';

function App() {
  const [posts, setposts] = useState([])

useEffect(() =>{

  db.collection('posts').onSnapshot(snapshot => {
    setposts(snapshot.docs.map(doc =>doc.data()));

})

},[]);
  return (
    <div className="App">
     <div className="app__header">
    <img className="app__headerimage"
     src={insta_logo} alt="instagram logo">
       
     </img>
    
  </div>
  <h1 > <h1 >instagram clone is here devloped by ©Hasnat</h1></h1>
  
  {
  posts.map(post =>(
<Post username={Post.username} caption={Post.caption} imageurl={Post.imageurl}></Post>

  ))
  }
  <Post username ="basil" imageurl={basil} caption="Amazng Day it was"></Post>
  <Post username="ali" imageurl={insta_logo} caption="instagram pic "/>
 
  <Post username="Jobs.pk" imageurl={android} caption="android developer required"/>
  

    </div>
  );
}

export default App;
