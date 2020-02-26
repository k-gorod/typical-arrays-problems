
exports.min = function min (array) {
  if(!array){return 0}
  var n=array[0];
  array.forEach(element => {
    if(element<n){n=element}
  });
  return array.length==0?0:n;
}

exports.max = function max (array) {
  if(!array){return 0}
  var n=array[0];
  array.forEach(element => {
    if(element>n){n=element}
  });
  return array.length==0?0:n;
}

exports.avg = function avg (array) {
  if(!array){return 0}
  var n=0;
  array.forEach(element=>{n+=element});
  return array.length==0?0:n/array.length;
}
