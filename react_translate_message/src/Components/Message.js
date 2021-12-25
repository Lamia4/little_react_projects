import React from 'react';
import { GlobalLanguage } from "../App";

function Message(optionLanguages) {

    const languageContext = React.useContext(GlobalLanguage);

    const message = {

        "de": "Hi Welt", 
        "en": "Hi world"

    }

    return (
        <div>
            <p>{ message[languageContext] }</p>
           
        </div>
    )
}

export default Message
