const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");

const initialState = {
    loading: false,
    posts:[],
    error:''
}

const fetchPosts = createAsyncThunk('post/fetchPosts' , async () => {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    const posts = await response.json();

    return posts;
});


const asyncSlice = createSlice({
    name:'post',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending , (state ,action) => {
            state.loading = true,
            error = ''
        })

        builder.addCase(fetchPosts.fulfilled , (state ,action) => {
            state.loading = false,
            state.posts = action.posts
            state.error = ''
        })

        builder.addCase(fetchPosts.rejected , (state ,action) => {
            state.loading = false,
            state.error = action.error.message
            state.posts = []
            
        })  
     
        
      

    }

})

module.exports = asyncSlice.reducer;
module.exports.fetchPosts = fetchPosts;