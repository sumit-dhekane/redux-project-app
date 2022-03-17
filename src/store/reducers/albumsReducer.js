   
function AlbumsReducer(albums=[],action){

    switch(action.type){
     case 'GET_ALBUMS':
     return[...action.value]


    }
    return albums
}
export default AlbumsReducer;