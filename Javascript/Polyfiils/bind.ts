// Polyfill bind
/**
 * input:
 * user={
 * this.name= "Tejas",
 * }
 *
 * function getName(city,country){
 * console.log("Name:",this.name,`from ${city}, ${this.country}`);
 * }
 *
 * const name= getName.bind(user,'india','mumbai')
 * name();
 *
 * Output: Name: Tejas from mumbai, india
 */

Function.prototype.myBind = function (obj, ...args) {
  // Ensure myBind is called on a function
  if (typeof this !== "function") {
    throw new TypeError("myBind must be called on a function");
  }

  const originalFn = this;

  return function (...newArgs) {
    return originalFn.apply(obj, [...args, ...newArgs]);
  };
};

const user = {
  name: "Tejas",
};

function getName(country, city) {
  console.log("Name:", this.name, `from ${city}, ${country}`);
}

const name = getName.myBind(user, "india");

name("mumbai");

export {};
