const {networkInterfaces} = require('os')
exports.getIp = () =>{
  const nets = networkInterfaces()
  let result;
  
  for(const name of Object.keys(nets)){
    for(let net of nets[name]){
      if(net.family === 'IPv4' && !net.internal){
        result = net.address
        break;
      }
    }
  }
  
  return result || "127.0.0.1"
}