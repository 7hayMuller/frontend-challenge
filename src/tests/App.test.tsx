import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it('changes the "filter" value when buttons are clicked', () => {
    render(<App />);

    // Verifica o valor inicial de "filter"
    const hotButton = screen.getByText("Hot");
    expect(hotButton).toHaveClass("selected");

    const newsButton = screen.getByText("News");
    const risingButton = screen.getByText("Rising");

    // Clique no botão "News"
    fireEvent.click(newsButton);

    // Verifica se o valor de "filter" foi alterado para "new"
    expect(hotButton).not.toHaveClass("selected");
    expect(newsButton).toHaveClass("selected");
    expect(risingButton).not.toHaveClass("selected");

    // Clique no botão "Rising"
    fireEvent.click(risingButton);

    // Verifica se o valor de "filter" foi alterado para "rising"
    expect(hotButton).not.toHaveClass("selected");
    expect(newsButton).not.toHaveClass("selected");
    expect(risingButton).toHaveClass("selected");
  });
});
