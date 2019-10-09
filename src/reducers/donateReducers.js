const initState={
    donations:[
        {id:'1',name:'Rashid',amt:'10Lakh'},
        {id:'2',name:'Zohaib',amt:'Infinity'},
        {id:'3',name:'Samir',amt:'Youtube ka paisa'},
        {id:'4',name:'Saahil',amt:'Not Interested'},
    ]
}

const donateReducer=(state=initState,action)=>{
    return state;
}

export default donateReducer;