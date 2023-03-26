

describe("To amazon website",()=>{

 it("Open the amazon webstie",()=>{

    cy.visit("https://www.amazon.in")
    cy.get("#twotabsearchtextbox").type("Watches for men")
    cy.get("#nav-search-submit-button").click()
    cy.get(".a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal")
    .eq(1)
    .invoke('removeAttr','target')
    .click()
 })


})