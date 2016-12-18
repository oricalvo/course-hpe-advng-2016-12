var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
main();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield runTask1();
            yield runTask2();
            yield runTask3();
            console.log("OK");
        }
        catch (err) {
            console.log("Error: " + err.message);
        }
    });
}
function runTask1() {
    return new Promise(function (resolve, reject) {
        console.log("before setTimeout");
        setTimeout(function () {
            console.log("ON setTimeout");
            resolve(42);
        }, 1500);
    });
}
function runTask2() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject(new Error("Task2 failed"));
        }, 1500);
    });
}
function runTask3() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(42);
        }, 1500);
    });
}
//# sourceMappingURL=app.js.map