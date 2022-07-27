
import './jisuanqi.css';
import {useState} from'react';
// let num1 =0;
// let operator = '';
// let num2 = 0;
// let res = 0;


function Jisuanqi() {
  const [cur,setCur] = useState(0); 
  const [res,setRes] = useState(0);
  const [operator,setOperator] =useState('');

  function calculate(e){
    
    const type = e.target.id;
    
   
    const  jisuan = document.getElementById('jisuan');
   
    //数字的输入
    if(type === 'num'){
      if(cur.toString().length<=10){ //输入的位数不能大于十位数
        if( cur.toString().search(/\./) === -1){
          setCur(''+cur+e.target.innerHTML );
          setCur(parseFloat(''+cur+e.target.innerHTML));
        }else{
          setCur(''+cur+e.target.innerHTML );
        }
      
      }else{
        return
      }
      
    }
      
    

    //小数点的输入
    if(type === 'point'){
      if( cur.toString().search(/\./) === -1){
        setCur(''+cur+'.');
      }else{
        return
      }
    }

    //清除（重置）按钮
    if(type === 'reset'){
      jisuan.style.display = 'none';
      setCur(0);
      setRes(0);
      setOperator('');
    }

    //取相反数的按钮
    if(type === 'reverse'){
      if(cur.toString().search(/-/) === -1){
      setCur(parseFloat('-'+cur));
      }else{
        setCur(Math.abs(cur));
      }
    }
    //取百分比数按钮
    if(type==='percent'){
      if(cur !== 0 ){
        setCur(parseFloat(cur)/100);
      }else{
        return
      }
    }

    //加法按钮
    if(type === 'add'){
      // const add = document.getElementById('add');
      // add.style.backgroundColor = 'rgb(246, 121, 63)';
      //使用组件外层变量的方法，否则在组件重新渲染时会每次重新定义变量的值
      // num2 = cur;
      // operator = '+';
      // res = num1 +num2;
      // num1 = res;
      
      //使用eval（）函数的方法，把字符串当做表达式执行
      jisuan.style.display = 'block';
      if(operator !== ''){ //有操作符时，先进行操作符的计算

        let str = ''+res+operator+cur;
       
        if(str.search(/--/) === -1){
          setRes(eval(res+operator+cur));
          setOperator('+');
          setCur(0);
        }else{
          setRes(res+Math.abs(cur));
          setOperator('+');
          setCur(0);
        }
      }else{ //无操作符时直接把cur变为res
        setRes(cur);
        setOperator('+');
        setCur(0);
      }

    
    }

    //减法按钮
    if(type === 'subtract'){
      jisuan.style.display = 'block';
      let str = ''+res+operator+cur;
      
     if(operator !== ''){
      
      if(str.search(/--/) === -1 ){
        setRes(eval(str));
        setOperator('-');
        setCur(0);
      }else{
        setRes(eval(res+Math.abs(cur)));
        setOperator('-');
        setCur(0);
      }
     }else{
        setRes(cur);
        setOperator('-');
        setCur(0);
     }
      
    }

    //乘法按钮
   
    if(type === 'multiply'){
      jisuan.style.display = 'block';
      let str = ''+res+operator+cur;
      
     if(operator !== ''){
        setRes(eval(str));
        setOperator('*');
        setCur(0);
      
     }else{
        setRes(cur);
        setOperator('*');
        setCur(0);
     }
      
    }
    //除法按钮
    
    if(type === 'divide'){
      let str = ''+res+operator+cur;
      jisuan.style.display = 'block';
     if(operator !== ''){
        setRes(eval(str));
        setOperator('/');
        setCur(0);
      
     }else{
        setRes(cur);
        setOperator('/');
        setCur(0);
     }
      
    }

    //等于按钮
    //输出的大于10位数的数字 --> 进行科学计数法转化
    if(type === 'caculate'){
      jisuan.style.display = 'none';
      
     if(operator !== ''){
      let str = ''+res+operator+cur;
      let num = eval(str);
      
        if(num>10000000000){

          let newnum = num.toExponential(5);
          setRes(newnum);
          setOperator('');
          setCur(newnum);
        }
        else if( num.toString().length>10){
          let newnum = parseFloat(num.toPrecision(7));
          setRes(newnum);
          setOperator('');
          setCur(newnum);

        }
        else{
          setRes(num);
          setOperator('');
          setCur(num);
        }
      
     }else{
        setRes(cur);
        setOperator('');
        setCur(cur);
     }
      
    }
    
   
   
  }

  return (
    <div className="App">
        <div className='container'>
          <div className='screen'>
            <span id='jisuan'>{res}{operator}</span>
            <span id='output'>{cur}</span> 
          </div>
          <div className='keyboard'>
            <table onClick={calculate}>
              <tbody>
              <tr>
                <td id='reset'>c</td>
                <td id='reverse'>+/-</td>
                <td id='percent'>%</td>
                <td id='divide'>/</td>
              </tr>
              <tr>
                <td id='num'>7</td>
                <td id='num'>8</td>
                <td id='num'>9</td>
                <td id='multiply'>*</td>
              </tr>
              <tr>
                <td id='num'>4</td>
                <td id='num'>5</td>
                <td id='num'>6</td>
                <td id='subtract'>-</td>
              </tr>
              <tr>
                <td id='num'>1</td>
                <td id='num'>2</td>
                <td id='num'>3</td>
                <td id='add'>+</td>
              </tr>
              <tr>
                <td id='num' colSpan='2'>0</td>
                <td id='point'>.</td>
                <td id='caculate'>=</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
  );
}

export default Jisuanqi;
