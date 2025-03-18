import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard"
import { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "./mocks/resCardMock.json"
import "@testing-library/jest-dom"

it("should render RestaurantCard Component with props Data", () => {
    render(<RestaurantCard resData={MOCK_DATA}/>);

    const name = screen.getByText("Starboy Pizza & Shakes");

    expect(name).toBeInTheDocument();
})

it("should render RestaurantCard component with promoted label", () => {
    const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);  // Wrap with HOC

    render(<PromotedRestaurantCard resData={MOCK_DATA} />);  // ✅ Correct component

    const promoted = screen.getByText("Promoted");

    expect(promoted).toBeInTheDocument();
});
