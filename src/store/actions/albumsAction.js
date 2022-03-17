  
   const AlbumsAction=()=>dispatch=>{
      fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response=>response.json())
      .then(json=>dispatch({type:'GET_ALBUMS',value:json}))
  }

  export {AlbumsAction}