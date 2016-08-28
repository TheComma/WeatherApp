// function getTempCallback (location, callback) {
//   callback(undefined, 28);
//   callback('City not found');
// }
//
// getTempCallback('Kaunas', function(err, temp){
//   if(err){
//     console.log('error',err);
//   }
//   else{
//     console.log('success',temp);
//   }
// });
//
// function getTempPromise(location){
//   return new Promise(function(resolve,reject){
//     setTimeout(function(){
//       resolve(25);
//       reject('City not found');
//     },1000);
//   });
// }
//
// getTempPromise('Kaunas').then(function(temp){
//   console.log('Promise success', temp);
// },function(err){
//   console.log('Promise error', err);
// })


//Practice

function addPromise(a,b){
  return new Promise(function(resolve,reject){
    if(typeof a === "number" && typeof b === "number"){
      resolve(a + b);
    }
    else{
      reject('One or more parameters are not numbers');
    }

  });
}

addPromise(1,2).then(function(sum){
  console.log('success',sum);
},function(err){
  console.log('error',err);
});
