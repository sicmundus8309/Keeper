import react, {useState} from "react";
import "./card.css";

function Card(props){
    
    return(
        <div>
            <div className="note">
                <h2>{props.title}</h2>
                <p>{props.task}</p>
                <button type="button" className="btn btn-danger" onClick={()=>{props.onDelete(props.id)}} >Delete</button>
            </div>
        </div>
    );
}
export default Card;