const reducer = (state={count:0},action) => {
        if(action.type== 'more'){
            return{
                count:state.count +1
            }
        }
        else if(action.type== 'less' ){
            return{
                count:state.count -1
            }  
        }
}

export default reducer