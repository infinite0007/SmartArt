require("../../stylesheets/_all.scss");
import React from "react"
import {HashRouter, Switch, Route} from "react-router-dom";

import NavigationBar from "../components/NavigationBar"
import Footer from "../components/Footer";

import Home from "./Home"
import AboutApp from "./AboutApp"
import InsertPicture from "./InsertPicture"
import Art from "./Art"
import PageNotFound from "./PageNotFound";
;

// setzt für bestimmte URLs die Pages fest, die dann aufgerufen werden sollen
// Switch sorgt dafür, dass wenn ein Fall zutrifft, dieser auch genommen wird, wenn am Ende angelangt ohne Treffer
// PrivateRoute gekennzeichnete Routen können nicht ohne bereits eingeloggt sein betreten werden
// wird man zu PageNotFound aufgerufen. -> Somit wird man egal was man eingibt immer richtig weitergeleitet
export default class Layout extends React.Component {
    render() {
        return (  
            <HashRouter>  
                <div>
                    <NavigationBar location={location}/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/home" component={Home}/>
                        <Route exact path="/app" component={AboutApp}/>
                        <Route exact path="/insertpicture" component={InsertPicture}/>
                        <Route exact path="/art" component={Art}/>
                        <Route component={PageNotFound}/>
                    </Switch>
                    <Footer/>
                </div>
            </HashRouter>
        );
    }
}