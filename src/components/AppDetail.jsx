import {useState} from "react";
import './AppDetail.css'

const AppDetail = (props) => {

    const [requestBody, setRequestBody] = useState('');
    const [requestUrl, setRequestUrl] = useState('');
    const [responseData, setResponseData] = useState('')

    async function handleSendRequest() {

        const response = await fetch(requestUrl, {
            headers: {
                // 'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(JSON.parse(requestBody)),
            // mode: "no-cors",
        }).catch();

        let responseBody = await response.json();

        setResponseData(JSON.stringify(responseBody, null, 4))
    }

    function handleRequestBodyChange(event) {
        setRequestBody(event.target.value)
    }

    function handleRequestUrlChange(event) {
        setRequestUrl(event.target.value)
    }

    return (
        <>
            <div id={"container"} style={{border: "1px solid blue"}}>

                <h1>{props.title}</h1>

                <div style={{display: "flex", justifyContent: "center", margin: "10px 10px 10px 10px"}}>
                    <input
                        placeholder={"Enter URL"}
                        id={"urlInput"}
                        onChange={handleRequestUrlChange}
                        style={{
                            margin: "auto",
                            width: "50%",
                            padding: "10px",
                            textAlign: "center"
                        }}
                    />
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
                    > Send
                    </button>

                    <textarea
                        className={"flex-items"}
                        placeholder={"Your response would be here"}
                        value={responseData}
                        readOnly={true}
                    />
                </div>

            </div>
        </>
    )
}

export default AppDetail;
