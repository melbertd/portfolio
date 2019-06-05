import React from "react"
import TypeIt from 'typeit';

class Banner extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount () {
        var doc = document.getElementById("tagline");
        new TypeIt(doc)
            .type("Hi!, I'm Melbrt")
            .pause(300)
            .delete(2)
            .pause(250)
            .type('ert')
            .go();
    }

    render(){
        return (  
            <div>
                <section className='banner'>
                    <p id="tagline" className="tag-line"></p>
                </section>
            </div>          
        )
    }
}


export default Banner