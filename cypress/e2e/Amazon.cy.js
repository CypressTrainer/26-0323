

describe("To amazon website",()=>{

 it("Open the amazon webstie",()=>{

    cy.visit("https://www.amazon.in")
    cy.get("#twotabsearchtextbox").type("Watches for men")
    cy.get("#nav-search-submit-button").click()
 })


})