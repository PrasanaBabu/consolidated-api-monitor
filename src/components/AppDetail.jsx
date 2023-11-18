
const AppDetail = (props) => {


    return (
        <>
            <h1>{props.title}</h1>

            <input
                placeholder={"Enter URL"}
                id={"urlInput"}
            />

            <input
                placeholder={"Enter Request body"}
                id={"requestInput"}
            />

            <button name={"Send"}>Send</button>

            <textarea
                placeholder={"Your response would be here"}
            />
        </>
    )
}

export default AppDetail;
