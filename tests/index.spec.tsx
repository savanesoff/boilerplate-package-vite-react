import { render, screen } from "@testing-library/react";
import MyComponent from "../src/index";

describe("MyComponent", () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it("should be defined", () => {
    expect(MyComponent).toBeDefined();
  });

  it("renders element", () => {
    render(<MyComponent />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("should allow style to be passed to the element", () => {
    const style = { color: "grb(255,255,0)" };
    const dataTestId = "overdrag";
    render(<MyComponent style={style} data-testid={dataTestId} />);
    expect(screen.getByTestId(dataTestId)).toHaveStyle(style);
  });
});
