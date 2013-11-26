'use strict';

/* jasmine specs for services go here */

describe('travis service', function() {

    var $httpBackend;
    beforeEach(module('Geeknight'));

    beforeEach(inject(function($injector) {
        $httpBackend = $injector.get('$httpBackend');
        // $httpBackend.when('GET', "https://api.travis-ci.org/repos/test_project.json").respond({some: 'data'});
    }));

    it('should get build status from travis', inject(function(TravisBuildService) {
        

    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
   });
});
