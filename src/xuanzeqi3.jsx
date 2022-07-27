import './xuanzeqi3.css'
import {useState, useEffect} from 'react';
// 引入antd图标
import { DownOutlined,UpOutlined } from '@ant-design/icons';
import {Button} from 'antd';
// 引入动画
import provincelist from './provinceList';

function Xuanzeqi3(){
    const [areaindex,setAreaindex] = useState(0);
    const [curarea,setCurarea] = useState([]);

    const [cityindex,setCityindex] = useState(0);
    const [curcity,setCurcity] = useState([]);

    const [proindex,setProindex] = useState(0);
    const [provinceList] =useState(provincelist);
    // const [provinceList] =useState(['','',
    //     {name:'北京', cityList:['','',
    //         {name:'市辖区', areaList:['东城区','西城区','崇文区','宣武区','朝阳区','丰台区','石景山区','海淀区','门头沟区','房山区','通州区','顺义区','昌平区','大兴区','怀柔区','平谷区']},
    //         {name:'县', areaList:['密云县','延庆县','北京县']}
    //     ]},
    //     {name:'上海', cityList:['','',
    //         {name:'市辖区', areaList:['黄浦区','卢湾区','徐汇区','长宁区','静安区','普陀区','闸北区','虹口区','杨浦区','闵行区','宝山区','嘉定区','浦东新区','金山区','松江区','青浦区','南汇区','奉贤区']},
    //         {name:'县', areaList:['崇明县','某某县','某县']}
    //     ]},
    //     {name:'天津', cityList:['','',
    //         {name:'市辖区', areaList:['和平区','河东区','河西区','南开区','河北区','红桥区','塘沽区','汉沽区','大港区','东丽区','西青区','津南区','北辰区','武清区','宝坻区']},
    //         {name:'县', areaList:['宁河县','静海县','蓟　县']}
    //     ]},
    //     {name:'重庆', cityList:['','',
    //         {name:'市辖区', areaList:['万州区','涪陵区','渝中区','大渡口区','江北区','沙坪坝区','九龙坡区','南岸区','北碚区','万盛区','双桥区','渝北区','巴南区','黔江区','长寿区']},
    //         {name:'县', areaList:['綦江县','潼南县','铜梁县','大足县','荣昌县','璧山县','梁平县','城口县','丰都县','垫江县','武隆县','忠　县','开　县','云阳县','奉节县','巫山县','巫溪县','石柱土家族自治县','秀山土家族苗族自治县','酉阳土家族苗族自治县','彭水苗族土家族自治县']},
    //         {name:'市', areaList:['江津市','合川市','永川市','南川市']}
    //     ]},
    //     {name:'四川', cityList:['','',
    //         {name:'成都市', areaList:['市辖区1','锦江区','青羊区','金牛区','武侯区','成华区','龙泉驿区','青白江区','新都区','温江县','金堂县','双流县','郫　县','大邑县','蒲江县','新津县','都江堰市','彭州市','邛崃市','崇州市']},
    //         {name:'自贡市', areaList:['市辖区2','自流井区','贡井区','大安区','沿滩区','荣　县','富顺县']},
    //         {name:'攀枝花市', areaList:['市辖区3','东　区','西　区','仁和区','米易县','盐边县']},
    //         {name:'泸州市', areaList:['市辖区4','江阳区','纳溪区','龙马潭区','泸　县','合江县','叙永县','古蔺县']},
    //         {name:'德阳市', areaList:['市辖区5','旌阳区','中江县','罗江县','广汉市','什邡市','绵竹市']},
    //         {name:'绵阳市', areaList:['市辖区6','涪城区','游仙区','三台县','盐亭县','安　县','梓潼县','北川羌族自治县','平武县','江油市']},
    //         {name:'广元市', areaList:['市辖区7','市中区','元坝区','朝天区','旺苍县','青川县','剑阁县','苍溪县']},
    //         {name:'遂宁市', areaList:['市辖区8','船山区','安居区','蓬溪县','射洪县','大英县']},
    //         {name:'内江市', areaList:['市辖区9','市中区','东兴区','威远县','资中县','隆昌县']},
    //         {name:'乐山市', areaList:['市辖区10','市中区','沙湾区','五通桥区','金口河区','犍为县','井研县','夹江县','沐川县','峨边彝族自治县','马边彝族自治县','峨眉山市']},
    //         {name:'南充市', areaList:['市辖区11','顺庆区','高坪区','嘉陵区','南部县','营山县','蓬安县','仪陇县','西充县','阆中市']},
    //         {name:'眉山市', areaList:['市辖区12','东坡区','仁寿县','彭山县','洪雅县','丹棱县','青神县']},
    //         {name:'宜宾市', areaList:['市辖区13','翠屏区','宜宾县','南溪县','江安县','长宁县','高　县','珙　县','筠连县','兴文县','屏山县']},
    //         {name:'广安市', areaList:['市辖区14','广安区','岳池县','武胜县','邻水县','华莹市']},
    //         {name:'达州市', areaList:['市辖区15','通川区','达　县','宣汉县','开江县','大竹县','渠　县','万源市']},
    //         {name:'雅安市', areaList:['市辖区16','雨城区','名山县','荥经县','汉源县','石棉县','天全县','芦山县','宝兴县']},
    //         {name:'巴中市', areaList:['市辖区17','巴州区','通江县','南江县','平昌县']},
    //         {name:'资阳市', areaList:['市辖区18','雁江区','安岳县','乐至县','简阳市']},
    //         {name:'阿坝藏族羌族自治州', areaList:['汶川县','理　县','茂　县','松潘县','九寨沟县','金川县','小金县','黑水县','马尔康县','壤塘县','阿坝县','若尔盖县','红原县']},
    //         {name:'甘孜藏族自治州', areaList:['康定县','泸定县','丹巴县','九龙县','雅江县','道孚县','炉霍县','甘孜县','新龙县','德格县','白玉县','石渠县','色达县','理塘县','巴塘县','乡城县','稻城县','得荣县']},
    //         {name:'凉山彝族自治州', areaList:['西昌市','木里藏族自治县','盐源县','德昌县','会理县','会东县','宁南县','普格县','布拖县','金阳县','昭觉县','喜德县','冕宁县','越西县','甘洛县','美姑县','雷波县']}
    //     ]},
    //     {name:'贵州', cityList:['','',
    //         {name:'贵阳市', areaList:['市辖区','南明区','云岩区','花溪区','乌当区','白云区','小河区','开阳县','息烽县','修文县','清镇市']},
    //         {name:'六盘水市', areaList:['钟山区','六枝特区','水城县','盘　县']},
    //         {name:'遵义市', areaList:['市辖区','红花岗区','汇川区','遵义县','桐梓县','绥阳县','正安县','道真仡佬族苗族自治县','务川仡佬族苗族自治县','凤冈县','湄潭县','余庆县','习水县','赤水市','仁怀市']},
    //         {name:'安顺市', areaList:['市辖区','西秀区','平坝县','普定县','镇宁布依族苗族自治县','关岭布依族苗族自治县','紫云苗族布依族自治县']},
    //         {name:'铜仁地区', areaList:['铜仁市','江口县','玉屏侗族自治县','石阡县','思南县','印江土家族苗族自治县','德江县','沿河土家族自治县','松桃苗族自治县','万山特区']},
    //         {name:'黔西南布依族苗族自治州', areaList:['兴义市','兴仁县','普安县','晴隆县','贞丰县','望谟县','册亨县','安龙县']},
    //         {name:'毕节地区', areaList:['毕节市','大方县','黔西县','金沙县','织金县','纳雍县','威宁彝族回族苗族自治县','赫章县']},
    //         {name:'黔东南苗族侗族自治州', areaList:['凯里市','黄平县','施秉县','三穗县','镇远县','岑巩县','天柱县','锦屏县','剑河县','台江县','黎平县','榕江县','从江县','雷山县','麻江县','丹寨县']},
    //         {name:'黔南布依族苗族自治州', areaList:['都匀市','福泉市','荔波县','贵定县','瓮安县','独山县','平塘县','罗甸县','长顺县','龙里县','惠水县','三都水族自治县']}
    //     ]},
    // ]);
   const [inputPro,setInputPro] = useState(''); 
   const [inputCity,setInputCity] =useState('');
   const [inputArea,setInputArea] =useState('');

   const [listControl,setListControl] =useState(false);

    //设置默认值
    // useEffect(()=>{
    //     const ul1 = document.getElementsByClassName('provinceList')[0];
    //     const ul2 =document.getElementsByClassName('cityList')[0];
    //     const ul3 = document.getElementsByClassName('areaList')[0];
    //     setInputPro(ul1.children[2].innerHTML+'/');
    //     setInputCity(ul2.children[2].innerHTML+'/');
    //     setInputArea(ul3.children[2].innerHTML);
    // },[proindex,cityindex,areaindex]);
    
    useEffect(() => {
      
        const ul1 = document.getElementsByClassName('provinceList')[0];
        const ul2 =document.getElementsByClassName('cityList')[0];
        const ul3 = document.getElementsByClassName('areaList')[0];
        
        if( ul1.children[2] && ul2.children[2] && ul3.children[2]){
            setInputPro(ul1.children[2].innerHTML+'/');
            setInputCity(ul2.children[2].innerHTML+'/');
            setInputArea(ul3.children[2].innerHTML);
        }
        },[proindex,cityindex,areaindex]);



    function cityShow(event){
        let curli = event.target;
        let curprovince = curli.innerHTML;
        if(curprovince===''){
            return
        }
        // setInputPro(curprovince+'/');
        // setInputCity('');
        // setInputArea('');
        let curindex = provinceList.findIndex(item=>item.name===curprovince);
        setProindex(curindex-2);
        let curcities = Array(2).fill('').concat(provinceList.filter(item=>item.name === curprovince)[0].cityList);

        while(curcities.length<5){
            curcities.push('');
        }
        setCityindex(0);
        setCurcity(curcities);

        let curareas = Array(2).fill('').concat(curcities[2].areaList);
        while(curareas.length<5){
            curareas.push('');
        }
        setAreaindex(0);
        setCurarea(curareas);
    
    }

    function areaShow(event){
        
        let curli = event.target;
        let curc = curli.innerHTML;
        if(curc === ''){
            return
        }
        let curindex = curcity.findIndex(item=>item.name===curc);
        // setInputCity(curc+'/');
        // setInputArea('');
        let curareas = Array(2).fill('').concat(curcity.filter(item=>item.name === curc)[0].areaList);
        setAreaindex(0);
        setCityindex(curindex-2);
        setCurarea(curareas);
    }
    //地区的点击事件
    function handleOutput(event){
        let curli = event.target;
        if (curli.innerHTML===''){
            return ;
        }
        let curar = curli.innerHTML;
        let curindex = curarea.indexOf(curar);
        // setInputArea(curar);
        setAreaindex(curindex-2);

    }
    //地区级联选择表的出现和隐藏
    function boxShow(){
        const box = document.getElementsByClassName('boxList')[0];
        const arrow = document.getElementById('down');
        // console.log(box.style.display);
        if(box.style.display === 'none'){
            box.style.display = 'flex';
            arrow.style.cssText = 'color:black ;' ;
            setListControl(true);
        }else{
            box.style.display = 'none';
            arrow.style.cssText = 'color: black;' ;
            setListControl(false);
        }
    }

    //省份滚轮事件的处理
    function handleproWheel(event){
        //deltaY向下是正，向上是负
        const deltaY = event.deltaY;
        let prolength = provinceList.length;
        
        if(deltaY > 0 ){//向下滚动，数据加一
            if(proindex< prolength-3){
                setProindex(proindex+1);
                // setInputPro(provinceList[proindex+3].name+'/');
                //设置城市和地区的变化
                // setInputCity('');
                // setInputArea('');
                let curcities = Array(2).fill('').concat(provinceList.filter(item=>item.name === provinceList[proindex+3].name)[0].cityList);
                while(curcities.length<5){
                    curcities.push('');
                }
                setCityindex(0);
                setCurcity(curcities);

                let curareas = Array(2).fill('').concat(curcities[2].areaList);
                while(curareas.length<5){
                    curareas.push('');
                }
                setAreaindex(0);
                setCurarea(curareas);
                
            }else{
                return
            }
        }
        if(deltaY < 0){//向上移动
            if(proindex>0){
                setProindex(proindex-1);
                // setInputPro(provinceList[proindex+1].name+'/');
                //设置城市和地区的变化
                // setInputCity('');
                // setInputArea('');
                let curcities = Array(2).fill('').concat(provinceList.filter(item=>item.name === provinceList[proindex+1].name)[0].cityList);
                while(curcities.length<5){
                    curcities.push('');
                }
                setCityindex(0);
                setCurcity(curcities);

                let curareas = Array(2).fill('').concat(curcities[2].areaList);
                while(curareas.length<5){
                    curareas.push('');
                }
                setAreaindex(0);
                setCurarea(curareas);
            }else{
                return
            }
        }       
    }
    //城市滚轮事件的处理
    function handlecityWheel(event){
        const deltaY = event.deltaY;
        let citylength = curcity.length;
        
        if(deltaY > 0 ){//向下滚动，数据加一
            if(cityindex< citylength-3){
                // setInputCity(curcity[cityindex+3].name+'/');
                setCityindex(cityindex+1);
                //设置地区的变化
                // setInputArea('');
                let curareas = Array(2).fill('').concat(curcity.filter(item=>item.name === curcity[cityindex+3].name)[0].areaList);

                console.log(curareas,areaindex);
                setAreaindex(0);
                setCurarea(curareas);
            }else{
                return
            }
        }if(deltaY < 0){//向上移动
            if(cityindex>0){
                // setInputCity(curcity[cityindex+1].name+'/');
                setCityindex(cityindex-1);
                //设置地区的变化
                // setInputArea('');
                let curareas = Array(2).fill('').concat(curcity.filter(item=>item.name === curcity[cityindex+1].name)[0].areaList);

                console.log(curareas,areaindex);
                setAreaindex(0);
                setCurarea(curareas);
            }else{
                return
            }
        }       
        console.log(curcity[cityindex]);
    }
    //地区滚轮事件的处理
    function handleareaWheel(event){
        const deltaY = event.deltaY;
        let arealength = curarea.length;
        
        if(deltaY > 0 ){//向下滚动，数据加一
            if(areaindex< arealength-3){
                // setInputArea(curarea[areaindex+3]);
                setAreaindex(areaindex+1);
            }else{
                return
            }
        }
        if(deltaY < 0){//向上移动
            if(areaindex>0){
                // setInputArea(curarea[areaindex+1]);
                setAreaindex(areaindex-1);
                
            }else{
                return
            }
        }       
       
    }
    
    function reset(){
        setInputPro('');
        setInputCity('');
        setInputArea('');
    }
    function confirm(){
        const box = document.getElementsByClassName('boxList')[0];
        const arrow = document.getElementById('down');
        box.style.display = 'none';
        arrow.style.cssText = 'color: black;' ;
        setListControl(false);
    }
    return(
        <div >
            <h4>选择器3</h4>
           
            <div className='X3container'>
                
                <input type='search' className='output' id='output' value={inputPro+inputCity+inputArea} placeholder='请选择城市' readOnly/>
                <span className='down' id='down' onClick={boxShow} >{ listControl === false? <DownOutlined/>: <UpOutlined />}</span>

                
                <div className='boxList' style={{display:'none'}}>
                    <ul className='provinceList' onClick={cityShow} onWheel={handleproWheel}>
                        { provinceList.slice(proindex,proindex+5).map((item,index)=>
                            <li key={''+item.name+index}>{item.name}</li>
                        )}
   
                    </ul>

                    <ul className='cityList' onClick={areaShow} onWheel={handlecityWheel}>
                        {curcity.slice(cityindex,cityindex+5).map((item,index)=>
                            <li key={''+item.name+index}>{item.name}</li>
                        )}
                    </ul>

                    <ul className='areaList' onClick={handleOutput} onWheel={handleareaWheel}>
                        {curarea.slice(areaindex,areaindex+5).map((item,index)=>
                            <li key={item+index}>{item}</li>
                        )}
                    </ul>
                    <div className='boxcontrol'>
                         <Button type='default' size='small' onClick={reset} style={{marginRight:'10px',}}>清空</Button> 
                         <Button type='primary' size='small' onClick={confirm} style={{marginRight:'10px',}}>确认</Button>
                    </div>
                </div>
                
            </div>
            

        
        </div>
    )
}
export default Xuanzeqi3;