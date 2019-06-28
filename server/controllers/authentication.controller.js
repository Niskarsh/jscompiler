// import Promise from 'bluebird'
// import cmd from 'node-cmd'
// import _eval from 'eval'
import bytenode from 'bytenode'
import fs from 'fs'
const { StringDecoder } = require('string_decoder');


export const signin = async (req, res) => {
    const decoder = new StringDecoder('utf8');
    const {result} = req.body

    let fileStream = fs.createWriteStream('result.txt')
    let sm = process.stdout.write
    process.stdout.write = fileStream.write.bind(fileStream);
    if(!fileStream.write('')) {
        fileStream.once('drain')
    }
    // process.stdout.fflush
    // let resum= 
    bytenode.runBytecode(bytenode.compileCode(result))
    process.stdout.write = sm
    fs.readFile('result.txt',(err, data)=> {
        // console.log(decoder.write(data))
        
        res.send(data)
    })
    // process.stdout.pipe(fileStream)
    

    // var resu = _eval('() > console.log("hi")')
    // var resu = cmd.run("ls")
    
    // await cmd.get('console.log("hi")', (err, data, stderr) => {
    //     if (err) {
    //         res.status(500).send(`cmd err ${stderr}`)        
    //     } else {
    //         res.send(`cmd data ${data}`)
    //     }
    // })
    // const getAsync = Promise.promisify(cmd.get, { multiArgs: true, context: cmd })

    //     await getAsync('console.log("Hi")').then(data => {
    //         res.send(`cmd data ${data}`)
    //     }).catch(err => {
    // console.log("------------in")
    // res.status(500).send(`cmd err ${err}`)
    //     })

}


export const authCORS = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, PUT');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    next()
}