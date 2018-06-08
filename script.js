// Returns a promise that uppercases words after n seconds, where n is number of entries in "words"
function parseWords(words) {
    return new Promise(
        function(resolve, reject) {
            // Time is equal to number of entries
            var time = words.length;

            setTimeout(function() {
                // Creates a new array of uppercased words
                var arr = new Array(time);
                for (var i = 0; i < time; i++) {
                    arr[i] = words[i].toUpperCase();
                }
                resolve(arr);
            }, time*1000); // Returns the new array after time seconds
        }
    )
}
    
// Consumes the created promise, and prints it out for test purposes
var words = ["foo","bar","test"];
var parseArr = function() {
    var foo = parseWords(words);
    foo.then(function (fulfilled) {
        console.log(fulfilled);
        return fulfilled;
    })
}

parseArr();
