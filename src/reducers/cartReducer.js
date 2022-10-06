import * as actionTypes from "../constants/actionTypes.js";
import produce from "immer";

const initialState = {
  items:[],  // { id , name , price , picture , quantity }
  quantity:0,
  total:0
}

export default function reducer(state = initialState , action){
  switch(action.type)
  {
    case actionTypes.ADD_TO_CART:
      return produce(state , (draft)=>{
        const item = action.payload;
        const exist = draft.items.find((x)=> x.id === item.id);

        if(exist){
          exist.quantity++;
        }
        else{
          draft.items.push(item);
        }
        draft.quantity++;
        draft.total+=item.price;
      })
    case actionTypes.REMOVE_FROM_CART:
      return produce(state , (draft)=>{
        const id = action.payload;

        let item = draft.items.find((x)=> x.id === id);

        draft.items = draft.items.filter((x) => x.id !== id);
        draft.quantity-= item.quantity;
        draft.total-= item.quantity * item.price;
      })
    case actionTypes.INCREASE_QUANTITY:
      return produce(state , (draft)=>{
        const id = action.payload;

        draft.items.forEach((item)=>{
          if(item.id === id)
          {
            item.quantity++;
            draft.quantity++;
            draft.total += item.price;
          }
        })
      })
    case actionTypes.DECREASE_QUANTITY:
      return produce(state , (draft)=>{
        const id = action.payload;

        draft.items.forEach((item)=>{
          if(item.id === id)
          {
            if(item.quantity !== 1)
            {
              item.quantity--;
              draft.quantity--;
              draft.total -= item.price; 
            }
          }
        })
      })
    default:
      return state;
  }
}