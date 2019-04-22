function generateBangumiId(bangumi_array) {
    let id = 0;
    for(let i = 0; i < bangumi_array.length; i++) {
        if (i <= bangumi_array[i].id ) id++;
    }
    return id;
}
function findArrayIndexById(bangumi_array,id)   {
    for(let i = 0; i < bangumi_array.length; i++) {
        if (id === bangumi_array[i].id ) return i;
    }
    return null;
} 
export default {generateBangumiId,findArrayIndexById};