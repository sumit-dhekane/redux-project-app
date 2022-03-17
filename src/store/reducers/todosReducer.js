function TodosReducer(todos=[],action){
switch(action.type){
    case'GET_TODOS':
    return[...action.value]

   }
   return todos
} 
export default TodosReducer;
