import React from 'react'
import Banner from '../../components/Home/Banner'
import Footer from '../../components/Home/Footer'
import Info from '../../components/Home/Info'
import Navbar from '../../components/Home/Navbar'
import Organise from '../../components/Home/Organise'
import Register from '../../components/Home/Register'

class Home extends React.Component{


    render(){
        
        return(
            <div className="container">
                <Navbar/>
                <Banner/>
                <Info/>
                <Register/>
                <Organise/>
                <Footer/>
            </div>
        )
    }
}

export default Home