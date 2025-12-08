/*For a given array with prices of 5 items [250,645,300,900,50]. All items have an offer of 10% OFF on them
Change the array to store final price after applying offer*/
let items=[250,645,300,900,50];
idx=0;
for (let val of items)
{
    console.log(`value at index ${idx} = ${val}`)
    let offer=(10/100)*val;
    // console.log(offer);
    items[idx]=items[idx]-offer;
    console.log(`value after offer ${items[idx]}`);
    idx++;
}
// console.log(items);
