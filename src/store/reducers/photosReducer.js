function PhotosReducer(photos=[],action){

    switch(action.type){

        case'GET_PHOTOS':
      return[...action.value]
    }
    return photos
}
export default PhotosReducer