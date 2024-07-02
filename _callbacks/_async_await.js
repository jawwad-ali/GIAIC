"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//ASYNC
const getData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let res = yield Cricket();
        console.log(res);
    }
    catch (err) {
        console.log(err);
    }
    finally {
        console.log("Flight Pakro");
    }
    return "Into the Next tournament";
});
getData();
const Fn = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield getData();
        console.log("data", data);
    }
    catch (err) {
        console.log(err);
    }
});
const res = Fn();
console.log(res);
