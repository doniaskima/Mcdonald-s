import * as actionTypes from "../constants/actionTypes.js";
import produce from "immer";

const initialState = {
    items:[],   
    quantity:0,
    total:0
  }

export default function reducer(state=initialState, action){
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            return produce(state,(draft)=>{
                const item= action.payload;
                const exist= draft.items.find((x)=>x.id===item.id);
                if(exist){
                    exist.quantity++;
                }else{
                    draft.items.push(item);
                }
                draft.quantity++;
                draft.total+=item.price;        
            })
    }

}