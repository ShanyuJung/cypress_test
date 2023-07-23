describe("Search Test", () => {
  beforeEach(() => {
    cy.visit("/search");
  });

  it("should handle case sensitivity in search", () => {
    const searchKeyword1 = "Pik";
    const searchKeyword2 = "Pi";
    const expectedResults1 = "Pikachu";
    const expectedResults2 = [
      "Pidgey",
      "Pidgeotto",
      "Pidgeot",
      "Pikachu",
      "Pinsir",
    ]; // 以你的程式碼中的 Pokemon 為準

    // Fill the search input with the search keyword 1
    cy.get("input").type(searchKeyword1);
    // Assert that the search results are displayed correctly
    cy.get("li").should("contain", expectedResults1);

    // Clear the search input

    // Fill the search input with the search keyword 2

    // Assert that the search results are displayed correctly
    // expectedResults2.forEach((pokemonName, index) => {

    // });
  });

  it("should handle empty search result", () => {
    const searchKeyword = "xyz";

    // Fill the search input with the search keyword
    cy.get("input").type(searchKeyword);

    // Assert that no search results are displayed
    cy.get("li").should("not.exist");
  });
});
