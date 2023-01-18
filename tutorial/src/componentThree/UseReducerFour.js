import React,{useReducer,useEffect} from 'react'
import axios from 'axios'


const initialValue = {
    loading: true,
    post: {},
    error: ''
}
const reducer = (state,action) => {
    switch(action.type){
        case 'FETCH_SUCCESS':
           return {
            ... state,
            loading: false,
            post: action.data,
            error: ''
           }
        case 'FETCH_ERROR':
            return {
                ...state,
                loading: false,
                post : {},
                error: 'something went wrong'
            }
    }
}
export default function UseReducerFour() {
    const [state, dispatch] = useReducer(reducer,initialValue)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/15')
        .then(res=>{
            dispatch({type:'FETCH_SUCCESS', data:res.data })
        })
        .catch(()=>{
            dispatch({type: 'FETCH_ERROR'})
        })
    },[])
  return (
    <div>
        {state.loading ? 'Loading': state.post.title}
        {state.error? state.error : null}
    </div>
  )
}
