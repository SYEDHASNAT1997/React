import React ,{useState,useEffect} from 'react';
import './App.css';
import insta_logo from './insta_logo.jpg';

import android from './android.jfif';

import Post from './Post';
import {db} from './Fireabase';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';


function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

function App() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [posts, setposts] = useState([]);
  const [open,setOpen]=useState([false]);

useEffect(() =>{

  db.collection('posts').onSnapshot(snapshot => {
    setposts(snapshot.docs.map(doc =>({
     id: doc.id,
      doc:doc.data()})));

})

},[]);

const singup (evet) =>{

}
  return (
    
    <div className="App">
     <Modal
        open={open}
        onClose={()=>setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
        <h2>im modal</h2>
      </div>
      
      >
        {body}
      </Modal>
     <div className="app__header">
    <img className="app__headerimage"
     src={insta_logo} alt="instagram logo">
       
     </img>
   </div>
   <Button onClick={() =>setOpen(true)}>Sign up</Button>

   <h1 >instagram clone is here devloped by ©Hasnat</h1>
  
  {
  posts.map(({id,post}) =>(
<Post key={id} username={Post.username} caption={Post.caption} imageurl={Post.imageurl}></Post>

  ))
  }
  
  
    
    </div>
   
  );
}

export default App;
