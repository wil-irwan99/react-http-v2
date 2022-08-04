import { MENU_ADD, MENU_DELETE } from "../../app/constants"

const menuInitialState = {
    menus : [{id: 'M001', nama: 'Nasi Goreng', harga: 10000, cat: 'F'}, {id: 'M002', nama: 'Nasi Uduk', harga: 12000, cat: 'F'}, {id :'M003', nama:'Nasi Bakar', harga: 15000, cat: 'F'}],
    statusChange : true
}

export function menuReducer(state = menuInitialState, action){
    switch (action.type) {
        case MENU_ADD :
            return Object.assign({}, state, {
                menus : [...state.menus, action.payload.menu],
                statusChange: true
            })

        case MENU_DELETE :
                let dbMenu = state.menus

                for(let i = 0; i < dbMenu.length; i++){
                    if (action.payload.id === dbMenu[i].id){
                        dbMenu.splice(i,1);
                        return Object.assign({}, state, {
                            menus : dbMenu,
                            statusChange: true
                        })
                    }
                }

                return Object.assign({}, state, {
                    statusChange: false
                })

        default :
            return state
    }
}