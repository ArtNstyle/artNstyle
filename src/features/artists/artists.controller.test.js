import artists from './index';

describe('Controller: Artists', function() {
    let $controller;

    beforeEach(angular.mock.module(artists));

    beforeEach(angular.mock.inject(function(_$controller_) {
        $controller = _$controller_;
    }));

    it('test is initialized to Hello from ArtistsController', function() {
        let ctrl = $controller('ArtistsController');
        expect(ctrl.test).toBe('Hello from ArtistsController');
    });
});
