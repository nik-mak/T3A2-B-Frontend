import React from 'react'
import AlertsContext from "../contexts/alert";
import CartContext from "../contexts/cart";
import ModalsContext from "../contexts/modals";
import SelectedListingContext from "../contexts/selectedListing";
import CartTotalContext from "../contexts/total";
import UserContext from "../contexts/user";

function TestContextWrapper( {children, user} ) {

  return (
    <SelectedListingContext.Provider value={[]}>
          <ModalsContext.Provider value={[]}>
            <AlertsContext.Provider value={[]}>
              <CartContext.Provider value={[]}>
                <CartTotalContext.Provider value={[]}>
                  <UserContext.Provider
                    value={[user]}
                  >
                    {children}
                  </UserContext.Provider>
                </CartTotalContext.Provider>
              </CartContext.Provider>
            </AlertsContext.Provider>
          </ModalsContext.Provider>
        </SelectedListingContext.Provider>
  )
}

export default TestContextWrapper