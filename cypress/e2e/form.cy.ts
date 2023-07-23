describe("Form Test", () => {
  let input1Value = "";
  let input2Value = "";

  beforeEach(() => {
    cy.visit("/form");
  });

  it("should fill form inputs with generated values, submit the form, and validate the result", () => {
    // Generate unique values using uuidv4
    const uuidv4 = Cypress._.random(0, 1e6);
    const inputValue1 = `inputValue1-${uuidv4}`;
    const inputValue2 = `inputValue2-${uuidv4}`;

    // Fill the form inputs with generated values
    cy.get("#firstName").type(inputValue1);
    cy.get("#lastName").type(inputValue2);

    // Store the generated values for later use
    input1Value = inputValue1;
    input2Value = inputValue2;

    // Submit the form
    cy.contains("button", "Submit").click();

    // Assert the displayed values on the other page
    cy.contains("div", input1Value); // 替換為顯示第一個輸入值的元素選擇器
    cy.contains("div", input2Value); // 替換為顯示第二個輸入值的元素選擇器
  });

  it("should block form submission when firstName is filled and lastName is empty", () => {
    // Generate unique value using uuidv4 for firstName
    const uuidv4 = Cypress._.random(0, 1e6);
    const inputValue1 = `inputValue1-${uuidv4}`;

    // Fill only the firstName input
    cy.get("#firstName").type(input1Value);

    // Submit the form and assert that submission is blocked
    cy.contains("button", "Submit").click();
    cy.url().should("not.include", "/result");
  });
});
