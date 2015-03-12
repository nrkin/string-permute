function permute(s) {
  return findPermutations(s, {});
}

function findPermutations(s, wordsStore) {
  //console.log('s = ' + s);
  if(wordsStore[s]) {
    return wordsStore[s];
  }
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
    var tmpOp = findPermutations(subStr, wordsStore), tmpOpLen = tmpOp.length;
    wordsStore[subStr] = tmpOp;
    for(var j = 0; j < tmpOpLen; j++) {

      res.push(currentHead + "" + tmpOp[j]);
    }
  }
  //console.log('res ', res);
  return res;
}

var input = "abcd";
var output = permute(input);
console.log(output);
