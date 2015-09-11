import stylists from './index';

describe('Controller: Stylists', function() {
    let $controller;

    beforeEach(angular.mock.module(stylists));

    beforeEach(angular.mock.inject(function(_$controller_) {
        $controller = _$controller_;
    }));

    it('test is initialized to Hello from StylistsController', function() {
        let ctrl = $controller('StylistsController');
        expect(ctrl.test).toBe('Hello from StylistsController');
    });
});
