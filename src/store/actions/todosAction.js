  const todosAction=()=>dispatch=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response=>response.json())
    .then(json=>dispatch({type:'GET_TODOS',value:json}))
  } 
export {todosAction}