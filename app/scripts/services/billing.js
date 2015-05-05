'use strict';

/**
 * @ngdoc service
 * @name skybillApp.billingService
 * @description
 * # billingService
 *
 * Service in the skybillApp used to retrieve a bill from a JSON endpoint.
 */
angular.module('skybillApp')
  .service( 'billingService', function ( $resource ) {
    this.fetchBill = function() {
    	var billResource = $resource( 'http://safe-plains-5453.herokuapp.com/bill.json', {}, {
    		query: { method:'GET', isArray:false }
    	});

    	return billResource.query( function( bill ) {
    		return bill;
    	});
	};
  });
