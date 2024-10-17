module.exports = function check(str, bracketsConfig) {

  
  let stack = [];
  let bracketMap = new Map();
  let openBrackets = new Set();
  let sameBrackets = new Set();

  bracketsConfig.forEach(pair => {
    bracketMap.set(pair[1], pair[0]); 
    openBrackets.add(pair[0]); 
    if (pair[0] === pair[1]) {
      sameBrackets.add(pair[0]); 
    }
  });

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];

    if (sameBrackets.has(currentSymbol)) {
      if (stack.length > 0 && stack[stack.length - 1] === currentSymbol) {
        stack.pop(); 
      } else {
        stack.push(currentSymbol); 
      }
    } else if (openBrackets.has(currentSymbol)) {
      stack.push(currentSymbol);
    } else {
      if (stack.length === 0 || stack[stack.length - 1] !== bracketMap.get(currentSymbol)) {
        return false;
      }
      stack.pop(); 
    }
  }
  return stack.length === 0; 
};
