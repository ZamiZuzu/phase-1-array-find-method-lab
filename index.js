// function findWin(element, index, array) {
//     return (element === "W")
// }

// function superbowlWin(s){
//     s.find( function(t) { return t === "W" });
    
// }

superbowlWin = (s) => {
    const result = s.find( s => s.result === "W");
    return !!result ? result.year : undefined;
}