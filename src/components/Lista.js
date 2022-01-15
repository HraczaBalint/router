import React from "react";
import { Link } from "react-router-dom";


export default class Lista extends React.Component{

    render(){
        return(
            <>
            <Link to="user"><img src='https://clipartpngfree.com/thumbnail/brands/com_user_profile_computer_icons_thumb.png' alt='kep'/></Link>
            <Link to="other">Egyéb</Link>

            <ul>
                <li>elem1</li>
                <li>{ this.props.tartalom }</li>
            </ul>
            <p>{ this.props.children }</p>
            </>
        )
    }
}