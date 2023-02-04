
import './App.css';
import Layout from './components/layout';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from './pages/about/about';
import Contacts from './pages/contact/contact';
import Sections from './pages/sections/sections';
import PageNotFound from './pages/page_not_found/page_not_found';
import Header from './components/header/header';
import { useEffect, useState } from 'react';
import DetailsView from './pages/details_view_card/detailsView';
import Footer from './components/footer/footer';
import Testimonial from './pages/textimonial/testimonial';
import axios from 'axios';
import AddService from './pages/service/addService';
import EditService from './pages/service/editService';
import ServiceList from './pages/service/serviceList';
import Profile from './pages/profile/profile';
import AuthForm from './pages/profile/authForm';
import UsersList from './pages/profile/admin/usersList';
import { getToken } from './storage/storage';


function App() {
  const [search, setSearch] = useState([])

  const [servicesData, setServicesData] = useState([]);

  const [userAuth, setUserAuth] = useState({
    message:"",
    success: false,
    user:null
  })

  const [notificationTooktip, setNotificationTooltip] = useState({
    success: false,
    loading: false,
    mssg: null
})


  useEffect(() => {
    dataFetch()
    userfetch()
  }, [])

  async function userfetch(){
    
    try {
      axios.get("https://parlour-service-server.vercel.app/logged/check", {
      // axios.get("http://localhost:4444/logged/check", {

        headers:{ 
          "Content-Type":"application/json"
        },
        withCredentials: true

      }).then(res=>{
        setUserAuth(res.data)
      }).catch(er=>{
        console.log(er)
      })
    } catch (error) {
      
    }
  }

  async function dataFetch() {
    setNotificationTooltip({
      ...notificationTooktip,
      loading: true
  })
    try {
      axios.get("https://parlour-service-server.vercel.app/admin/services").then(res => {
        if(res.data.success){
          setNotificationTooltip({
            ...notificationTooktip,
            success: true,
            loading: false,
            mssg: res.data.message
        })
        setServicesData(res.data.services)
        setTimeout(() => {
            setNotificationTooltip({
                ...notificationTooktip,
                success: false,
                mssg: null
            })
        }, 3000)
        }
      }).catch(er=>{
        setNotificationTooltip({
          ...notificationTooktip,
          success: false,
          loading: false,
          mssg: er.response.data.message
      })
      setTimeout(() => {
          setNotificationTooltip({
              ...notificationTooktip,
              mssg: null
          })
      }, 3000)
      })
    } catch (error) {
      console.log(error)
    }

  }

  const logoutFun = async () => {
    try {
      axios.get("https://parlour-service-server.vercel.app/user/logout/me", {
      // axios.get("http://localhost:4444/user/logout/me", {

          headers: { 
              "Content-Type": "application/json",
               Accept : "application/json"
              },
          mode : "cors",
          withCredentials : true,
          credentials : "include"
      }).then(res => {
          if (res.data.success) {

              // navigate("/")
          }

      }).catch(er => {
          console.log(er)
      })
  } catch (error) {

  }
  }


  return (
    <div className="App">
      <BrowserRouter>
        <Header searchData={setSearch} userAuth={userAuth} logoutFun={logoutFun}/>


        {/* <Layout/> */}
        <Routes>
        {servicesData.length > 0 &&
          <Route exact path='/' element={<Layout servicesData={servicesData} search={search} />} />
        }
          <Route exact path='/view/:id' element={<DetailsView />} />

          <Route path='/testimonial' element={<Testimonial />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contacts />} />
          {/* <Route path='/section' element={<Sections  search={search}/>} /> */}
          {servicesData.length > 0 &&
            <Route path='/section' element={<Sections search={search} servicesData={servicesData} />} />
          }

          {userAuth.success ? <>
          <Route path='/profile' element={<Profile userAuth={userAuth}/>} />
          <Route path='/users' element={<UsersList/>} />

          <Route path='/service/add' element={<AddService/>}/>
          <Route path='/edit/:id' element={<EditService/>}/>
          <Route path='/services' element={<ServiceList/>}/>
          </> : <> <Route path='/user' element={<AuthForm/>} /></>
        }



          <Route path='*' element={<PageNotFound />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
