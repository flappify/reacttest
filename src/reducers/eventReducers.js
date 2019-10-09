const initState={
    events:[
        {id:'1',event:'Shopping',date:'10-10-2019'},
        {id:'2',event:'Donating',date:'01-08-2019'},
        {id:'3',event:'Promotion',date:'15-04-2029'},
        {id:'4',event:'Marketing',date:'05-10-2020'},
    ]
}

const eventReducer=(state=initState,action)=>{
    switch(action.type){
        case 'UPDATE_EVENT':
            return state;
        case 'CREATE_EVENT':
            return{
                ...state,
                applyError:'Event Created'
            }
        case 'CREATE_EVENT_ERROR':
            return{
                ...state,
                applyError:'Event Creation Failed'
            }
        default:
            return state;
    }
}

export default eventReducer;