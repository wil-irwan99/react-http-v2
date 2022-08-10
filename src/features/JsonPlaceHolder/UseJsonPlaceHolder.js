import {useDeps} from "../../shared/DepContext"
import React, {useState, useEffect} from 'react';

const useJsonPlaceHolder = () => {
    const {jsonPlaceholderService} = useDeps();
    const [isLoading, setLoading] = useState(false);
    const [posts, setPosts] = useState({});

    useEffect(() => {
        onGetPostById()
    }, []);

    const onGetPostById = async () => {
        setLoading(true);
        try {
            const response = await jsonPlaceholderService.getPostById('1');
            console.log(response);
            setPosts(response)
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    const onCreatePost = async () => {
        setLoading(true);
        try {
            const response = await jsonPlaceholderService.createPost('Hello World', 'Ini Baru');
            setPosts(response);
        } catch (e) {
        } finally {
            setLoading(false);
        }
    }
    return {
        isLoading, posts, onCreatePost
    }
}
export default useJsonPlaceHolder;