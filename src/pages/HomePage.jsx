import {Card} from "../components/Card";
import {appDetails} from "../config";
import './HomePage.css'

const HomePage = () => {

    function onClickCardHandler(appName) {
        console.log(appName)

    }

    return (
        <>
            <h1>Welcome to API Dashboard</h1>
            <h3>Click on the card to view the details of the app</h3>
        <div className={"home-cards"}>
            {appDetails.map((app) => {
                return (
                    <Card key={app.name} appName={app.name} appDescription={app.description} clickFunction={onClickCardHandler}/>
                )
            }
            )}
            {/*<Card appName={"cart"} clickFunction={onClickCardHandler}/>*/}
            {/*<AppDetail title={"CART"}/>*/}
        </div>
        </>
    )
}

export default HomePage;
