const usersAction=()=>dispatch=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(json=>dispatch({type:'GET_USERS',value:json}))
}
export{usersAction}