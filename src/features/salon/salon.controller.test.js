import salon from './index';

describe('Controller: Salon', function() {
    let $controller;

    beforeEach(angular.mock.module(salon));

    beforeEach(angular.mock.inject(function(_$controller_) {
        $controller = _$controller_;
    }));

    it('test is initialized to Hello from SalonController', function() {
        let ctrl = $controller('SalonController');
        expect(ctrl.test).toBe('Hello from SalonController');
    });
});
