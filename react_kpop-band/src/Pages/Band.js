import React from 'react';
import { useParams } from "react-router-dom";
import BTS from "../Images/BTS.jpg";
import Blackpink from "../Images/blackpink4.jpg";
import { Button, Card, CardTitle, CardText } from "reactstrap";
import { useHistory } from 'react-router';
import Izone from "../Images/Izone.jpg";
import "./Band.css"


function Band() {

    const { bandName } = useParams ();
    
    const history = useHistory();

    const bands = [
        { 
            id: 1,
            name: "BTS",
            description: "BTS (Korean: 방탄소년단; RR: Bangtan Sonyeondan), also known as the Bangtan Boys, is a seven-member South Korean boy band that began formation in 2010 and debuted in 2013 under Big Hit Entertainment. The septet—composed of Jin, Suga, J-Hope, RM, Jimin, V, and Jungkook—co-writes and co-produces much of their own output.",
            image: BTS

        },
        { 
            id: 2,
            name: "Blackpink",
            description: "Blackpink (Korean: 블랙핑크; commonly stylized as BLACKPINK or BLΛƆKPIИK) is a South Korean girl group formed by YG Entertainment, consisting of members Jisoo, Jennie, Rosé, and Lisa. ... They are also the first music group and Korean act to have four music videos each accumulating one billion views on YouTube.",
            image: Blackpink

        },
        { 
            id: 3,
            name: "Izone",
            description: "BTS (Korean: 방탄소년단; RR: Bangtan Sonyeondan), also known as the Bangtan Boys, is a seven-member South Korean boy band that began formation in 2010 and debuted in 2013 under Big Hit Entertainment. The septet—composed of Jin, Suga, J-Hope, RM, Jimin, V, and Jungkook—co-writes and co-produces much of their own output.",
            image: Izone

        }
    ];

    const currentBand = bands.find( band => band.name.toLowerCase() === bandName);

 

    return (
        <div>
            <Card body className="Description mx-auto">
            <CardTitle tag="h5">{currentBand.name}</CardTitle>
            <CardText>{currentBand.description}</CardText>
            <img src={ currentBand.image } ></img>
            
            <Button outline color="secondary" onClick= { () => history.push("/") }>Back to Start</Button>{' '}
            {   
                currentBand.id < bands.length && <Button outline color="secondary" onClick= { () => history.push(`/${bands[currentBand.id].name.toLowerCase()}`)}>Go to the next Kpop group</Button>
            }
       
            </Card>
        </div>
    )
}

export default Band
