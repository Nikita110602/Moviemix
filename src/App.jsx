import { useEffect, useState } from 'react'
import { fetchDataFromApi } from './utils/api'
import { useDispatch, useSelector } from 'react-redux';
import {getApiConfiguration} from './store/homeSlice'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/home/Home';
import PageNotFound from './pages/404/PageNotFound';
import Header from './components\'/header/Header';
import Footer from './components\'/footer/Footer';


function App() {
  const dispatch =useDispatch();
  const url=useSelector((state)=> state.home.url)
  console.log(url.page)
  
  
useEffect(()=>{
  fetchApiConfig();
  console.log(43);
},[])
const fetchApiConfig=()=>{
  fetchDataFromApi("/configuration").then((res)=>{
    // console.log(res);
    const url = {
      backdrop: res.images.secure_base_url + "original",
      poster: res.images.secure_base_url + "original",
      profile: res.images.secure_base_url + "original",
  };
    dispatch(getApiConfiguration(url))
  })
}
  return (
    <BrowserRouter>
    <Header></Header>

  <Routes>
    <Route path ='/' element ={<Home></Home>}></Route>
    <Route path ='*' element ={<PageNotFound/>}></Route>
  </Routes>
  <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
