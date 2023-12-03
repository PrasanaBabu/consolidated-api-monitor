import {appDetails} from "../config";

const EndpointsSelect = (props) => {
    let endpoints = [];
    appDetails.forEach((app) => {
        if (app.name === props.name) {
            endpoints = app.endpoints;
        }
    });

    return (
        endpoints.map((endpoint) => {
            return (
                <option key={endpoint} value={endpoint}>{endpoint}</option>
            )
        }
    ));
}

export default EndpointsSelect;
