//console.log(`index.js loaded /n${Date()}`);

(async function(){
    //tfu = await import('./usmtf.mjs')
    tfu = await import('./tf.mjs')
    tfu.test()
})()
