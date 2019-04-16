var Moment = require('moment');

const TimeStamp ={
    getTime: function(){
    console.log(Moment().format("h:mm:ss a"));
 }}
 module.exports = TimeStamp;