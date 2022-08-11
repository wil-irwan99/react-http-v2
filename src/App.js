import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios";
import JsonPlaceHolderView from './features/JsonPlaceHolder/JsonPlaceHolderView';
import ProductView from './features/Product/ProductView';
import LoginView from './features/Login/LoginView';
import MenuView from './features/Menu/MenuView';

// const client = axios.create({
//   baseURL : 'https://jsonplaceholder.typicode.com'

// })

function App() {
  
  // const [posts, setPosts] = useState({})
  // const [isLoading, setLoading] = useState(false)

  // const getPostById = async () => {
  //   setLoading(true)
  //   try {
  //     const response = await client.get('/posts/1');
  //     setPosts(response.data)
  //     } catch (e){
  //       console.log(e)
  //     } finally {
  //       setLoading(false)
  //     }
  // }

  // const createPost = async () => {
  //   setLoading(true)
  //   try{
  //     const response = await client.post('/posts', {
  //     title: "Hello World",
  //     body: "Ini baru"
  //   })
  //   setPosts(response.data)
  //   } catch (e){
  //   } finally {
  //     setLoading(false)
  //   }
  // }


  // useEffect(() => {
  //   getPostById();
  // }, [])

  // return (
  //   <div>
  //     <JsonPlaceHolderView/>
  //   </div>
  // );

  // return (
  //   <div>
  //     <ProductView/>
  //   </div>
  // );

  // return(
  //   <>
  //     <LoginView/>
  //   </>
  // )

  return (
    <div>
      <MenuView/>
    </div>
  );


}

export default App;
