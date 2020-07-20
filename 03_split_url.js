const url = require('url');
const addr = 'https://localhost:3000/default.htm?year=2017&month=february';
const q = url.parse(addr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

const qdata = q.query;
console.log(qdata.month);