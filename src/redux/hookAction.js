export function updateHook(newNumber){
    return{
        type: 'update',
        payload:{
            num: newNumber
        }
    }
}