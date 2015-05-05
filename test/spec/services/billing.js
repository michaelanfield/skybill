'use strict';

describe('Service: billingService', function () {

  // load the service's module
  beforeEach(module('skybillApp'));

  // instantiate service
  var billingService, 
      $httpBackend;

  beforeEach( inject(function ( _billingService_, _$httpBackend_ ) {
    billingService = _billingService_;
    $httpBackend = _$httpBackend_;
  }));

  it( 'Should have a billing service', function () {
    expect( !!billingService ).toBe( true );
  });

  it( 'Should return a bill with a total when fetchBill is called', function () {
    var expectedTotal = 136.03;
    $httpBackend.expectGET( 'http://safe-plains-5453.herokuapp.com/bill.json' )
                .respond( { 'total': expectedTotal } );

    var bill = billingService.fetchBill();
    $httpBackend.flush();   

    expect( bill.total ).toBe( expectedTotal );
  });
});
