'use strict';

exports.seed = function(knex, Promise) {
    var userIds;
    return Promise.resolve().then(function() {
        return knex('things').del();
    }).then(function() {
        return knex('users').del();
    }).then(function() {
        return knex('users').insert([
            {name: 'john'},
            {name: 'jim'},
            {name: 'jane'}
        ], 'id');
    }).then(function(_userIds) {
        userIds = _userIds;
    }).then(function() {
        return knex('things').insert([
            {type: 'hammer', deleted: false, user_id: userIds[0]},
            {type: 'drill', deleted: true, user_id: userIds[0]},
            {type: 'nail', deleted: false, user_id: userIds[0]},
            {type: 'bolt', deleted: true, user_id: userIds[1]},
            {type: 'saw', deleted: true, user_id: userIds[1]},
            {type: 'wrench', deleted: false },
            {type: 'pliers', deleted: false }
        ]);
    });
};