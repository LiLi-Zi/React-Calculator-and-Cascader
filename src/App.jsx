import Jisuanqi from './Jisuanqi'; 
import Xuanzeqi from './Xuanzeqi';
import AntdCascader from './AntdCascader';
import Xuanzeqi2 from './xuanzeqi2';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import {Button} from 'antd';
import Xuanzeqi3 from './xuanzeqi3';
import { useState } from 'react';
//引入动画组件
import { TransitionGroup,CSSTransition } from "react-transition-group";

function App(){
    const [isShow,setIsShow] =useState(false);

    function handleToggole(){
      if(isShow){
        setIsShow(false);
      }else{
        setIsShow(true);
      }
    }
    return(
        <div>
          <ul>
              <li> <Link to="/jisuanqi"><Button type="primary">计算器</Button></Link> </li>
              <br></br>
              <li><Link to="/xuanzeqi"><Button type="primary" >select级联选择器</Button></Link> </li>
              <br/>
              <li><Link to="/xuanzeqi2"><Button type="primary" >点击级联选择器</Button></Link> </li>
              <br></br>
              <li><Link to="/xuanzeqi3"><Button type="primary" >滚动级联选择器</Button></Link> </li>
              <br></br>
              <li><Link to='/antdCascader'><Button type='ghost'> Antd组件级联选择器</Button></Link></li>
          </ul>


          <Routes>
          
          <Route path="/jisuanqi" element={<Jisuanqi/>} ></Route>
          <Route path="/xuanzeqi" element={<Xuanzeqi/>} />
          <Route path="/xuanzeqi2" element={<Xuanzeqi2/>} />
          <Route path="/xuanzeqi3" element={<Xuanzeqi3/>} />
          <Route path='/antdCascader' element={<AntdCascader/>}></Route> 
              
          </Routes>
          
         
        </div>
   
  );


}
export default App;