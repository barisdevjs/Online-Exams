// convert 12hrs to 24 hrs

function converter (str) {
    let [number , identifier] = str.split(' ');
    let [hours, minutes] = number.split(':');
    if ( identifier === 'AM' ) return str
    if ( identifier === 'PM' ) {
        hours = String((Number(hours) +12) % 24)
        identifier = 'AM'
    }
    return hours.padStart(2,'0') + ':' + minutes +' ' + identifier;
}

console.log(converter('02:02 PM'));
console.log(converter('04:06 PM'))
console.log(converter('12:00 PM'))
console.log(converter('12:00 AM'))

