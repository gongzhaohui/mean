'use strict';

(function () {
    // Articles Controller Spec
    describe('MEAN controllers', function () {
        describe('DsnRoutersController', function () {
            // The $resource service augments the response object with methods for updating and deleting the resource.
            // If we were to use the standard toEqual matcher, our tests would fail because the test values would not match
            // the responses exactly. To solve the problem, we use a newly-defined toEqualData Jasmine matcher.
            // When the toEqualData matcher compares two objects, it takes only object properties into
            // account and ignores methods.
            beforeEach(function () {
                this.addMatchers({
                    toEqualData: function (expected) {
                        return angular.equals(this.actual, expected);
                    }
                });
            });

            // Load the controllers module
            beforeEach(module('mean'));

            // Initialize the controller and a mock scope
            var DsnRoutersController,
                scope,
                $httpBackend,
                $stateParams,
                $location;

            // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
            // This allows us to inject a service but then attach it to a variable
            // with the same name as the service.
            beforeEach(inject(function ($controller, $rootScope, _$location_, _$stateParams_, _$httpBackend_) {

                scope = $rootScope.$new();

                DsnRoutersController = $controller('DsnRoutersController', {
                    $scope: scope
                });

                $stateParams = _$stateParams_;

                $httpBackend = _$httpBackend_;

                $location = _$location_;

            }));

            it('$scope.find() should create an array with at least one dsnRouter object ' +
                'fetched from XHR', function () {

                // test expected GET request
                $httpBackend.expectGET('dsnRouters').respond([
                    {
                        title: 'An DsnRouter about MEAN',
                        content: 'MEAN rocks!'
                    }
                ]);

                // run controller
                scope.find();
                $httpBackend.flush();

                // test scope value
                expect(scope.articles).toEqualData([
                    {
                        title: 'An DsnRouter about MEAN',
                        content: 'MEAN rocks!'
                    }
                ]);

            });

            it('$scope.findOne() should create an array with one dsnRouter object fetched ' +
                'from XHR using a articleId URL parameter', function () {
                // fixture URL parament
                $stateParams.articleId = '525a8422f6d0f87f0e407a33';

                // fixture response object
                var testArticleData = function () {
                    return {
                        title: 'An DsnRouter about MEAN',
                        content: 'MEAN rocks!'
                    };
                };

                // test expected GET request with response object
                $httpBackend.expectGET(/articles\/([0-9a-fA-F]{24})$/).respond(testArticleData());

                // run controller
                scope.findOne();
                $httpBackend.flush();

                // test scope value
                expect(scope.dsnRouter).toEqualData(testArticleData());

            });

            it('$scope.create() with valid form data should send a POST request ' +
                'with the form input values and then ' +
                'locate to new object URL', function () {

                // fixture expected POST data
                var postArticleData = function () {
                    return {
                        title: 'An DsnRouter about MEAN',
                        content: 'MEAN rocks!'
                    };
                };

                // fixture expected response data
                var responseArticleData = function () {
                    return {
                        _id: '525cf20451979dea2c000001',
                        title: 'An DsnRouter about MEAN',
                        content: 'MEAN rocks!'
                    };
                };

                // fixture mock form input values
                scope.title = 'An DsnRouter about MEAN';
                scope.content = 'MEAN rocks!';

                // test post request is sent
                $httpBackend.expectPOST('dsnRouters', postArticleData()).respond(responseArticleData());

                // Run controller
                scope.create();
                $httpBackend.flush();

                // test form input(s) are reset
                expect(scope.title).toEqual('');
                expect(scope.content).toEqual('');

                // test URL location to new object
                expect($location.path()).toBe('/dsnRouters/' + responseArticleData()._id);
            });

            it('$scope.update() should update a valid dsnRouter', inject(function (Articles) {

                // fixture rideshare
                var putArticleData = function () {
                    return {
                        _id: '525a8422f6d0f87f0e407a33',
                        title: 'An DsnRouter about MEAN',
                        to: 'MEAN is great!'
                    };
                };

                // mock project object from form
                var article = new Articles(putArticleData());

                // mock project in scope
                scope.dsnRouter = article;

                // test PUT happens correctly
                $httpBackend.expectPUT(/articles\/([0-9a-fA-F]{24})$/).respond();

                // testing the body data is out for now until an idea for testing the dynamic updated array value is figured out
                //$httpBackend.expectPUT(/dsnRouters\/([0-9a-fA-F]{24})$/, putArticleData()).respond();
                /*
                 Error: Expected PUT /dsnRouters\/([0-9a-fA-F]{24})$/ with different data
                 EXPECTED: {"_id":"525a8422f6d0f87f0e407a33","title":"An DsnRouter about MEAN","to":"MEAN is great!"}
                 GOT:      {"_id":"525a8422f6d0f87f0e407a33","title":"An DsnRouter about MEAN","to":"MEAN is great!","updated":[1383534772975]}
                 */

                // run controller
                scope.update();
                $httpBackend.flush();

                // test URL location to new object
                expect($location.path()).toBe('/dsnRouters/' + putArticleData()._id);

            }));

            it('$scope.remove() should send a DELETE request with a valid articleId' +
                'and remove the dsnRouter from the scope', inject(function (Articles) {

                // fixture rideshare
                var article = new Articles({
                    _id: '525a8422f6d0f87f0e407a33'
                });

                // mock rideshares in scope
                scope.articles = [];
                scope.articles.push(article);

                // test expected rideshare DELETE request
                $httpBackend.expectDELETE(/articles\/([0-9a-fA-F]{24})$/).respond(204);

                // run controller
                scope.remove(article);
                $httpBackend.flush();

                // test after successful delete URL location dsnRouters lis
                //expect($location.path()).toBe('/dsnRouters');
                expect(scope.articles.length).toBe(0);

            }));
        });
    });
}());