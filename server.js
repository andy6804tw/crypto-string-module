module.exports = {
  RandomChar: (num) => {
    const string = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let str = '';
    for (let i = 0; i < num; i += 1) {
      str += string.charAt(Math.floor(Math.random() * string.length));
    }
    return str;
  }
}
