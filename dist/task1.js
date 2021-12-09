var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const readline = require('readline');
function askForInput(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise(resolve => rl.question(query, (ans) => {
        rl.close();
        resolve(ans);
    }));
}
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        let str = '';
        while (str !== '/q') {
            str = yield askForInput("Enter any text, please: ");
            console.log(str.split('').reverse().join(''));
        }
    });
}
run();
//# sourceMappingURL=task1.js.map