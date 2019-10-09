export const createForm=(form)=>{
    return(dispath, getState,{getFirebase,getFirestore})=>{
        //make a async call to database
        const firestore=getFirestore();
        firestore.collection('forms').add({
            ...form,
            createdAt:new Date()
        }).then(()=>{
            dispath({type:'CREATE_FORM',form})
            }).catch((err)=>{
                dispath({type:'CREATE_FORM_ERROR',err});
            })
    }
};