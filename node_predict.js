console.log('Start');

setTimeout(() => console.log('setTimeout 1'), 0);

Promise.resolve().then(() => console.log('Promise 1'));
process.nextTick( () => {
  console.log("nextTick 1")
})


const a = new Promise((resolve, reject) => {
  console.log('Promise 2');
  resolve();
}).then(() => console.log('Promise 3'));
a.then( () => {
  console.log("a")
  Promise.resolve().then(() => console.log('aa'));
})
Promise.reject().catch(() => console.log('Promise 4'));

setTimeout(() => console.log('setTimeout 2'), 0);

setImmediate(() => console.log('setImmediate'));

setImmediate(() => console.log('setImmediate 2'));

setImmediate(() => console.log('setImmediate 3'));

setImmediate(() => console.log('setImmediate 4'));

Promise.resolve().then(() => console.log('Promise 5'));

Promise.resolve().then(() => console.log('Promise 6'));

Promise.resolve().then(() => console.log('Promise 7'));

Promise.resolve().then(() => console.log('Promise 8'));

Promise.resolve().then(() => console.log('Promise 9'));
process.nextTick( () => {
  console.log("nextTick 2")
})
async function logAsync() {
Promise.resolve().then(() => console.log('Promise 90'));
console.log( "async 1")
return Promise.resolve().then(() => console.log("a1 before"))
}
const p = logAsync()
p.then( () => {
  console.log( "async 1 then")
})
Promise.resolve().then(() => console.log('Promise 10')).then( () => console.log("p10"));
p.then( () => {
  console.log( "async 1 then 2")
})
console.log('End');
function mt() {
  process.nextTick(() => {
    console.log('Microtask Queue:');
    console.log(process._tickInfo ? process._tickInfo : 'Empty');
    mt()
  });
}

// mt()
