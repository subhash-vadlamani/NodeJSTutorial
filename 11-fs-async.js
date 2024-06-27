const {readFile, writeFile} = require('fs');

console.log("Starting the first task")


readFile('./content/first.txt', 'utf8',(err, result) => {
    if(err){
        console.log(err)
        return;
    }
    const first = result;

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err)
            return;
        }
        const second = result;

        writeFile('./content/result-async.txt', 
        `Here is the result: ${first}, ${second}`,
        {flag: 'a'}, (err, result) => {
            if(err){
                console.log(err)
                return;
            }

            console.log(result)
            console.log("done with the first task")

        })

    })
})

console.log("Starting the next task")