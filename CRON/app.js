var cron = require('node-cron')

// cron.schedule('*/2 * * * * *', function(){
//     console.log('Hello there')
// })


cron.schedule('*/2 * * * * *', function(){
    var shell = require('./child_helper');
    var commandList = [
        "node ts-app"
    ]
   shell.series(commandList, function(err){
       console.log('done')
   })

})



