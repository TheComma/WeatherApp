var names = ['Tadas','Jonas','Petras'];

names.forEach(function(name){
  console.log('forEach',name);
})

names.forEach((name) => {
  console.log('arrow',name);
});
