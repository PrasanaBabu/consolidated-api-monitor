import {useEffect, useState} from "react";
import './AppDetail.css'
import {fetchResponse, getToken,} from "./FetchService";

const cartPortNumber = '8080';
const AppDetail = (props) => {

    useEffect(() => {
        console.log('insidee useeffect')
        fetchToken();
    }, []);
    const [requestBody, setRequestBody] = useState('');
    const [requestUrl, setRequestUrl] = useState({hostName: '', endpoint: ''});
    const [responseData, setResponseData] = useState('')
    const [token, setToken] = useState('');

    async function fetchToken() {
        await getToken(props.title).then((response) => {
            setToken(response.token);
        })

        console.log("token is " + token)

    }




    async function handleSendRequest() {
        // await fetchToken();

        if (requestUrl.hostName.trim() === '' || requestUrl.endpoint.trim() === ''  || requestBody.trim() === '') {
            alert("Please enter request details")
            return;
        }
        const response = await fetchResponse(requestUrl.hostName + '/' + requestUrl.endpoint, requestBody, token)

        let responseBody = await response.json();
        responseBody = JSON.stringify(responseBody, null, 4)
        setResponseData(responseBody);
    }

    function handleRequestBodyChange(event) {
        setRequestBody((prevState) => {
            return event.target.value;
        })
    }

    function handleRequestUrlChange(event) {
        setRequestUrl((prevState) => {
            if (event.target.id === 'hostInput')
                return {...prevState, hostName: event.target.value}
            return {...prevState, endpoint: event.target.value}

        })
    }

    function handleDevBtnClick() {
        setRequestUrl((prevState) => {
            return {...prevState, hostName: 'https://api.d01e.gcp.ford.com'}
        })
        console.log(requestUrl)
    }

    function handleLocalBtnClick() {
        setRequestUrl((prevState) => {
            return {...prevState, hostName: 'http://localhost:' + cartPortNumber}
        })
        console.log(requestUrl)
    }

    return (
        <>
            <div id={"container"} style={{border: "1px solid blue"}}>

                <h1>{props.title}</h1>

                <div style={{display: "flex", justifyContent: "center", margin: "10px 10px 10px 10px"}}>
                    <input
                        placeholder={"Enter hostname"}
                        id={"hostInput"}
                        onChange={handleRequestUrlChange}
                        style={{
                            margin: "auto",
                            width: "50%",
                            padding: "10px",
                            textAlign: "center"
                        }}
                        value={requestUrl.hostName}
                    />
                    <input
                        placeholder={"Enter endpoint"}
                        id={"endpointInput"}
                        onChange={handleRequestUrlChange}
                        style={{
                            margin: "auto",
                            width: "30%",
                            padding: "10px",
                            textAlign: "center"
                        }}
                        value={requestUrl.endpoint}
                    />
                    <button onClick={handleLocalBtnClick}>LOCAL</button>
                    <button
                        style={{
                            padding: "10px",
                            textAlign: "center",
                            marginLeft : "10px"
                        }}
                        onClick={handleDevBtnClick}>DEV
                    </button>
                </div>

                <div className={"flex-container"}>
                    <textarea
                        className={"flex-items"}
                        placeholder={"Enter Request body"}
                        id={"requestInput"}
                        onChange={handleRequestBodyChange}
                    />

                    <button
                        className={"flex-items"}
                        name={"Send"}
                        onClick={handleSendRequest}
                        style={{
                            padding: "10px",
                            textAlign: "center",
                            margin : "50px 50px 50px 50px"
                        }}
                    > Send
                    </button>


                    <textarea
                        className={"flex-items"}
                        placeholder={"Your response would be here"}
                        value={responseData}
                        readOnly={true}
                        style={{
                            padding: "10px",
                            textAlign: "center",
                            // margin : "50px 50px 50px 50px"
                        }}

                    />
                </div>

            </div>
        </>
    )
}

export default AppDetail;
