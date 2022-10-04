import * as actionTypes from "../constants/actionTypes.js";
import produce from "immer";

const initialState = {
    items:[],   
    quantity:0,
    total:0
  }