import './Card.css'
import {Link} from "react-router-dom";

export const Card = (props) => {

    // function onClickHandler() {
    //     props.clickFunction(props.appName);
    // }
    return (
        <>
            <Link to={props.appName}>
                <div className={"card-container"}>
                    <div>


                        {/*<div  onClick={onClickHandler}>*/}
                        <img className={"card-image"} src="https://picsum.photos/200/300" alt="random image got from random url"/>
                    </div>
                    <div>

                        <h1 className={"card-title"}>{props.appName}</h1>
                        <p className={"card-description"}>{props.appDescription}</p>
                    </div>

                    {/*</div>*/}
                </div>
            </Link>
        </>
    )
}
