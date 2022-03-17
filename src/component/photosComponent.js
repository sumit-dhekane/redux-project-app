import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { photosAction } from "../store/actions/photosAction";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';

  const  Photos=()=>{

    const photos=useSelector(store=>store.photos)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(photosAction())
    },[])
console.log(photos)
    return(
        <div>
            <center>
            <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">March</ListSubheader>
      </ImageListItem>
      {photos.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={`${item.url}?w=248&fit=crop&auto=format`}
            srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        
        </ImageListItem>
      ))}
    </ImageList>

            Photos componnent
            </center>
        </div>
    )
  }
  export default Photos;

