describe('Calculator Tests (Setup and Tear-Down)',  function(){

    it('should calculate the monthly rate correctly on calculateMonthlyPayment()', function () {
      let values = {amount: 300000, years: 30, rate:7};
      expect(calculateMonthlyPayment(values)).toBe('1995.91');
    });
    
    
    it("should return a result with 2 decimal places", function() {
      let values = {amount: 150000, years: 15, rate:7}
      expect(calculateMonthlyPayment(values)).toBe('1348.24');
  
    });
  
    it('should infill UI values on setupInitialValues()', function(){
      let values = {amount: 300000, years: 30, rate:7}
      let amountUI = document.getElementById("loan-amount");
      amountUI.value = values.amount
      let yearsUI = document.getElementById("loan-years");
      yearsUI.value = values.years
      let rateUI = document.getElementById("loan-rate");
      rateUI.value = values.rate
      setupInitialValues()
      expect(amountUI.value).toEqual('300000');
      
    })
    
    afterEach(function(){
      values = {};
  
    })
  })
  