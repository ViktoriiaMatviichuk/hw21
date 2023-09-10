

const authors =['Andriy', 'Makxum', 'Volodymyr']
const initialState = {
    authors,
    newPost: {
        author: authors[0],
        icon: '',
        text: ''
    },
    posts:[]

}



export const  reducer = (state= initialState, action ) => {
    switch (action.type) {
         case 'ADDSOMETEXT': {
            return {...state, newPost:{...state.newPost, text:action.payload}}
         }
         case 'ADDPHOTOLINK': {
            return {...state, newPost:{...state.newPost, icon:action.payload}}
         }
         case 'CHOOSEAUTHOR': {
            return {...state, newPost:{...state.newPost, author:action.payload} }
         }
         case 'CREATEPOST': {
            return {...state, posts: [...state.posts, state.newPost]}
         }
         default:
            return state;
    }
}