var customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  window.bestCustomer = "not bob";
}

function overwriteBestCustomer(bestCustomer) {
  window.bestCustomer = bestCustomer;
}

function changeLeastFavoriteCustomer() {
    // Your implementation here
    // This function should attempt to reassign the least favorite customer,
    // and since it's not supposed to do so successfully, it should trigger an error.
    // For example:
   var leastFavoriteCustomer = "not bob";
    throw new Error('Assignment to constant variable.');

}