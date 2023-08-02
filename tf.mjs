// packaging TFjs ES6 dependencies

/*
If I'm just building a CNN, the tensor, tidy, sequential, 
layers, train and metrics are the modules I typically import.
*/

import {tensor, tidy, sequential, 
layers, train, metrics} from 'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.10.0/+esm'

/*
layers - add layers onto the sequential model, like conv2d, dense, maxPool2d etc.
train - has the optimizers to attach to the model
metrics - to compute accuracy, loss, cross-entropy etc. during model training
*/

//import {tensor, tidy, sequential, 
//layers, train, metrics} from 'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.10.0/+esm'

// documentation - https://js.tensorflow.org/api/latest/

const loaded = Date()

function test(){
    // something interresting
    //tf
    //debugger
    console.log(`tf.mjs loaded at\n${loaded}`)
} 

export {
    test,
    tensor,
    tidy,
    sequential,
    layers,
    train,
    metrics,
}