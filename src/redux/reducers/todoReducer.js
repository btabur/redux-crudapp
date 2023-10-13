import { ActionTypes } from "../actionTypes/todoTypes";



const initialState = {
    todos : [],
    isEmpty:true
}


const todoReducer = (state=initialState,action) => {
    switch(action.type) {
        case ActionTypes.ADD_TODO:
         //   [...state.todos,action.payload]  alttaki kod ile aynı işlemi yapar
          const newTodos =  state.todos.concat(action.payload)  // payload ı todos dizisine ekleme
          //store u güncelleme
            return {...state,todos:newTodos,isEmpty:false};
        case ActionTypes.DELETE_TODO: 
        //payload ile gelen veriyi  diziden çıkarma
          const filtered= state.todos.filter((item)=> item.id !== action.payload)
          //boş mu hesaplama
          const isEmpty = filtered.length === 0
            return {...state,todos:filtered,isEmpty:isEmpty};
        case ActionTypes.UPDATE_TODO:

            const updated= state.todos.map((item)=> 
                item.id===action.payload ? action.payload: item
                );
            return {...state,todos:updated}
            default :
            //kodlar
            return state;
    }
}

export default todoReducer;