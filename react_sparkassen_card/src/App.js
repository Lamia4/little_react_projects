import React from "react"
import Card from "./components/Card"

function App() {

  const cardHolders = 
  [
    {

    bankName: "Berliner Sparkasse",
    iBan: "1234 5678 8765 4321",
    shortNumber: "1234",
    validDate: "12/2025",
    personName: "Lamia Gülsah Elmas"
    }
]

  return (
    <div className="App">
     {cardHolders.map((cardHolder, index) => <Card cardHolder={cardHolder} key={index}/>)}
    </div>
  );
}

export default App;
