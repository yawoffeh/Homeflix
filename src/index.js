import React from "react";
import ReactDOM from "react-dom";
import "./index.css"


function Contacts() {
    const phone = "+233-555-193-3257";
    const email = "yawoffeh@gmail.com";
    return  (
        <div class="grey">
            <span>Movies, series and videos are available at a cool price</span>
            <p>Contacts</p>
            <ul>
                <li>Phone: {phone}</li>
                <li>E-mail: {email}</li>
            </ul>
        </div>
    );
}

class App extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const url = this.props.url;
        return (
            <div>
            <h1 class="red">HomeFlix</h1>
            <p class="wid">Watch all your movies and series here</p>
            <a href={url} class="red">Try one month free...</a>
            <Contacts />
            </div>
        );
    }
}


ReactDOM.render(
    <App url="#"/>,
    document.getElementById("root")
);
