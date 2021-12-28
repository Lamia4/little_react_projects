import React, {useState} from 'react'

function RandomList() {

    const [numbers, setNumbers] = useState([]);

    function getRandomNumList (e, randomNum){

        e.preventDefault();

        setNumbers([...numbers, randomNum])

    }

    return (
        <div>
            <button onClick={(e) => getRandomNumList(e, (Math.random()))}>Click me</button> 
            <ul>{numbers.map((number, i) => (<li key={i}>{number}</li>))}</ul>
        </div>
    )
}

export default RandomList
