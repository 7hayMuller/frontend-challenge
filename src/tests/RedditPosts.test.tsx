import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import RedditPosts from "../RedditPosts";

describe("RedditPosts", () => {
  it('loads more items when "Ver mais" button is clicked', async () => {
    render(<RedditPosts subreddit="reactjs" filter="hot" />);

    // Verifica a quantidade inicial de itens
    const initialItems = screen.getAllByRole("listitem");
    await waitFor(() => expect(initialItems).toHaveLength(10));

    // Clique no botão "Ver mais"
    const verMaisButton = screen.getByText("+ Ver mais");
    fireEvent.click(verMaisButton);

    // Aguarda a atualização dos itens com base no botão "Ver mais"
    const updatedItems = await screen.findAllByRole("listitem");
    await waitFor(() => expect(updatedItems).toHaveLength(15)); // Assuma que cada clique adiciona 5 itens
  });
});
