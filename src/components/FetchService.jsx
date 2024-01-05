export async function fetchResponse(requestUrl, requestBody, token) {
    console.log("token is inside  " + token)


    return await fetch(requestUrl, {
        headers: {
            // 'Accept': 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
            // 'Origin': 'http://localhost:3000/'
        },
        method: "POST",
        body: requestBody,
        // mode: "no-cors",
    })
        .catch(err=>{
            console.log(err)
        })

}

export function getToken(appName) {
    const tokenURL = 'http://localhost:8090/api/v1/token/'

        return fetch(tokenURL + 'cart', {
            headers: {
            },
        })
            .then((response) => {
                console.log('3' + JSON.stringify(response.body))

                return response.json();
        })

}
