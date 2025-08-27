// ## Hints ##
// Math.floor() => 4.56=4
// Math.random() =>get all random numbers from 0 : <1
// => ex:0.258 | 0.369 =>*10=>3.69 and get all random numbers from 0 : 10

export const generateOTP = (length = 6, options = { chars: false }) => {
  let otp = " ";
  let digits = "0123456789";
  let litters = "abcdefghijklmnopqrstuvwxyz";

  let characters = options.chars ? digits + litters : digits;

  for (let i = 0; i < length; i++) {
    otp += characters[Math.floor(Math.random() * characters.length)];
  }

  return otp;
};
