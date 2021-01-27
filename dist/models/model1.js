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
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = void 0;
const dbConfig_1 = require("./dbConfig");
const addUser = (userName, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield dbConfig_1.default.run('INSERT INTO user VALUES ($name")', {
            $name: userName
        });
        const data = yield result;
        console.log(data, result);
    }
    catch (err) {
        console.log(err);
    }
});
exports.addUser = addUser;
//# sourceMappingURL=model1.js.map