export const jsonPlaceholderService = ({doGet, doPost}) => {
    const getPostById = async (id) => {
        try {
            return await doGet({url: '/posts/' + id})
        } catch (e) {
            throw e
        }
    }

    const createPost = async (title, body) => {
        try {
            return await doPost({
                url: '/posts',
                data: {
                    title, body
                }
            })
        } catch (e) {
            throw e
        }
    }
    return {getPostById, createPost}
}