'use strict'

const assert = require('assert');
const configlib = require('../index.js');
const RedisClientLib = require('../lib/redisClient');


describe('redis client', () => {

    it('return undefined if key is not present', done => {
        
        const redisClient = new RedisClientLib({ redisHost: '127.0.0.1', redisPort: 6379 }, (error) => {
            if (error) {
                console.log(error)
            }
            
            redisClient.read('testKey', (err, val) => {
                assert.equal(val,undefined)
            })
        });
        done();
    });

    it('returns value for valid key', done => {
        
        const redisClient = new RedisClientLib({ redisHost: '127.0.0.1', redisPort: 6379 }, (error) => {
            if (error) {
                console.log(error)
            }

            redisClient.write('testKey','testValue', (err, val) => {
                if (err) {
                    console.log(err)
                }
            });
            
            redisClient.read('testKey', (err, val) => {
                assert.equal(val, 'testValue')
            });
        });
        done();
    });


})