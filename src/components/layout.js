import React from "react"

//import Nav from './nav';
import Banner from './banner';
import Footer from './footer';
import Content from './content';
import Skills from './skills';
import Info from './info';

import '../styles/bootstrap.min.css';
import './_layout.css';

class Layout extends React.Component{

    render(){    
        return(
            <div>
                <div className="container">
                <Banner />  
                <Info />
                <Skills />
                <Content />
                </div>
                <Footer />
            </div>
        )
    }
}


export default Layout