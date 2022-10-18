const axios = require('axios'); //package that lets you make api calls easier
const url = require('url'); //allows us to work with URLS


module.exports.getFish = function(callback) {
    axios
        .get('https://www.fishwatch.gov/api/species')
        .then(res => {
            console.log("*********inside axios************");
            console.log(res.data);
            return callback(null, res.data);
        })
        .catch(error => {
            console.error(error.null);
        })


};

function terryName() {
    console.log("terry");
}

