
const prompt = require('prompt');
const parser = require('another-name-parser');


const parsed_name=(nameToParse)=>{

     return parser(nameToParse);
};

module.exports.parsed_name = parsed_name;


prompt.start();

prompt.get(['Full_Name'], function (err, result) {
        console.log(parsed_name(result.Full_Name));
        prompt.stop();

});
