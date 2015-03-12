function findPermutations(s) {
  //console.log('s = ' + s);
  if(!s) {
    return [];
  }
  var len = s.length, res = [];
  if(len === 1){
    return [s];
  }
  
  for(var i = 0; i < len; i++) {
    var currentHead = s[i];
    var subStr = s.slice(0, i) + s.slice(i + 1, len);
    var tmpOutput = findPermutations(subStr), tmpOutputLen = tmpOutput.length;
    for(var j = 0; j < tmpOutputLen; j++) {
      res.push(currentHead + "" + tmpOutput[j]);
    }
  }
  //console.log('res ', res);
  return res;
}

function permute(s, filter) {
  var p = findPermutations(s, {}),
    res = [];
  for(var i = 0; i < p.length; i++) {
    if(p[i].indexOf(filter) >= 0){
      res.push(p[i]);
    }
  }
  return res;
}

var input = "edcba";
var filter = "bc";
var output = permute(input, filter);
console.log(output);
