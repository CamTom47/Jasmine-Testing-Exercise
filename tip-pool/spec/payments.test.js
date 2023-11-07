describe('Payments Test (with setup and tear-down)',function (){
    beforeEach(function ()  {
        //initialization logic
        billAmtInput.value = 100
        tipAmtInput.value = 20
    });

    it('should add a new payments to allPayments on submitPaymentInfo()', function(){
        submitPaymentInfo()
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment' + paymentId].billAmt).toEqual('100')
        expect(allPayments['payment' + paymentId].tipAmt).toEqual('20')
        expect(allPayments['payment' + paymentId].tipPercent).toEqual(20)
    });

    it('should not create a new payment if billAmt on submitPaymentInfo() is empty', function(){
        billAmtInput.value = '';
        createCurPayment();
        expect(Object.keys(allPayments).length).toEqual(0);
    
    })
        
    it('should update #payment table on appendPaymentTable()',function(){
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;

        appendPaymentTable(curPayment)
        
        let curTdList = document.querySelectorAll('#paymentTable tbody tr td');

        expect(curTdList.length).toEqual(3);
        expect(curTdList[0].innerText).toEqual('$100');
        expect(curTdList[1].innerText).toEqual('$20');
        expect(curTdList[2].innerText).toEqual('20%');
    })

    it('should create a payment on createCurPayment()',function(){
        let testPayment = {
            billAmt: '100',
            tipAmt: '20',
            tipPercent: 20,
        };

        expect(createCurPayment()).toEqual(testPayment);
    })

    it('should not create a payment on createCurPayment() with empty input',function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';

        let curPayment = createCurPayment();

        expect(curPayment).toEqual(undefined);
    });


    afterEach(function()    {
        paymentId = 0;
        billAmtInput.value = '';
        tipAmtInput.value = '';
        allPayments = {};
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        
    })
});