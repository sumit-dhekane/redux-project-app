
function PostsReducer(posts=[],action){
    console.warn(action.type);
    switch(action.type){
        case'GET_POSTS':
    console.warn(action.value)
        return [...action.value]
        }
    return posts
}
export default PostsReducer;