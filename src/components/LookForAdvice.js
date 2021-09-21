import React, {useEffect, useState} from 'react';
import {Button, Input} from "antd";
import '../css/LookForAdvce.css';
import {SearchOutlined} from "@ant-design/icons";
const LookForAdvice=({handleSetFavorites})=>{
    const [ValueSearch,setValueSearch]=useState(null);
    const [ResultsAdvices,setResultsAdvices]=useState(null);
    useEffect(()=>{
        const getAdvices=async()=>{
            const advice = await fetch(`https://api.adviceslip.com/advice/search/${ValueSearch}`)
            const adviceJson = await advice.json();
            if(adviceJson.slips){
                setResultsAdvices(adviceJson.slips);
            }
            else {
                setResultsAdvices(false);
            }

        }
        if(ValueSearch){
            getAdvices();
        }
    },[ValueSearch])
    useEffect(()=>{
        console.log("los datos busa",ResultsAdvices);
    },[ResultsAdvices])
    const HandleLookFor=()=>{
        const value = document.querySelector("#inputValue").value;
        console.log("palabra clas",value);
        setValueSearch(value);
    }
    return(
        <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}}>
            <h1 style={{color:"#595959",textAlign:"center"}}>Buscador de consejos</h1>
            <div style={{display:"flex"}}>
                <h2 style={{color:"#767676"}}>Palbra Clave: </h2>
                <Input id="inputValue" className="imputText" placeholder="Basic usage" />
            </div>
            <Button onClick={HandleLookFor} style={{margin:"50px"}} type="primary" icon={<SearchOutlined />}>Buscar</Button>
            <div style={{width:"600px"}}>
                <h1 style={{color:"#595959",textAlign:"center"}}>Resultados de la busqueda</h1>
                {
                    ResultsAdvices === null ? <div>En esta seccion se mostraran los resultados</div>:
                        ResultsAdvices ===false ? <div>No hay resultados de la búsqueda</div>:
                            ResultsAdvices.map((item,index)=>{
                            return(
                                <div key={index} style={{display:"flex",flexDirection:"column"}}>
                                    <div style={{display:"flex"}}>
                                        <div style={{display:"flex",flexDirection:"column"}}>
                                            <h3 className="defaultStylecenter" style={{color:"#767676",width:"400px"}}>{item.advice}</h3>
                                            <div className="separador">
                                            </div>
                                        </div>
                                        <Button onClick={()=>handleSetFavorites(item)} style={{margin:"auto"}} type="primary">Marcar como favorito</Button>
                                    </div>
                                </div>
                            );
                        })
                }
            </div>
        </div>
    );
}
export default LookForAdvice;