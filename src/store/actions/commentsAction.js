

const commentsAction=()=>dispatch=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response=>response.json())
    .then(json=>dispatch({type:'GET_COMMENTS',value:json}))
}
export {commentsAction}