export async function fetchResponse(requestUrl, requestBody) {


    return await fetch(requestUrl, {
        headers: {
            // 'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(JSON.parse(requestBody)),
        mode: "no-cors",
    })
        .catch()

}

export async function getToken(appName) {
    let scope = "";
    let client = "d26bcea5-129d-4f67-852e-744638dc26e1";
    let secret = "7s.8Q~9zPJL6f9wv6JzvK1nfLDtRWs~gSFjxlbLU";
    let tokenUrl = "https://login.microsoftonline.com/azureford.onmicrosoft.com/oauth2/v2.0/token"
    if (appName === 'test') {
        scope = "api://8f9ff8ea-9813-4e5a-8c0c-3a32c84a1613/.default";
    }

    let encodedForm = [];


    let token;
    var details = {
        'client_id': client,
        'client_secret': secret,
        'grant_type': 'client_credentials',
        'scope': scope,
    };
    Object.entries(details).forEach((key, value) => {
        const encodedKey = encodeURIComponent(key);
        const encodedValue = encodeURIComponent(value);
        encodedForm.push(`${encodedKey}=${encodedValue}`);
    });
    encodedForm = encodedForm.join('&');
var formBody = [];
for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
}

    const formData = new URLSearchParams();
    formData.append('client_id', client);
    formData.append('client_secret', secret);
    formData.append('grant_type', 'client_credentials');
    formData.append('scope', scope);
    let promise = await fetch(tokenUrl,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            // mode: "no-cors",
            body: encodedForm,
        }
    )


    token = await promise.json().access_token;
    console.log(token + " is token ")
    console.log(JSON.stringify(promise.json()) + " is promise");
    return token;
}
