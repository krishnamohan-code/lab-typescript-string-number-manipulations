"use strict";
exports.__esModule = true;
//progression 2
var StringManipulations = /** @class */ (function () {
    function StringManipulations() {
    }
    StringManipulations.prototype.print = function (word) {
        console.log(word);
        console.log(" uppercase " + word.toUpperCase());
        console.log("Lower case " + word.toLowerCase());
        console.log("char at position 2 " + word.charAt(2));
        console.log("Concat " + word.concat("prograd"));
        console.log("Slice " + word.slice(1, 3));
        console.log("Length " + word.length);
    };
    StringManipulations.prototype.printWithSpace = function (sentence) {
        console.log("letters with space " + sentence.split("").join(" "));
    };
    StringManipulations.prototype.findVowel = function (str) {
        for (var i = 0; i < str.length; ++i) {
            console.log(str[i]);
            if (str[i].toLowerCase() == "a" || str[i].toLowerCase() == "e" || str[i].toLowerCase() == "i" || str[i].toLowerCase() == "o" || str[i].toLowerCase() == "u") {
                console.log(str[i]);
            }
        }
    };
    return StringManipulations;
}());
var ref = new StringManipulations();
ref.print("ProGrads");
ref.printWithSpace("ProGrads");
ref.findVowel("ProGrads");
//progression 4
var NumbersManipulations = /** @class */ (function () {
    function NumbersManipulations() {
    }
    NumbersManipulations.prototype.findPrime = function (num) {
        var m = Math.floor(num / 2);
        var flag = 0;
        if (num == 0 || num == 1) {
            console.log("not prime");
        }
        else {
            for (var i = 2; i <= m; ++i) {
                if (num % i == 0) {
                    console.log(num + " : is not prime number");
                    flag = 1;
                    break;
                }
            }
        }
        if (flag == 0) {
            console.log(num + " : is prime number ");
        }
    };
    NumbersManipulations.prototype.findMagic = function (num) {
        if (num % 9 == 1) {
            console.log(num + " is Magic number");
        }
        else {
            console.log(num + " is not Magic number");
        }
    };
    return NumbersManipulations;
}());
var ref1 = new NumbersManipulations();
ref1.findMagic(114);
ref1.findPrime(114);
