import { render, cleanup } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";
import Pizza from "../Pizza";

afterEach(cleanup);

test("alt text renders on image", async () => {
  const name = "My Favorite Pizza";
  const src = "https://cdn.pixabay.com/photo/2023/10/04/18/49/pizza-8294340_1280.png";
  const screen = render(<Pizza name={name} description="super cool pizza" image={src} />);

  const img = screen.getByRole("img");
  expect(img.src).toBe(src);
  expect(img.alt).toBe(name);
});

test("to have default image if none is provided", async () => {
  const screen = render(<Pizza name={"Cool Pizza"} description="super cool pizza" />);

  const img = screen.getByRole("img");
  expect(img.src).not.toBe("");
});
