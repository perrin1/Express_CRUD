// const mongoose =  require('mongoose');
// const winson = require('winston');

// module.exports = () => {
//     mongoose.connect('mongodb://127.0.0.1:27017/mvcapi', {
//         userNewUrlParser : true,
//         userUnifiedTopology: true,
//         userFindAnModify:true,
//         useCreateIndex:true
//     }).then(()=>winson.info('Connect')).catch((err) => {
//         console.log('Error in DB connection: ' + err);
//     });
// } 

const mongoose =  require('mongoose');
const winson = require('winston');

mongoose.connect('mongodb://127.0.0.1:27017/mvcapi').then(()=>winson.info('Connect')).catch((err) => {
    console.log('Error in DB connection: ' + err);
});
 