import { render, screen } from "@testing-library/react";
import { Greet, sum } from "./Greet";

test("render correctlyu", () => {
  render(<Greet />);
  const text = screen.getByText("Hello");
  expect(text).toBeInTheDocument();
});

test("returns correctly for fn sum",()=>{
    const res = sum(1,6)
    expect(res).toBe(7)
})
