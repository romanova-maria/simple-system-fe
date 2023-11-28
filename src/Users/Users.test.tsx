import { describe, expect, it } from "vitest";
import { render, screen } from "../../test-setup/testUtils";
import Users from "./Users";
import { userEvent } from "@testing-library/user-event";
import { REPO1 } from "../../test-setup/mocks/repositories";

const USER_NAME = "test";

// TODO: ideally tests should be split into several parts (e.g. repository functionality could be tested separately).
//  More components tests should be added
describe("Users", () => {
  const renderSearchResult = async () => {
    const user = userEvent.setup();

    render(<Users />);

    const searchInput = screen.getByPlaceholderText("Enter username");
    const searchButton = screen.getByRole("button", { name: "Search" });

    await user.type(searchInput, USER_NAME);
    await user.click(searchButton);
  };

  const renderDescriptionOfFirstRepo = async () => {
    const user = userEvent.setup();

    await renderSearchResult();

    const githubUser = screen.getByRole("heading", { name: "testName" });
    await user.click(githubUser);
  };

  it("Shows a search input and search button", () => {
    render(<Users />);
    const searchInput = screen.getByPlaceholderText("Enter username");
    expect(searchInput).toBeInTheDocument();

    const searchButton = screen.queryByRole("button", { name: "Search" });
    expect(searchButton).toBeInTheDocument();
  });

  it("Shows a correct search heading", async () => {
    await renderSearchResult();
    const searchHeading = screen.getByRole("heading", {
      name: `Showing users for "${USER_NAME}"`,
    });
    expect(searchHeading).toBeInTheDocument();
  });

  it("Shows a list of users on search", async () => {
    await renderSearchResult();

    const githubUser = screen.getByRole("heading", { name: "testName" });
    expect(githubUser).toBeInTheDocument();
  });

  it("Shows a list of repositories on click on user name", async () => {
    await renderDescriptionOfFirstRepo();

    const repo1 = screen.getByText("Repository1");
    const repo2 = screen.getByText("Repository2");
    const repo3 = screen.getByText("Repository3");

    expect(repo1).toBeInTheDocument();
    expect(repo2).toBeInTheDocument();
    expect(repo3).toBeInTheDocument();
  });

  it("shows a correct amount of stars for the first repository", async () => {
    await renderDescriptionOfFirstRepo();

    const name = `Repository1 ${REPO1.stars}`;
    const header = screen.getByRole("heading", { name: new RegExp(name) });
    expect(header).toBeInTheDocument();
  });

  it("shows a correct description for the first repository", async () => {
    await renderDescriptionOfFirstRepo();
    const description = screen.getByText(REPO1.description);
    expect(description).toBeInTheDocument();
  });
});
