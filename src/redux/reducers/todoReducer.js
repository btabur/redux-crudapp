


const initialState = {
    todos : [],
    isEmpty:true
}


const todoReducer = (state=initialState,action) => {
    switch(action.type) {
        case "ADD_TODO":
         //   [...state.todos,action.payload]  alttaki kod ile aynı işlemi yapar
          const newTodos =  state.todos.concat(action.payload)  // payload ı todos dizisine ekleme
          //store u güncelleme
            return {...state,todos:newTodos,isEmpty:false};
        case "DELETE_TODO": 
            //kodlar
            return '';
        default :
            //kodlar
            return state;
    }
}

export default todoReducer;