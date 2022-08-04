import { MENU_ADD, MENU_DELETE } from '../../app/constants';

export function addMenuAction(newMenu) {
    return {
        type : MENU_ADD,
        payload:{
            menu : newMenu
        }
    }
}

export function deleteMenuAction(menuID) {
    return {
        type : MENU_DELETE,
        payload:{
            id : menuID
        }
    }
}