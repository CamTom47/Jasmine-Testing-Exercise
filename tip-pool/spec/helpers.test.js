describe('Helpers Test (with setup and tear-down)',function(){
    beforeEach(function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
    })
    
    it('sum a total on sumPaymentTotal()', function(){
        expect(sumPaymentTotal('billAmt')).toEqual(100);

        billAmtInput.value = 200;
        tipAmtInput.value = 20;
    
        submitPaymentInfo()
    
        expect(sumPaymentTotal('billAmt')).toEqual(300);
        
        billAmtInput.value = 200;
        tipAmtInput.value = 20;
    
        submitPaymentInfo()
    
        expect(sumPaymentTotal('billAmt')).toEqual(500);
    });
    
    it('should sum tips on sumPaymentTotal()',function(){
        expect(sumPaymentTotal('tipAmt')).toEqual(20);
        
        billAmtInput.value = 200;
        tipAmtInput.value = 20;

        submitPaymentInfo()
        
        expect(sumPaymentTotal('tipAmt')).toEqual(40);
        
        billAmtInput.value = 200;
        tipAmtInput.value = 20;
    
        submitPaymentInfo()
        
        expect(sumPaymentTotal('tipAmt')).toEqual(60);
    });

    it('should sum the tip percentages on sumPaymentTotal()', function(){
        expect(sumPaymentTotal('tipPercent')).toEqual(20);
    });

    it('should sum the tip percentage on a single tip on calculateTipPercent()', function(){
        expect(calculateTipPercent(100,20)).toEqual(20);
        expect(calculateTipPercent(200,20)).toEqual(10);
    })
    
    it('should create a newTd from value and append tr on appendTd(tr, value)', function(){
        let newTr = document.createElement('tr');
        appendTd(newTr,'test');
        
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerText).toEqual('test');
    });
    
    it('should create a delete td and append to tr on appendDeleteBtn(tr)',function(){
        let newTr = document.createElement('tr');
        appendDeleteBtn(newTr)

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerText).toEqual('X');

    } )
    
    afterEach(function(){
        total = 0;
        billAmtInput.value = '';
        tipAmtInput.value = '';
        allPayments = {};
    });
})