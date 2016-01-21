import { createStore } from 'redux';
//we only export one function. Don't need import * as typed from '..'
/*the reducer is the counter function:
	counter() {
	var state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	var action = arguments[1];

	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
*/
import reducer from  '../reducers/redcuerCounter'; 

/*
console.log("reducerStore running");
console.log("the reducer:");
console.log(reducer);
*/
let store = createStore(reducer);
/*
console.log("----");
console.log("the store");

perfect!
store object with the essential dispacth, getState and subscribe functions
console.log(store);
*/
export default store;