function processData(input) {
    const arr = input.split('\r\n')
    const u = w => w.charAt(0).toUpperCase() + w.slice(1)
    const l = w => w.charAt(0).toLowerCase() + w.slice(1)
    for (a of arr) {
        const [sc, mcv, name] = a.split(';')
        const s = sc === 'S'
        let r = name.split(s ? (/(?=[A-Z])/) : ' ').map(s ? l : u).join(s ? ' ' : '')
        if (mcv === 'M') r = s ? r.slice(0, -2) : r + '()'
        if (mcv !== 'C') r = l(r)
        console.log(r)
    }
} 


console.log(processData('S;C;LargeSoftwareBook'))