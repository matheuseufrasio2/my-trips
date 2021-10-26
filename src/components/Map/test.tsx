import { render, screen } from "@testing-library/react";
import { Map } from ".";

describe("<Map />", () => {
  it("should render without any marker", () => {
    render(<Map />);
    screen.logTestingPlaygroundURL();

    expect(
      screen.getByRole("link", {
        name: /a js library for interactive maps/i,
      }),
    ).toBeInTheDocument();
  });
  it("should render with marker in correct place", () => {
    const placeOne = {
      id: "1",
      name: "Petrópolis",
      slug: "petrópolis",
      location: {
        latitude: 0,
        longitude: 0,
      },
    };
    const placeTwo = {
      id: "2",
      name: "Reykjavik",
      slug: "reykjavik",
      location: {
        latitude: 129,
        longitude: -50,
      },
    };

    render(<Map places={[placeOne, placeTwo]} />);

    expect(screen.getByTitle(/petrópolis/i)).toBeInTheDocument();
    expect(screen.getByTitle(/reykjavik/i)).toBeInTheDocument();
  });
});
