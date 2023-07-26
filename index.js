console.log(`index.js loaded /n${Date()}`);


(async function(){
    tfu = await import('./usmtf.mjs') 
    tfu.test()
})()

