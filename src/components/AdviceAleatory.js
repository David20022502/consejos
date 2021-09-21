import React, {useEffect, useState} from 'react';
import { Button} from 'antd';
import { SearchOutlined,LoadingOutlined} from '@ant-design/icons';
import '../css/AdviceAleatory.css';
const AdviceAleatory=({handleSetFavorites})=>{
    const [AleatoryAdvice,setAleatoryAdvice] = useState(null);
    const[AleatoryAdviceTemporary,setAleatoryAdviceTemporary]=useState(null);
    const [IsChangingAdvice,setIsChangingAdvice]=useState(false);
    useEffect(()=>{
        const getAdvice=async()=>{
            const advice = await fetch("https://api.adviceslip.com/advice")
            const adviceJson = await advice.json();
            setAleatoryAdviceTemporary(adviceJson.slip);
        }
        getAdvice();
    },[IsChangingAdvice])

    useEffect(()=>{
        console.log("consejnpo",AleatoryAdvice);
        if(AleatoryAdvice){
            if(AleatoryAdvice.id !== AleatoryAdviceTemporary.id){
                setAleatoryAdvice(AleatoryAdviceTemporary);
            }
            else {
                setIsChangingAdvice(!IsChangingAdvice);
            }
            console.log("consejo",AleatoryAdvice.advice);
        }
        else {
            setAleatoryAdvice(AleatoryAdviceTemporary);
        }
    },[AleatoryAdviceTemporary])
    const ChangeAdviceAleatory=()=>
        setIsChangingAdvice(!IsChangingAdvice);
    return(
        <div className="containerAdviceAleatory">
            <h1 style={{color:"#595959",textAlign:"center"}}>Consejo del día</h1>
            {AleatoryAdvice ===null ? <LoadingOutlined />: <h3 className="defaultStylecenter" style={{color:"#767676"}}>{AleatoryAdvice.advice}</h3>}
            <div style={{width:"100%",justifyContent:"center",display:"flex"}}>
                <Button onClick={()=>handleSetFavorites(AleatoryAdvice)} style={{margin:"10px"}} type="primary">Marcar como Favorito</Button>
                <Button onClick={ChangeAdviceAleatory} style={{margin:"10px"}} type="primary" icon={<SearchOutlined />}>Siguiente consejo</Button>
            </div>
        </div>
    );
}
export default AdviceAleatory;