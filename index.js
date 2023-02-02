/* Three core concepts in redux
 let us use a simple real world example of a cake shop
 .The cake shop have some entities
     .The shop-which stores the cake on the shelf
     .The shopkeeper-At the front of the store
     .The ccustomer-at tthe entrance of the shop
 .The Activities
     .Customer-buy cake(tells the shopkeeper of the intetion to buy a cake)
    .The shopkeeper-removes the cake from the store(The shopkeeper will look at the shellf
        to make sure the cake is available) if yes they will deduct the cake from
        the shelf box it for you print the receipt to keep track of the sale
        and hand over the cake to you
Cake shop scenario   redux      purpose
     .shop            .store      .holds the states of your application
    .Intetion to buy  .action     .Describes what happened
    cake
    .Shopkeeper        .Reducer    .Ties the store and actions together
    */

const redux=require('redux')
const reduxlogger=require('redux-logger')

const createStore=redux.createStore
const combineReducer=redux.combineReducers
const applymiddleware=redux.applyMiddleware
const logger=reduxlogger.createLogger()


const BUY_CAKE='BUY_CAKE'
const BUY_ICECREAM='BUY_ICECREAM'
/*The state o the application is stored in object tree within
a single store- These helps us maintain our state in single object managed
by the redux store 
* The only way to change a state is to emit an action,an object describing
what happened-in code these is represented by a simple object with a type
property
* To specify how the state tree is transformed by actions you have to use pure reducers*/
//An action creator is a function which return an action(which is a simple javascript object
// which returns an action)
function buy_cake(){//Action creator
    return{
        type:BUY_CAKE,//action
        info:'First redux Action'
        
    }
}
function buy_icecream(){//Action creator
    return{
        type:BUY_ICECREAM,//action
        info:'second redux Action'
        
    }
}
// (prevState,action) => newState
const cakeState ={
    numOfCake:10,

}
const iceState ={
    numofIceCream:20,
}
// reducer-(initialState,action)=>newState
const cakeReducer = (state=cakeState,action)=>{
    switch(action.type){
        case BUY_CAKE :return{
            ...state,
            numOfCake:state.numOfCake-1
        }
        default: return state

    }
}
const iceReducer = (state=iceState,action)=>{
    switch(action.type){
        case BUY_ICECREAM :return{
            ...state,
            numofIceCream:state.numofIceCream-1
        }
        default: return state

    }
}
/*  Responsibilites of store
    we should have ons store for the entire application
    1.Holds the applicatiob state
    2.Allow access to the state via getState()-these means it allow use to get
    access to the state of our application
    3.Allow state to be updated via dispatch(action)-these means the dispatch function
    only accepts action as the parameter
    4.Allow us to register lister to our application using subscribe(listener)
    it takes in a function as its parameter which is updated any time the state
    changes
    5.Handles unregistering of listener via the function returned by the subscribe(listener) 
    */
const rootReducer=combineReducer({
    cake:cakeReducer,
    ice:iceReducer
})
const store = createStore(rootReducer,applymiddleware(logger))
console.log('Initial state:',store.getState())
const unsubscribe=store.subscribe(()=>{})
store.dispatch(buy_cake())
store.dispatch(buy_cake())
store.dispatch(buy_cake())
store.dispatch(buy_icecream())
store.dispatch(buy_icecream())
store.dispatch(buy_icecream())
unsubscribe()
//https://www.youtube.com/watch?v=YAevAj6X6XU&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=7
//how to create a combinereducer in react-redux?
