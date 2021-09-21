import React from 'react';
import '../css/FavoriteAdvice.css';
import {Button} from "antd";
const FavoriteAdvice=({FavoritesAdvices,handleDeleteFavorit})=>{
    return(
        <div style={{width:"600px"}}>
            <h1 style={{color:"#595959",textAlign:"center"}}>Consejos favoritos</h1>
            {
                FavoritesAdvices ===null ? <div>No hay consejos Favoritos</div>:
                    FavoritesAdvices.map((item,index)=>{
                        return(
                            <div key={index} style={{display:"flex",flexDirection:"column"}}>
                                <div style={{display:"flex"}}>
                                    <div style={{display:"flex",flexDirection:"column"}}>
                                        <h3 className="defaultStylecenter" style={{color:"#767676",width:"400px"}}>{item.advice}</h3>
                                        <div className="separador">
                                        </div>
                                    </div>
                                    <Button onClick={()=>handleDeleteFavorit(item)} style={{margin:"auto"}} type="primary">Quitar de la lista</Button>
                                </div>
                            </div>
                        );
                        })

            }
        </div>
    );
}
export default FavoriteAdvice;