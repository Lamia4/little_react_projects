import React from "react";
import './App.css';
import LanguageForm from "./Components/LanguageForm";
import Message from "./Components/Message"

const GlobalLanguage = React.createContext();


function App() {


  const optionLanguages = {

    german: "de",
    english: "en"

  }


  const [language, setLanguage] = React.useState(optionLanguages.german);

  return (
    <div className="App">
      <LanguageForm optionLanguages = { optionLanguages } setLanguage= { setLanguage } /> 

      <GlobalLanguage.Provider value = { language }>

        <Message/>
      </GlobalLanguage.Provider>
    </div>
  );
}

export default App;
export { GlobalLanguage }