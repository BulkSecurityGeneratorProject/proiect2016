'use strict';

describe('Controller Tests', function() {

    describe('Historybtr Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockHistorybtr, MockBtr;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockHistorybtr = jasmine.createSpy('MockHistorybtr');
            MockBtr = jasmine.createSpy('MockBtr');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity ,
                'Historybtr': MockHistorybtr,
                'Btr': MockBtr
            };
            createController = function() {
                $injector.get('$controller')("HistorybtrDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'btravelappApp:historybtrUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
