const sendsize = (body) => {
  let size = [];

  if (body.s) {
    size.push('s')
  }

  if (body.l) {
    size.push('l')
  }

  if (body.m) {
    size.push('m')
  }

  if (body.xl) {
    size.push('xl')
  }
  
  return size;
};

module.exports = sendsize;