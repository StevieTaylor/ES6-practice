const flatten = (array: any[]) => {
    let res: any[];
    array.forEach((item) => {
        if (Array.isArray(item)) {
            res = res.concat(flatten(item))
        } else {
            res.push(item);
        }
    })
    return res;
}
const oriArray = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "jack" }];
console.log(flatten(oriArray));