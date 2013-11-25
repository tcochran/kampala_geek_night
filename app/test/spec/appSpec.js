'use strict';

/* jasmine specs for services go here */

describe('service', function() {
    
    var $httpBackend;

    beforeEach(function() {
        module('buildMonitor');
    });

    beforeEach(inject(function($injector) {
        $httpBackend = $injector.get('$httpBackend');
        $httpBackend.when('GET', 'https://api.travis-ci.org/repos/test.json').respond({data: 'some'});
    }));

    it('should monitor travis build', inject(function(buildStatusService) {
        buildStatusService.status("test", function(results) { 
            expect(results).toEqual({data: 'some else'});
        });

        $httpBackend.flush();
    }));
});
