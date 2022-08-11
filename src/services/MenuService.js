export const menuService = ({doGet, doPost}) => {
    const addMenu = async (namaMenu) => {
        try {
            return await doPost({
                url: '/menu/add',
                data: {
                    menuName: namaMenu
                }
            })
        } catch (e) {
            throw e
        }
    }

    const getMenuById = async (id) => {
        try {
            return await doGet({url: '/menu/?id=' + `${id}`})
        } catch (e) {
            throw e
        }
    }

    const getMenuPriceById = async (id) => {
        try {
            return await doGet({url: '/menu/price/?id=' + `${id}`})
        } catch (e) {
            throw e
        }
    }


    return {addMenu, getMenuById, getMenuPriceById}
}