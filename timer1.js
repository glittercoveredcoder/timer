//process.stdout.write('\x07');
let args = process.argv.splice(2);
for (let times of args){
  if (times > 0) {
  setTimeout(() => {
  process.stdout.write('\x07')
  }, times * 1000)
  } 
};
