function permute(s) {
  return findPermutations(s, {});
}

function findPermutations(s, wordsStore) {
  if(wordsStore[s]) {
    return wordsStore[s];
  }
  if(!s) {
    return [];
  }
  var len = s.length, res = [];
  if(len === 1){
    return res;
  }
  
  for(var i = 0; i < len; i++) {
    var subStr = s.slice(0, i) + s.slice(i + 1, len);
    console.log(subStr);
  }
  return res;
}

var input = "abcdefghij";
var output = permute(input);
console.log(output);
