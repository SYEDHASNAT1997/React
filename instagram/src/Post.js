import React from 'react'
import nature from './nature.jfif'
import Avatar from "@material-ui/core/Avatar";
import profile from './profile.jfif'
import './Post.css';

function Post({username,imageurl,caption}){
    return (
        <>
        <div className="post">
        <div className="post__header">
        <Avatar className="post__Avatar"
        alt="hasnat"
       
       />  
            <h3>{username}</h3>
            </div>
          <img className="post__image"
           src={imageurl} alt="post iamge"/>
            <h4 className="post__text"> <strong>{username}</strong> {caption}</h4>
        </div>
        </>
    )
};

export default Post;
