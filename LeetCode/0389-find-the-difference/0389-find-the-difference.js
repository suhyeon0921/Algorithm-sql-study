var findTheDifference = function(s, t) {
    let code = 0;
    for (const c of t) code += c.charCodeAt(0);
    for (const c of s) code -= c.charCodeAt(0);
    return String.fromCharCode(code);
};