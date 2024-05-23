//N1//============================
function calculate(a, b, ...args) {
    const sum = a + b;
    let product = 1;
    for (let arg of args) {
        product *= arg;
    }
    return [sum, product];
}

const result = calculate(2, 3, 4, 5);
console.log(result);  

//N2//==========================
function getCityFromUser(user) {
    const { banks } = user;
    if (!banks || !Array.isArray(banks) || banks.length < 3) {
      return undefined;
    }
  
    const [, , { address: { city } = {} } = {}] = banks;
    return city;
  }

  const user = {
    banks: [
      { address: { city: 'Telavi' } },
      { address: { city: 'Tbilisi' } },
      { address: { city: 'Rustavi' } },
    ]
  };
  
  console.log(getCityFromUser(user));


//N3//===========================

const obj1 ={
    fullname: 'Mariami',
    surname: 'Kirvalidze',
    birthdate: {
        DD:8,
        MM: "December",
        YY:1999
    }
}

const obj2 = {
    ...obj1
}

console.log(obj2)
