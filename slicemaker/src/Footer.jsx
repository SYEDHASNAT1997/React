import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
          <div id="example_3">
          <div id="example_24">
               <div id="example_27"><img id='img_27' src={process.env.PUBLIC_URL + "/example_27.png"} width='79' height='65' border='0'  /></div>
               <div id="example_30">Creative Solution</div>
               <div id="example_33">SliceMaker products provides you with the creative and innovative way to create a web page or a website. You can easily create unique and professional web page or website on your own with SliceMaker prroducts.</div>
               <div id="example_36"><a href='http//www.slicemaker.com' target='_self' title='View our Homepage to Learn More'><img id='img_36' src={process.env.PUBLIC_URL + "/example_36.png"} width='50' height='49' border='0'  onmouseover="$(this).attr('src','images/example/hovered-arrow-1.png');" onmouseout="this.src='images/example/example_36.png';"/></a></div>
          </div>
          <div id="example_25">
               <div id="example_28"><img id='img_28' src={process.env.PUBLIC_URL + "/example_28.png" } width='83' height='81' border='0'  /></div>
               <div id="example_31">Easy and Fast</div>
               <div id="example_34">Without writing DIV and CSS mannually, you just need a web design image and then import the design image into SliceMaker products to create a web page easily and fast. Click the below button to view the web page templates created by SliceMaker products, they are all free</div><br/>
               <div id="example_37"><a href='http://www.slicemaker.com/sample/page-1.html' target='_self' title='View the Templates Created by SliceMaker Soft'><img id='img_37' src={process.env.PUBLIC_URL + "/example_37.png"} width='48' height='49' border='0'  onmouseover="$(this).attr('src','images/example/hovered-arrow-2.png');" /></a></div>
          </div>
          <div id="example_26">
               <div id="example_29"><img id='img_29' src={process.env.PUBLIC_URL + "/example_29.png" } width='80' height='66' border='0'  /></div>
               <div id="example_32">Technical Support</div>
               <div id="example_35">If you cannot create a web page or have problems using SliceMaker products, please feel free to contact us. We promise to our customers we will try our best to solve whatever problem you are having within 24 hours even if you are a freetrial user. [Support: <a href="mailto:support@slicemaker.com">support@slicemaker.com</a>]</div><br/>
               <div id="example_38"><a href='http://www.slicemaker.com/inner_150.htm' target='_self' title='View more support options'><img id='img_38' src={process.env.PUBLIC_URL + "/example_38.png" } width='50' height='49' border='0'  onmouseover="$(this).attr('src','images/example/hovered-arrow-3.png');" onmouseout="this.src='images/example/example_38.png';"/></a></div>
          </div>


          </div>
    
 )
}
