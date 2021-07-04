import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Content  from './Content'
import Card from './Card'

export default function Appp() {
    return (
        <div >
            <Header></Header>
            <Content></Content>
            <Card imgsrc="C:\Users\DELL\Documents\GitHub\React\developer\public\me.jpg.jpg" name="ali" mail="ali@gmail.com" />
            <Card imgsrc="public\me.jpg.jpg" name="ahmed"  mail="ahmed@gmail.com"/>
            <Card imgsrc= "public\me.jpg.jpg" name="ahsan"  mail="ahsan@gmail.com"/>
            <Footer></Footer>
        </div>
    )
}
