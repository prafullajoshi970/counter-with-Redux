
var initialCount=0
const myReducer=(StoreData=initialCount,action)=>{

    if(action.type==="increment"){
      return initialCount+=1
    }
    else if(action.type==="decrement"){
        return initialCount-=1
      }
      else if(action.type==="reset"){
        return initialCount*0
      }
    return StoreData;


}
export default myReducer;