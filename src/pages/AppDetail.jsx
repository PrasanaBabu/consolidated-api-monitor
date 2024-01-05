import {useEffect, useState} from "react";
import './AppDetail.css'
import {fetchResponse, getToken,} from "../components/FetchService";
import {appDetails} from "../config";
import {useParams} from "react-router-dom";
import EndpointsSelect from "../components/EndpointsSelect";
import {cartCollection} from "../cartCollection";
import {rtoCollection} from "../rtoCollection";

const AppDetail = (props) => {

    let items;


    // const endpoints = endpointsByApp.cart;
    let {appName} = useParams();
    let appDetail;

    appDetails.forEach((app) => {
        if (app.name === appName) {
            appDetail = app;
        }
    });

    const [requestBody, setRequestBody] = useState('');

    const [requestUrl, setRequestUrl] = useState({hostName: '', endpoint: appDetail.endpoints[0]});
    const [responseData, setResponseData] = useState('')
    // const [responseTime, setResponseTime] = useState();
    const [token, setToken] = useState('');
    const [error, setError] = useState({
        status: false,
        message: ""
    });
    const [errorHelper, setErrorHelper] = useState({
        status: false,
        message: ""
    })


    useEffect(() => {
        if (appName=='cart'){
            items = cartCollection.item[0].item;

        }
        else if (appName == 'rto'){
            items = rtoCollection.item[0].item
        }
        //TODO: modify for other jouneys in better way
        else {
            items = cartCollection.item[0].item
        }

        console.log('insidee useeffect')
        console.log(appDetail.endpoints.flatMap((value) => value + '/'))

        console.log("items : " + JSON.stringify(items, null, 4))
        let item = items[0]
        // if (item.request.raw.contains(appDetail.endpoints[0])){
        setRequestBody(item.request.body.raw)
        // }

        fetchToken();
    }, [appName]);

    function fetchToken() {

        try {
            getToken(appName).then((response) => {
                setToken(response.token);
                console.log(JSON.stringify(response))
                setError({
                    status: false,
                    message: "Token URL  working"
                })
            }).catch(err => {
                console.log("error " + err)
                setError({
                    status: true,
                    message: "Token URL not working"
                })
            })
        } catch (error) {
            console.log(error + "caught")
        }

    }

    function resetResponseBody() {
        setResponseData("")
    }

    function handleErrorScenarios(response, httpStatusCode) {
        // let responseBody = await response.json();
        const responseMessage =  JSON.stringify(response, null, 4)
        console.log("res body in error = "+responseMessage)
        setResponseData(responseMessage);
        if (httpStatusCode === 400) {
            handleValidationScenarios(responseMessage);
        } else if (httpStatusCode === 500) {
            handleBusinessErrorScenarios(responseMessage);
        } else if (httpStatusCode === 403) {
            handleAuthenticationScenarios(responseMessage);
        }
    }

    function handleValidationScenarios(responseMessage) {

        if (responseMessage.includes("GFC100")) {
            console.log("validation error")
            setErrorHelper(
                {
                    status: true,
                    message: "Please recheck the fields in the request body : " + JSON.parse(responseMessage).validations[0].field
                }
            )
        }
    }

    function handleAuthenticationScenarios(responseMessage) {
        console.log("token invalid")
        setErrorHelper(
            {
                status: true,
                message: "Token has expired / invalid. please reload the page or click button to generate token "
            }
        )
    }

    function handleBusinessErrorScenarios(responseMessage) {
        if(responseMessage.includes("GFC101")){
            console.log("rvst error lease")
            setErrorHelper(
                {
                    status: true,
                    message: "Please recheck the VIN , RVST Error has occurred  "
                }
            )
        }
    }

    function resetError() {
        setError({
            status: false,
            message: "working"

        })
    }
    function resetErrorHelper() {
        setErrorHelper({
            status: false,
            message: ""

        })
    }

    async function handleSendRequest() {
        const flat = appDetail.endpoints.flat(0)
        console.log(flat)
        // await fetchToken();

        resetErrorHelper();

        if (requestUrl.hostName.trim() === '' || requestUrl.endpoint.trim() === '' || requestBody.trim() === '') {
            alert("Please enter request details")
            return;
        }
        let reqBodyToSend;

        // TODO: this will produce error when proper json format is not given handle it.
        try{

        reqBodyToSend = JSON.stringify(JSON.parse(requestBody));
        resetError();
        } catch (err){
            setError({status: true, message: "please input correct request body in json format"})
        }
        // setRequestBody(JSON.stringify(JSON.parse(requestBody)));

        try {
            const response = await fetchResponse(requestUrl.hostName + requestUrl.endpoint, reqBodyToSend, token)
            // .then(res=> console.log(res))
            let httpStatusCode = response.status;
            console.log('http httpStatusCode code = ' + httpStatusCode)

            if (httpStatusCode !== 200) {
                console.log("handle error")
                handleErrorScenarios(await response.json(), httpStatusCode);
            } else {

                let responseBody = await response.json();
                console.log('response body = ' + JSON.stringify(responseBody))

                resetError();

                responseBody = JSON.stringify(responseBody, null, 4)
                setResponseData(responseBody);
            }
        } catch (err) {
            console.log("error in app url")
            setError({
                status: true,
                message: "app url wrong please check again"
            })
            resetResponseBody();
        }

    }

    function handleRequestBodyChange(event) {
        setRequestBody((prevState) => {
            return event.target.value;
        })
    }

    function handleRequestUrlChange(event) {
        setRequestUrl((prevState) => {
            if (event.target.id === 'hostInput') return {...prevState, hostName: event.target.value}
            return {...prevState, endpoint: '' + event.target.value}

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
            return {...prevState, hostName: 'http://localhost:' + appDetail.localPort}
        })
        console.log(requestUrl)
    }

    function handleQABtnClick() {
        setRequestUrl((prevState) => {
            return {...prevState, hostName: 'https://api.qa01e.gcp.ford.com'}
        })
    }

    function selectEndpointHandler(event) {
        console.log(event.target.value)
        setRequestUrl((prevState) => {
            return {...prevState, endpoint: event.target.value}
        })
    }


    return (<>
        {error.status && <h1>{error.message}</h1>}
        <h1>Welcome to {appDetail.name.toUpperCase()} App</h1>
        <div id={"container"} style={{border: "1px solid blue"}}>

            <h1>{props.title}</h1>

            <div style={{display: "flex", justifyContent: "center", margin: "10px 10px 10px 10px"}}>
                <input
                    placeholder={"Enter hostname"}
                    id={"hostInput"}
                    onChange={handleRequestUrlChange}
                    style={{
                        margin: "auto", width: "50%", padding: "10px", textAlign: "center", marginRight: "10px"
                    }}
                    value={requestUrl.hostName}
                />
                <select style={{
                    margin: "auto", width: "50%", padding: "10px", textAlign: "center", marginRight: "10px"
                }} onChange={selectEndpointHandler}>
                    {/*{endpoints.map((endpoint) => <option key={endpoint} value={endpoint}>{endpoint}</option>)}*/}
                    <EndpointsSelect name={appName} appDetail={appDetail}/>
                </select>
                {/*<input*/}
                {/*    placeholder={"Enter endpoint"}*/}
                {/*    id={"endpointInput"}*/}
                {/*    onChange={handleRequestUrlChange}*/}
                {/*    style={{*/}
                {/*        margin: "auto", width: "30%", padding: "10px", textAlign: "center"*/}
                {/*    }}*/}
                {/*    value={requestUrl.endpoint}*/}
                {/*/>*/}
                <button onClick={handleLocalBtnClick}>LOCAL</button>
                <button
                    style={{
                        padding: "10px", textAlign: "center", marginLeft: "10px"
                    }}
                    onClick={handleDevBtnClick}>DEV
                </button>
                <button
                    style={{
                        padding: "10px", textAlign: "center", marginLeft: "10px"
                    }}
                    onClick={handleQABtnClick}>QA
                </button>
            </div>

            <div className={"flex-container"}>
                    <textarea
                        className={"flex-items"}
                        placeholder={"Enter Request body"}
                        id={"requestInput"}
                        onChange={handleRequestBodyChange}
                        value={requestBody}
                    />

                <button
                    className={"flex-items"}
                    name={"Send"}
                    onClick={handleSendRequest}
                    style={{
                        padding: "10px", textAlign: "center", margin: "50px 50px 50px 50px"
                    }}
                > Send
                </button>


                <textarea
                    className={"flex-items"}
                    placeholder={"Your response would be here"}
                    value={responseData}
                    readOnly={true}
                    style={{
                        padding: "10px", textAlign: "left", // margin : "50px 50px 50px 50px"
                    }}

                />
            </div>
        </div>
        <div style={{margin: '20% 10% 0% 10%'}}>
            {errorHelper.status && <h1>{errorHelper.message}</h1>}
        </div>
    </>)
}

export default AppDetail;
