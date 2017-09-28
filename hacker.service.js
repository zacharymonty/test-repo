/* global angular */
/* https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#data-services */
(function() {
    'use strict'

    angular.module('sabio.services')
        .factory('hackerService', HackerServiceFactory)

    HackerServiceFactory.$inject = ['$http', '$q']

    function HackerServiceFactory($http, $q) {
        return {
            getAll: getAll,
            getById: getById,
            insert: insert,
            update: update,
            remove: remove
            // getLoginData: getLoginData
        }

        // function getLoginData() {
        //     return $http.get('/api/hackers/login-data')
        //         .then(xhrSuccess)
        //         .catch(onError)
        // }

        function getAll() {
            return $http.get('/api/hackers')
                .then(xhrSuccess)
                .catch(onError)
        }

        function getById(id, onSuccess, onError) {
            return $http.get(`/api/hackers/${id}`)
                .then(xhrSuccess)
                .catch(onError)
        }

        function insert(hackerData, onSuccess, onError) {
            return $http.post('/api/hackers', hackerData)
                .then(xhrSuccess)
                .catch(onError)
        }

        function update(hackerData, onSuccess, onError) {
            return $http.put(`/api/hackers/${hackerData._id}`, hackerData)
                .then(xhrSuccess)
                .catch(onError)
        }

        function remove(id, onSuccess, onError) {
            return $http.delete(`/api/hackers/${id}`)
                .then(xhrSuccess)
                .catch(onError)
        }

        function xhrSuccess(response) {
            return response.data
        }

        function onError(error) {
            console.log('xhr error on service')
            console.log(error);
            return $q.reject(error.data)
        }
    }
})()
