import {render, screen} from "@testing-library/react";
import AppDetail from "../components/AppDetail";
import userEvent from "@testing-library/user-event";
import * as service from "../components/FetchService";
import {act} from "react-dom/test-utils";

test('renders title got from props', () => {
    render(<AppDetail title={"Test Title"} />);
    const titleElement = screen.getByText(/Test Title/i);
    expect(titleElement).toBeInTheDocument();
});

test('should have a input box for URL', () => {
    render(<AppDetail title={"Test Title"} />);
    const urlElement = screen.getByPlaceholderText(/Enter URL/i);
    expect(urlElement).toBeInTheDocument();
})

test('should have a input box for request', () => {
    render(<AppDetail title={"Test Title"} />);
    const requestBoxElement = screen.getByPlaceholderText(/Enter Request body/i);
    expect(requestBoxElement).toBeInTheDocument();
})

test('should have button for sending request', () => {
    render(<AppDetail title={"Test Title"} />);
    const sendButtonElement = screen.getByText(/Send/i);
    expect(sendButtonElement).toBeInTheDocument();
})

test('should have output box to show response', () => {
    render(<AppDetail title={"Test Title"} />);
    const responseBoxElement = screen.getByPlaceholderText(/Your response would be here/i);
    expect(responseBoxElement).toBeInTheDocument();
})

test('after send button is clicked api call is made using the details in the input boxes', async () => {

    const mockData = [
        { id: 1, name: 'Ship 1' },
    ];

    const mockFetch = jest.spyOn(service, 'fetchResponse')
        .mockImplementationOnce(() =>
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockData),
        })
    );

    render(<AppDetail title={"Test Title"} />);

    const sendButtonElement = screen.getByText(/Send/i);
    const requestBoxElement = screen.getByPlaceholderText(/Enter Request body/i);
    const urlElement = screen.getByPlaceholderText(/Enter URL/i);

    await userEvent.type(urlElement, "localhost")
    await userEvent.type(requestBoxElement, "t:his is the request")
    await userEvent.click(sendButtonElement);

    expect(mockFetch).toBeCalledTimes(1);
})

test('should not make api call when url or request body is not entered', async () => {
    render(<AppDetail title={"Test Title"} />);
    const mockData = [
        { id: 1, name: 'Ship 1' },
    ];

    const mockFetch = jest.spyOn(service, 'fetchResponse')
        .mockImplementationOnce(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockData),
            })
        );

    const sendButtonElement = screen.getByText(/Send/i);
    const requestBoxElement = screen.getByPlaceholderText(/Enter Request body/i);
    const urlElement = screen.getByPlaceholderText(/Enter URL/i);

    userEvent.click(sendButtonElement);

    expect(mockFetch).not.toHaveBeenCalled();
})

test('should have button to set url as localhost', async () => {
    render(<AppDetail title={"Test Title"} />);
    const localButtonElement = screen.getByText(/LOCAL/i);
    expect(localButtonElement).toBeInTheDocument();
    //button should set url to http://localhost:8080

    act(async () => {
        await userEvent.click(localButtonElement);

    });


    const urlElement = screen.getByPlaceholderText('Enter Request body');
    console.log(urlElement.value + " hello")

    expect(urlElement).toBeInTheDocument();

});

