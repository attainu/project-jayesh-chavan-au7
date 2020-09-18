import React from 'react'
import Banner from '../../components/Home/Banner/Banner'
import Footer from '../../components/Home/Footer/Footer'
import Info from '../../components/Home/Info/Info'
import Navbar from '../../components/Home/Navbar/Navbar'
import Organise from '../../components/Home/Organise/Organise'
import Register from '../../components/Home/Register/Register'

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