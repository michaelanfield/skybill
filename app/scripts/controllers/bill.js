'use strict';

/**
 * @ngdoc function
 * @name skybillApp.controller:BillCtrl
 * @description
 * # BillCtrl
 * 
 * Controller of the skybillApp responsible for loading the sky bill.
 */
angular.module('skybillApp')
  .controller( 'BillCtrl', function ( $scope, billingService ) {
     $scope.bill = billingService.fetchBill();
  });
