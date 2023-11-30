export async function fetchResponse(requestUrl, requestBody, token) {
    console.log("token is inside  " + token)

    return await fetch(requestUrl, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        },
        method: "POST",
        body: JSON.stringify(JSON.parse(requestBody)),
        // mode: "no-cors",
    })
        .catch()

}

export async function getToken(appName) {
    const tokenURL = 'http://localhost:8090/api/v1/token/'

        return await fetch(tokenURL + 'cart', {
            headers: {
            },
        })
            .then((response) => {
            return response.json();
        })
}
