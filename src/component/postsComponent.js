import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsAction } from "../store/actions/postsAction";



const Posts=()=>{

    const posts=useSelector(Store=>Store.posts)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(postsAction())
    },[])
  console.log(posts)
    return(
       <div>
             {posts.map((element)=>{
        return<div>
            <h1>{element.id}</h1>
            <h5>{element.title}</h5>
            <p>{element.body}</p>
        
        </div>
        })}
       </div>

    )
}
export default Posts;