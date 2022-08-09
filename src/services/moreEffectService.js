// const moreEffectService = () => {
//     const doPrint = (id) => {
//         return ' response ' + id;
//     }
//     return {
//         doPrint
//     }
// }

const moreEffectService = () => {
    const doPrint = (id) => {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                if (id < 0 || id > 10){
                    reject(new Error ('Must between 0 and 10'))
                } else {
                    resolve(`Print ${id}`)
                }
            }, 1000)
        })
    }
    return {
        doPrint
    }
}

export default moreEffectService;