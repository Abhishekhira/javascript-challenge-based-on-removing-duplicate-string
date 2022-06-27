console.log('in this file we have discussed how we can eliminate duplicate character of string in javascript')

function dupStr(str) {
  
    let a=[]
    for (let i = 0; i < str.length; i++) {
       a.push(str.charAt(i))
      
    }
    let c=new Set(a)
    let g=[...c]
    let e=g.join()

    return e;
}

let d=dupStr('adsjfdsfsfjsdjfhacabcsbajda')
console.log(d)