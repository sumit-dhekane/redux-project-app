import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AlbumsAction } from "../store/actions/albumsAction";



const Albums= ()=>{

const albums=useSelector(x=>x.albums)
const dispatch=useDispatch()

useEffect(()=>{
    dispatch(AlbumsAction())
},[])
console.log(albums)
return(
    <div>
        {albums.map((element,index)=>{
        return <h1>{element.title}</h1>
        })}
    </div>

)

}
export default Albums;
