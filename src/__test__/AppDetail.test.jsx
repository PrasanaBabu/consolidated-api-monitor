import {render, screen} from "@testing-library/react";
import App from "../App";
import AppDetail from "../components/AppDetail";

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
