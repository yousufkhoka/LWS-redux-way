


const fatchAsyncMiddleware = (store) => (next) =>async (action) =>{
    if(typeof action === 'function'){
       
        action(store.dispatch , store.getState)
        
        return ;
    
    }
  
   return next(action)
}

// const deleyMiddleware = (store) => (next) => (action) => {
//     if(action?.type === 'todoadded'){
//         console.log('deley')
//         setTimeout(() => next(action),2000)
//         return;
//     }
    
// }

module.exports = {fatchAsyncMiddleware}