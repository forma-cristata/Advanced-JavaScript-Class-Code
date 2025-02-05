import {useLocation} from "react-router-dom";
import {Link} from "react-router";
import {useEffect} from "react";

export function Home(){
    useEffect(() => {
        document.title="Home";
    }, []);
    return(
        <div>
            <h1>[Company Website]</h1>
        </div>
    )
}

export function About(){
    useEffect(() => {
        document.title="About";
    }, []);
    return(
        <div>
            <h1>[About]</h1>


            <Link to="/contact" className={"btn btn-link"}>Get in contact with us!</Link>
        </div>
    )
}

export function Events(){
    useEffect(() => {
        document.title="Events";
    }, []);
    return(
        <div>
            <h1>[Events]</h1>
        </div>
    )
}

export function Products(){
    useEffect(() => {
        document.title="Products";
    }, []);
    return(
        <div>
            <h1>[Products]</h1>
        </div>
    )
}
export function Contact(){
    useEffect(() => {
        document.title="Contact";
    }, []);
    return(
        <div>
            <h1>[Contact]</h1>
        </div>
    )
}


export function Error404() {
    let location = useLocation();
    console.log(location);
    useEffect(() => {
        document.title="404 Error";
    }, []);

    return (
        <div>
            <h1>Error 404: Resource not found at {location.pathname}</h1>
        </div>
    )
}