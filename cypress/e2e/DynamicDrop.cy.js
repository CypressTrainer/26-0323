///<reference types="cypress"/>

describe("Handling Dynamic Dropdown",()=>{
    Cypress.on('uncaught:exception',(err, runnable)=>{
        return false
    })

it("To open airindia website",()=>{

cy.visit("https://www.airindia.in")
cy.get("#from").eq(0).type("a")
cy.get("#ui-id-2").find(".ui-menu-item").each(($el,index,list)=>{
    const e = $el.text()
    cy.log(e)
    if(e.includes("Dubai, Al Maktoum International Airport, DXB, United Arab Emirates, AE"))
    {
    cy.wrap($el).click()
    }
})

})



})