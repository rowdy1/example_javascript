const ss = require('simple-statistics');
const Papa = require('papaparse');

module.exports = {
    sayHello: function(){
        return 'hello';
    },
    addNumbers: function(value1, value2){
        return value1 + value2;
    },    
    getMax: function(array){
        return ss.max(array);
    },

    parseFile: function(){
        var fs = require("fs");
        
        var data = fs.readFileSync('GSPC.csv');

        Papa.parse(data.toString(), {
            header: true,
            dynamicTyping: true,
            complete: function(results) {
                var arrayLength = results.data.length;
                var dailyReturns = Array();
                for (var i = 0; i < arrayLength; i++) {
                    var row = results.data[i];
                    dailyReturns.push((row.Close - row.Open)/row.Open);
                    //Do something
                }
                console.log(ss.max(dailyReturns));
                console.log(ss.min(dailyReturns));
                console.log(ss.mean(dailyReturns));
                console.log(results.data[1].Open);
            }
        });
    }
}