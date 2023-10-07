import {useState, useEffect} from "react";
import "./style.css";
import List from "./list";
import Form from "./form";

function Contacts(){

const [contacts, setContacts] = useState([
    {
        fullname:"Emre",
        phone_number:123045

    },
    {
        fullname:"Oscar",
        phone_number:187645

    }
]);

    useEffect(() => {

        console.log(contacts);

    }, [contacts]);

    return(
        <div id="container">
            <h1>Telephone Directory</h1>
            <List contacts= {contacts}/>
            <Form addContact = {setContacts} contacts= {contacts}/>
        </div>
    );
}

export default Contacts;