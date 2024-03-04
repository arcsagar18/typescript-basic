const mathOp = (val1: number,val2 : number, op: string):string => {
    switch (op) {
        case 'add':
            
          return `addtion is = ${val1 + val2}`
    
        case 'sub':
            
          return (val1 - val2).toString();
    
        case 'mul':
            const opMul = val1 * val2;

          return opMul + ''
    
        case 'div':
            
          return (val1 / val2).toString()
    
        default:
           return `${val1} , ${val2},  ${op} - something went wrong`
    }
}


const main = () => {
    const output: string = mathOp(2,3,'add1');
    console.log('output',output)
}

main()