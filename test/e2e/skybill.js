'use strict';

describe( 'Sky bill', function() {
	var header = $( '.header' );
	var packageBreakdown = $( '#package-breakdown' );
	var callBreakdown = $( '#call-breakdown' );
	var skystoreBreakdown = $( '#skystore-breakdown' );

  beforeEach( function() {
    browser.get( 'http://localhost:9000/' );
  });

  it( 'Should have a title of sky bill', function() {
    expect( browser.getTitle() ).toEqual( 'Sky bill' );
  });

  it( 'Should have a single header', function() {
  	expect( element.all( by.css( '.header' ) ).count() ).toEqual( 1 );
  });

  it( 'Should have the sky logo in the header', function() {
		var logo = header.element( by.css( '.header-logo' ) );

		expect( logo.isPresent() ).toBe( true );
		expect( logo.getAttribute( 'src' ) ).toContain( 'sky-logo.png' );
  });

  it( 'Should have a bill title containing the period the bill covers', function() {
  	expect( $( '.statement-period' ).getText() ).toEqual( 'My latest bill 26th Jan — 25th Feb' );
  });

  it( 'Should display the bill due date', function() {
  	expect( $( '.bill-due-date' ).getText() ).toContain( '25th Jan' );
  });

  it( 'Should display the total bill amount', function() {
  	var billTotal = element.all( by.css( '.bill-total' ) );
  	
  	expect( billTotal.count() ).toBe( 1 );
  	expect( billTotal.get( 0 ).getText() ).toEqual( '£136.03' );
  });

  it( 'Should display the date the bill was generated', function() {
  	expect( $( '.statement-generated' ).getText() ).toContain( '11th Jan' );
  });

  it( 'Should have 3 breakdown headings', function() {
  	expect( element.all( by.css( '.breakdown-heading' ) ).count() ).toBe( 3 );
  });

  it( 'Should display the packages breakdown amount but no details', function() {
  	var packages = element.all( by.css( '.breakdown-heading' ) ).get( 0 );

  	expect( packages.getText() ).toContain( 'Packages' );
  	expect( packages.getText() ).toContain( '£71.40' );

  	expect( packageBreakdown.isDisplayed() ).toBe( false );
  });

  it( 'Should display the calls breakdown amount but no details', function() {
  	var calls = element.all( by.css( '.breakdown-heading' ) ).get( 1 );

  	expect( calls.getText() ).toContain( 'Calls' );
  	expect( calls.getText() ).toContain( '£59.64' );

  	expect( callBreakdown.isDisplayed() ).toBe( false );
  });

  it( 'Should display the sky store breakdown amount but no details', function() {
  	var store = element.all( by.css( '.breakdown-heading' ) ).get( 2 );

  	expect( store.getText() ).toContain( 'Sky store' );
  	expect( store.getText() ).toContain( '£24.97' );

  	expect( skystoreBreakdown.isDisplayed() ).toBe( false );
  });

  it( 'Should display the package breakdown when clicked', function() {
  	expect( packageBreakdown.isDisplayed() ).toBe( false );

  	$( '#package-breakdown-detail' ).click();

  	expect( packageBreakdown.isDisplayed() ).toBe( true );
  });

  it( 'Should display the call breakdown when clicked', function() {
    expect( callBreakdown.isDisplayed() ).toBe( false );

    $( '#call-breakdown-detail' ).click();

    expect( callBreakdown.isDisplayed() ).toBe( true );
  });

  it( 'Should display the skystore breakdown including rentals and buy and keeps when clicked', function() {
  	$( '#skystore-breakdown-detail' ).click();

  	expect( skystoreBreakdown.isDisplayed() ).toBe( true );
    
    var skystoreCategories = skystoreBreakdown.all( by.css( '.store-group-title' ) );

    expect( skystoreCategories.count() ).toBe( 2 );
    expect( skystoreCategories.get( 0 ).getText() ).toEqual( 'RENTALS' );
    expect( skystoreCategories.get( 1 ).getText() ).toEqual( 'BUY AND KEEP' );
  });
});
