const photosAction=()=>dispatch=>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response=>response.json())
    .then(json=>dispatch({type:'GET_PHOTOS',value:json}))
}
export {photosAction}