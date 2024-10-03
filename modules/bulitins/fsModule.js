//Sync FS
const { readFileSync, writeFileSync, write } = require('fs')

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

//console.log(first, second)
writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`,
{ flag: 'a' })

//Async FS
const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf-8', (err, res) => {
    if (err) {
        console.log(err)
    }
    const first = res;
    readFile('./content/second.txt', 'utf-8', (err, res) => {
        if (err) {
            console.log(err)
        }
        const second = res;
        writeFile('./content/result-async.txt', 
            `Here is the result: ${first}, ${second}`
        ,(err, res)=>{
            if(err) {
                console.log(err)
            }
            console.log(res);
        })
    })
})