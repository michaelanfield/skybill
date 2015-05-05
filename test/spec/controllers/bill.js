'use strict';

describe('Controller: BillCtrl', function () {

  // load the controller's module
  beforeEach(module('skybillApp'));

  var BillCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject( function ( $controller, $rootScope, billingService, _$httpBackend_ ) {
    scope = $rootScope.$new();
    BillCtrl = $controller('BillCtrl', {
      $scope: scope,
      billingService: billingService
    });

    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET( 'http://safe-plains-5453.herokuapp.com/bill.json' )
                .respond( { 
                  'statement': {
                    'generated': '2015-01-11',
                    'due': '2015-01-25',
                    'period': {
                      'from': '2015-01-26',
                      'to': '2015-02-25'
                    }
                  },
                  'total': 135.23,
                  'package': {
                    'subscriptions': [
                      { 'type': 'tv', 'name': 'My TV package', 'cost': 50.00 }
                    ],
                    'total': 50.00
                  },
                  'callCharges': {
                    'calls': [
                      { 'called': '07777809890', 'duration': '00:23:03', 'cost': 2.13 }
                    ],
                    'total': 2.13
                  },
                  'skyStore': {
                    'rentals': [
                      { 'title': '50 Shades of Grey', 'cost': 4.99 }
                    ],
                    'buyAndKeep': [
                      { 'title': 'White chicks', 'cost': 7.99 }
                    ],
                    'total': 12.98
                  }
                });
  }));

  it( 'Should contain a statement, total, package, call charges and sky store', function() {
    $httpBackend.flush();

    var bill = scope.bill;
    expect( bill.statement ).toBeDefined();
    expect( bill.statement ).toEqual( jasmine.any( Object ) );
    expect( bill.total ).toBeDefined();
    expect( bill.statement ).toEqual( jasmine.any( Object ) );
    expect( bill.package ).toBeDefined();
    expect( bill.callCharges ).toBeDefined();
    expect( bill.skyStore ).toBeDefined();
  });

  it( 'Should have a statement containing attrs for generated, due and period', function() {
    $httpBackend.flush();

    var statement = scope.bill.statement;
    expect( statement.generated ).toBeDefined();
    expect( statement.due ).toBeDefined();
    expect( statement.period ).toBeDefined();
  });

  it( 'Should have a package containing a list of subscriptions and a total', function() {
    $httpBackend.flush();

    var skyPackage = scope.bill.package;
    expect( skyPackage.subscriptions ).toBeDefined();
    expect( skyPackage.subscriptions ).toEqual( jasmine.any( Object ) );
    expect( skyPackage.total ).toBeDefined();
  });
});
