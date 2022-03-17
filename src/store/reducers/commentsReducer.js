
function CommentsReducer(comments=[],action){

   switch(action.type){
    
    case'GET_COMMENTS':

    return [...action.value]
     
   }
   return comments

   

}
export default CommentsReducer;