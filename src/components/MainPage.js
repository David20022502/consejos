import AdviceAleatory from "./AdviceAleatory";
import {useState} from "react";
import FavoritesAdvice from './FavoriteAdvice.js';
import LookForAdvice from "./LookForAdvice";
const MainPage=()=>{
    const [FavoritesAdvices,setFavoritesAdvices]=useState([]);
    const handleSetFavorites=(Advice)=>{
            setFavoritesAdvices(()=>[...FavoritesAdvices,Advice]);
    }
    const handleDeleteFavorit=(Advice)=>{
        const AdvicesTemporary = FavoritesAdvices.filter((item)=> item.id !==Advice.id);
        setFavoritesAdvices(AdvicesTemporary);
    }
    return (
        <div>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <AdviceAleatory handleSetFavorites={handleSetFavorites}/>
                <FavoritesAdvice FavoritesAdvices={FavoritesAdvices} handleDeleteFavorit={handleDeleteFavorit}/>
            </div>
           <LookForAdvice handleSetFavorites={handleSetFavorites}/>
        </div>
    );
}
export default MainPage;