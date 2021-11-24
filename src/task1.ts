const readline = require('readline');

function askForInput(query: string) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise<string>(resolve => rl.question(query, (ans: string) => {
        rl.close();
        resolve(ans);
    }))
}

async function run() {
  let str = '';
  while (str !== '/q') {
    str = await askForInput("Enter any text, please: ");
    console.log(str.split('').reverse().join(''));
  }
  
}

run();
