import React ,{useState} from 'react';
import './App.css';
import insta_logo from './insta_logo.jpg';
import basil from './basil.jpeg';

import android from './android.jfif';

import Post from './Post';


function App() {
  const [posts, setposts] = useState([{username :"basil" ,imageurl:'C:\Users\DELL\Documents\GitHub\React\instagram\src\basil.jpeg' ,caption:'Amazng Day it was'

  },{username :"basil" ,imageurl:{basil}, caption:'Amazng Day it was'
}])
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
