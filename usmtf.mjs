console.log(`usmtf.mjs loaded /n${Date()}`);

const loaded = Date()

//import tensorflowtfjs from 'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.9.0/+esm'

let tf = await import('https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.9.0/+esm')

async function test(){
    tf
    4
}

export{
    loaded,
    //tensorflowtfjs,
    tf,
    test,
}