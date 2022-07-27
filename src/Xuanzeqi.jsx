import './xuanzeqi.css';
import {useState,useEffect} from 'react';

function Xuanzeqi(){
    // const [province] = useState(['四川','贵州','江苏']);
    // const [city] =useState([
    //     {province:'四川',city:['chengdu','luzhou','yibing']},
    //     {province:'贵州',city:['guiyang','liupanshui','chishui']},
    //     {province:'江苏',city:['nanji nvcxsyung','danyang','wuxi']},
    // ]);
    const [curcity,setCurcity] = useState([]);
    const [curarea,setCurarea] = useState([]);
    const [provinceList] =useState([
        {name:'北京', cityList:[
            {name:'市辖区', areaList:['东城区','西城区','崇文区','宣武区','朝阳区','丰台区','石景山区','海淀区','门头沟区','房山区','通州区','顺义区','昌平区','大兴区','怀柔区','平谷区']},
            {name:'县', areaList:['密云县','延庆县','北京县']}
        ]},
        {name:'上海', cityList:[
            {name:'市辖区', areaList:['黄浦区','卢湾区','徐汇区','长宁区','静安区','普陀区','闸北区','虹口区','杨浦区','闵行区','宝山区','嘉定区','浦东新区','金山区','松江区','青浦区','南汇区','奉贤区']},
            {name:'县', areaList:['崇明县','某某县','某县']}
        ]},
        {name:'天津', cityList:[
            {name:'市辖区', areaList:['和平区','河东区','河西区','南开区','河北区','红桥区','塘沽区','汉沽区','大港区','东丽区','西青区','津南区','北辰区','武清区','宝坻区']},
            {name:'县', areaList:['宁河县','静海县','蓟　县']}
        ]},
        {name:'重庆', cityList:[
            {name:'市辖区', areaList:['万州区','涪陵区','渝中区','大渡口区','江北区','沙坪坝区','九龙坡区','南岸区','北碚区','万盛区','双桥区','渝北区','巴南区','黔江区','长寿区']},
            {name:'县', areaList:['綦江县','潼南县','铜梁县','大足县','荣昌县','璧山县','梁平县','城口县','丰都县','垫江县','武隆县','忠　县','开　县','云阳县','奉节县','巫山县','巫溪县','石柱土家族自治县','秀山土家族苗族自治县','酉阳土家族苗族自治县','彭水苗族土家族自治县']},
            {name:'市', areaList:['江津市','合川市','永川市','南川市']}
        ]},
        {name:'四川', cityList:[
            {name:'成都市', areaList:['市辖区','锦江区','青羊区','金牛区','武侯区','成华区','龙泉驿区','青白江区','新都区','温江县','金堂县','双流县','郫　县','大邑县','蒲江县','新津县','都江堰市','彭州市','邛崃市','崇州市']},
            {name:'自贡市', areaList:['市辖区','自流井区','贡井区','大安区','沿滩区','荣　县','富顺县']},
            {name:'攀枝花市', areaList:['市辖区','东　区','西　区','仁和区','米易县','盐边县']},
            {name:'泸州市', areaList:['市辖区','江阳区','纳溪区','龙马潭区','泸　县','合江县','叙永县','古蔺县']},
            {name:'德阳市', areaList:['市辖区','旌阳区','中江县','罗江县','广汉市','什邡市','绵竹市']},
            {name:'绵阳市', areaList:['市辖区','涪城区','游仙区','三台县','盐亭县','安　县','梓潼县','北川羌族自治县','平武县','江油市']},
            {name:'广元市', areaList:['市辖区','市中区','元坝区','朝天区','旺苍县','青川县','剑阁县','苍溪县']},
            {name:'遂宁市', areaList:['市辖区','船山区','安居区','蓬溪县','射洪县','大英县']},
            {name:'内江市', areaList:['市辖区','市中区','东兴区','威远县','资中县','隆昌县']},
            {name:'乐山市', areaList:['市辖区','市中区','沙湾区','五通桥区','金口河区','犍为县','井研县','夹江县','沐川县','峨边彝族自治县','马边彝族自治县','峨眉山市']},
            {name:'南充市', areaList:['市辖区','顺庆区','高坪区','嘉陵区','南部县','营山县','蓬安县','仪陇县','西充县','阆中市']},
            {name:'眉山市', areaList:['市辖区','东坡区','仁寿县','彭山县','洪雅县','丹棱县','青神县']},
            {name:'宜宾市', areaList:['市辖区','翠屏区','宜宾县','南溪县','江安县','长宁县','高　县','珙　县','筠连县','兴文县','屏山县']},
            {name:'广安市', areaList:['市辖区','广安区','岳池县','武胜县','邻水县','华莹市']},
            {name:'达州市', areaList:['市辖区','通川区','达　县','宣汉县','开江县','大竹县','渠　县','万源市']},
            {name:'雅安市', areaList:['市辖区','雨城区','名山县','荥经县','汉源县','石棉县','天全县','芦山县','宝兴县']},
            {name:'巴中市', areaList:['市辖区','巴州区','通江县','南江县','平昌县']},
            {name:'资阳市', areaList:['市辖区','雁江区','安岳县','乐至县','简阳市']},
            {name:'阿坝藏族羌族自治州', areaList:['汶川县','理　县','茂　县','松潘县','九寨沟县','金川县','小金县','黑水县','马尔康县','壤塘县','阿坝县','若尔盖县','红原县']},
            {name:'甘孜藏族自治州', areaList:['康定县','泸定县','丹巴县','九龙县','雅江县','道孚县','炉霍县','甘孜县','新龙县','德格县','白玉县','石渠县','色达县','理塘县','巴塘县','乡城县','稻城县','得荣县']},
            {name:'凉山彝族自治州', areaList:['西昌市','木里藏族自治县','盐源县','德昌县','会理县','会东县','宁南县','普格县','布拖县','金阳县','昭觉县','喜德县','冕宁县','越西县','甘洛县','美姑县','雷波县']}
        ]},
    ]);
   
    useEffect(()=>{
        setCurcity(provinceList[0].cityList);
        setCurarea(provinceList[0].cityList[0].areaList);
        // const select = [...document.getElementsByClassName('select')];
        // console.log(Object.prototype.toString.call(select),select.constructor === Array);
        // select.forEach((item,index)=>{ item.value = defaultname[index]});
    },[provinceList]);

    function cityShow(event){
        
        let curprovince = event.target.value;
        let curcities = provinceList.filter(item=>item.name === curprovince)[0].cityList;
        setCurcity(curcities);
        setCurarea(curcities[0].areaList);
        

    }

    function areaShow(event){
        let curc = event.target.value;
        let curcs = curcity.filter(item=>item.name === curc)[0].areaList;
        setCurarea(curcs);

    }
    return(
        <div >
            <h4>选择器1</h4>
            <select onChange={cityShow} className='select'>
                {provinceList.map(item=>
                    <option value={item.name} key={item.name}>{item.name}</option>
                )}
            </select>
           <select onChange={areaShow} className='select'>
            {curcity.map((item)=>
                <option value={item.name} key={item.areaList[2]}>{item.name}</option>
             )} 
             </select> 
            <select className='select'>
                {curarea.map(item=>
                    <option value={item} key={item} >{item}</option>
                )}
            </select>

        
        </div>
    )
}
export default Xuanzeqi;