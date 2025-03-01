import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

test("should loas contact us component",() => {
    // render something
    render( <Contact/> )

    // querying
    const heading = screen.getByText("Contact Us Page!");

    // Assertion
    expect(heading).toBeInTheDocument();
})