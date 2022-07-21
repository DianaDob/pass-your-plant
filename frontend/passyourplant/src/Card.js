import './Card.css';
import { Link } from "react-router-dom";
import plantImage from "./test_plant.jpg";

export function Card(props) {

    return (
        <div className="plantcard">
            <img src={ require(`./${props.plant.photo}`) } alt={props.plant.photo} ></img>
            <div className="cardcontainer">
                <Link to={`/plant-detail/${props.plant.id}`}><h4><b>{props.plant.plant_name}</b></h4></Link>
            </div>
            <div>
                {props.plant.available ? 
                <p style={{color: "green"}}>Available</p> :
                <p style={{color: "red"}}> Taken</p>
                }
            </div>
            
        </div>
    )
}