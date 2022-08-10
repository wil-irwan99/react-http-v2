export const loginService = ({doPost}) => {
    const login = async (username, pass) => {
        try {
            return await doPost({
                url: '/login',
                data: {
                    username, pass
                }
            })
        } catch (e) {
            throw e
        }
    }
    return {login}
}