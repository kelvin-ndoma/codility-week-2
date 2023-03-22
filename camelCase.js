String.prototype.camelCase = function() {

    const words = this.split(' ');
    const capitalized = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    
    return capitalized;
  }
  console.log("hello case".camelCase());
  console.log("camel case word".camelCase())
  console.log("testing  for many words".camelCase());