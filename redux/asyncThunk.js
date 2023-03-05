const { createStore, applyMiddleware } = require("@reduxjs/toolkit")
const   fetch  = require("node-fetch")
const  thunk = require("redux-thunk")

const fetchPostsRequast = () => {
    return {
        type:'posts/reduast'
    }
}

const fetchPostsSuccested = (posts) => {
    return {
        type:'posts/succested',
        payload:posts
    }
}
const fetchPostsFiled = (err) => {
    return {
        type:'posts/filed',
        payload:err
    }
}

//  initial state
const initialState = {
    loading:false,
    posts:[],
    error:''
}

//  reducer 

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'posts/reduast':
            return{
                ...state,
                loading:true

            }
        case  'posts/succested' :     
                return {
                    ...state,
                    loading:false,
                    posts:action.payload,
                    error:''
                }
         case  'posts/filed' :     
                return {
                    ...state,
                    loading:false,
                    posts:[],
                    error:action.payload.massage
                }
    
        default:
            return state;
    }
} 

//  async thunk

const fetchPosts = () => {
    return async (dispatch) => {
        console.log('hello')
        dispatch(fetchPostsRequast())
        try{
            const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
            const posts = await res.json()
            dispatch(fetchPostsSuccested(posts))
        } catch(err){
            dispatch(fetchPostsFiled(err))
        }
           
    }
}
//  store 
const store = createStore(reducer,applyMiddleware(thunk.default))

//  subscribe 

store.subscribe(() => {
    console.log(store.getState())
})

//  dispatch

store.dispatch(fetchPosts())
console.log('world')