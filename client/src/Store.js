import { combineReducers,createStore } from 'redux';

const first={
    name:"",
    id:0
}

const addusername=(state=first,action)=>
{
    switch(action.type)
    {
    case "Add":
        state.name=action.value1;
        state.id=action.value2;
        return state;
    default:
        return state;
    }
}
const mainredux=combineReducers({
    add:addusername
});
const Store = createStore(mainredux,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default Store;