import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentsAction } from "../store/actions/commentsAction";



const Comments=()=>{

    const comments=useSelector(store=>store.comments)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(commentsAction())
    },[])
console.log(comments)

    return(
        <div>
        {comments.map((element)=>{
        return<div>
            <h1>{element.name}</h1>
            <h5>{element.email}</h5>
            <p>{element.body}</p>
        </div>
        })}
        </div>
    )
}
export default Comments;