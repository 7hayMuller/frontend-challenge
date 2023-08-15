import { render } from "@testing-library/react";
import App from "../App";

test("renders App component correctly", () => {
  const { getByText, getByRole } = render(<App />);

  // Verifica se o texto "REACT" está presente no componente
  const reactText = getByText(/REACT/i);
  expect(reactText).toBeInTheDocument();

  // Verifica se o botão Hot está presente no componente
  const hotButton = getByRole("button", { name: /hot/i });
  expect(hotButton).toBeInTheDocument();

  // Verifica se o botão News está presente no componente
  const newsButton = getByRole("button", { name: /news/i });
  expect(newsButton).toBeInTheDocument();

  // Verifica se o botão Rising está presente no componente
  const risingButton = getByRole("button", { name: /rising/i });
  expect(risingButton).toBeInTheDocument();
});
