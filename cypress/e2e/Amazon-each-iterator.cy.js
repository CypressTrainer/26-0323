describe("To amazon website",()=>{

    it("Open the amazon webstie",()=>{
   
       cy.visit("https://www.amazon.in")
       cy.get("#twotabsearchtextbox").type("Watches for men")
       cy.get("#nav-search-submit-button").click()
       cy.get(".sg-col-20-of-24.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16")
       .find(".a-size-base-plus.a-color-base.a-text-normal")
       .each((el,index,list)=>{
        const e = el.text()
        cy.log(e)
        if(e.includes("Analog Black Dial Men's Watch-TW000R438"))
        {
            cy.wrap(el)
            .invoke('removeAttr','target')
            .click()
        }
       })

    })
   
   
   })