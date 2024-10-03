const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user);
// method return the system uptime in seconds

console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    released: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
};

console.log(currentOS);