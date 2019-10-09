export const createEvent=(event)=>{
    return(dispath, getState,{getFirebase,getFirestore})=>{
        //make a async call to database
        const firestore=getFirestore();
        firestore.collection('events').add({
            ...event,
            createdAt:new Date()
        }).then(()=>{
            dispath({type:'CREATE_EVENT',event})
            }).catch((err)=>{
                dispath({type:'CREATE_EVENT_ERROR',err});
            })
    }
};