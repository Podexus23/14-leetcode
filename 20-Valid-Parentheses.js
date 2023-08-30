/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const type = {
        open: ['(', '{', '['],
        close: [')', '}', ']'],
        stack: []
    }
    if(s.length < 2) return false;
    if(s.length % 2 !== 0) return false;
    for(let i = 0; i < s.length; i++){
        let bracket = s[i];
        let bracketIndex;
        if(type.close.includes(bracket) && type.stack.length === 0) {
            return false;
        }
        if(type.open.includes(bracket)) type.stack.push(type.open.findIndex(e => e === bracket));
        if(type.close.includes(bracket)) {
            bracketIndex = type.close.findIndex(e => e === bracket);
            if(type.stack.at(-1) === bracketIndex) type.stack.pop();
            else return false
        }
        console.log(type.stack)
    }
    if(type.stack.length) return false
    return true;
};
