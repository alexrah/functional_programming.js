const sum = (first:number) => (second:number) => { return first + second }

console.log('sum(3)(5) =',sum(3)(5))

const add3 = sum(3);
const add5 = sum(5);

const pipe = (...fns:Array<(...args:any[])=>any>) => (x: any) => fns.reduce((y,fn) => fn(y),x)

console.log('add3(10) =',add3(10))

console.log('add5(10) =',add5(10));

const pipeAdd3Add5 = pipe(
  add3,
  add5
);

console.log('pipeAdd3Add5(10)) =', pipeAdd3Add5(10));
