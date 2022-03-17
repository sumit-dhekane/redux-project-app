import {createStore,combineReducers,applyMiddleware} from 'redux'
import AlbumsReducer from './reducers/albumsReducer'
import thunk from 'redux-thunk'
import PhotosReducer from './reducers/photosReducer'
import CommentsReducer from './reducers/commentsReducer'
import UsersReducer from './reducers/usersReducer'
import TodosReducer from './reducers/todosReducer'
import PostsReducer from './reducers/postsReducer'



const reducers=combineReducers({albums:AlbumsReducer,posts:PostsReducer,comments:CommentsReducer,
                                 photos:PhotosReducer,users:UsersReducer,todos:TodosReducer})
const middleware=applyMiddleware(thunk)
const Store= createStore(reducers,middleware)


export default Store;