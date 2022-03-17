const postsAction=()=>dispatch=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then(json=>dispatch({type:"GET_POSTS",value:json}))
}
export {postsAction}