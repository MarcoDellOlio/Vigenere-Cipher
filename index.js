
function encode (message, key) {
  
  const alphabet = () => {
    const array = [];
    let i = "A".charCodeAt(0);
    let j = "Z".charCodeAt(0);
    for (; i <= j; ++i) {
        array.push(String.fromCharCode(i).toLowerCase());
    }
    return array;
  }

 const vigenereTable  = () => {
   const grid = [];
   
   for (let i = 0; i < alphabet().length; i++) {
    grid.push(alphabet().slice(i).concat(alphabet().splice(0,i)))
   }
   
   return grid
 }
 
  const encodingKey  = () => {
    const array = []
    for(let i = 0; i <= message.length; i++) {
      array.push(key[i%key.length])
    }
    
    return array
  }
  
  const encodedMessage = []
  
  for (let i = 0; i < message.length; i++) {
    encodedMessage.push(vigenereTable()
      [alphabet().indexOf(encodingKey()[i])]
      [alphabet().indexOf(message.toLowerCase()[i])]
    )
  }
  
return encodedMessage
  
}


console.log(encode("attackatdawn", "banana"))