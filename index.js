/*
 * node-randumb
 * 
 * npm:     randumb
 * github:  https://github.com/thatemilio/node-randumb
 * 
 */


module.exports = function(charLen, startWithNumber) {

    var charLen = typeof charLen === 'undefined' ? 10 : charLen;
    var startWithNumber = typeof startWithNumber === 'undefined' ? true : startWithNumber;


    var token = '';


    var i = 0;
    while ( i < charLen ) {

        var seed = Math.round(Math.random() * 2);

        if ( seed === 0 ) {

            token += String.fromCharCode(Math.round(Math.random() * (90 - 65) + 65));
            i++;

        } else if ( seed === 1 ) {
            
            token += String.fromCharCode(Math.round(Math.random() * (122 - 97) + 97));
            i++;

        } else if ( i === 0 ) {

            if ( startWithNumber ) {

                token += String.fromCharCode(Math.round(Math.random() * (57 - 48) + 48));
                i++;
                
            } else {

                continue;

            }

        } else {

            token += String.fromCharCode(Math.round(Math.random() * (57 - 48) + 48));
            i++;

        }

    }


    return token;

}

