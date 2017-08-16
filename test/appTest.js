const assert = require('chai').assert;
const sayHello = require('../app').sayHello;
const addNumbers = require('../app').addNumbers;
const app = require('../app');

describe('App', function() {
    it('sayHello should return hello', function(){
        let result = sayHello();
        assert.equal(result, 'hello');
    });

    it('sayHello should return type string', function(){
        let result = sayHello();
        assert.typeOf(result, 'string');
    });

    it('addNumbers should be above 5', function(){
        let result = addNumbers(5, 5);
        assert.isAbove(result, 5);
    });

    it('addNumbers should return type number', function(){
        let result = addNumbers(5,5);
        assert.typeOf(result, 'number');
    });

    it('getMax should return 3', function(){
        let array = [1,2,3];
        let result = app.getMax(array);

        assert.equal(result, 3);
    });

    it('getMax should return type number', function(){
        let array = [1,2,3];
        let result = app.getMax(array);

        assert.typeOf(result, 'number');
    });

    it('parseFile should return type number', function(){
        let array = [1,2,3];
        app.parseFile();
        let result = app.getMax(array);
        
        assert.typeOf(result, 'number');
    });
})