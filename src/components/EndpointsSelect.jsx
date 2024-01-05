
const EndpointsSelect = (props) => {

    return (
        props.appDetail.endpoints.map((endpoint) => {
            return (
                <option key={endpoint} value={endpoint}>{endpoint}</option>
            )
        }
    ));
}

export default EndpointsSelect;
