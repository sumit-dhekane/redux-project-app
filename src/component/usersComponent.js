import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { usersAction } from "../store/actions/usersAction"


const Users=()=>{

    const users=useSelector(store=>store.users)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(usersAction())
    },[])
    console.log(users)
    return(

        <div>
        {users.map((element)=>{
           return <div>
                       <h1>{element.name}</h1>
                       <h2>{element.username}</h2>
                       <h5>{element.address.zipcode}</h5>
                  </div> 
        })}
        </div>
    )
}
export default Users