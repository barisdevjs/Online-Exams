/* function meet(intervals) {

    if (!intervals || !intervals.length) return 0;

    // sort by start time O(N log N)
    intervals.sort((a, b) => a[0] - b[0]);

    const bookingSystem = [];

    for (let [start, end] of intervals) {
        // let's find if an interval is already covering our current range start-end
        const availableRoom = bookingSystem.find(
            // a room is available if its meeting ends before the start of our current one
            (rooms) => rooms[1] <= start 
        );

        if (!availableRoom) {
            // if no interval is present, we need a new room
            bookingSystem.push([start, end]);
        } else {
            // if we have a room, let's add the time of our current meeting to extend its booking
            availableRoom[1] = end;
        }
    }
    return bookingSystem.length
}
 */

function meet(arr) {
    let dict = [];
    arr.sort((a,b) => a[0] - b[0])
    for (const [s,e] of arr) {
        const availableRoom = dict.find(
            // rooms[1] is an end of arrays
            // s is the next arr
            rooms => rooms[1] <= s
        )
        if ( !availableRoom) dict.push([s,e]);
        else availableRoom[1] = e;
        availableRoom
    }
    // dict
    return dict.length
}
console.log(meet([[5, 10], [15, 20], [0, 30]]))