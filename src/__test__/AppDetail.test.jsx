import {fireEvent, render, screen} from "@testing-library/react";
import App from "../App";
import AppDetail from "../components/AppDetail";
import userEvent, {setup} from "@testing-library/user-event";
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

    const mockVessels = [
        { id: 1, name: 'Ship 1' },
    ];

    jest.spyOn(global, 'fetch').mockImplementationOnce(() =>
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockVessels),
        })
    );



    render(<AppDetail title={"Test Title"} />);


    const sendButtonElement = screen.getByText(/Send/i);
    const requestBoxElement = screen.getByPlaceholderText(/Enter Request body/i);
    const urlElement = screen.getByPlaceholderText(/Enter URL/i);

    await userEvent.type(urlElement, "localhost")
    await userEvent.type(requestBoxElement, "t:his is the request")
    userEvent.click(sendButtonElement);

    expect(global.fetch).toHaveBeenCalled();

    expect(1).toBe(2);

})
