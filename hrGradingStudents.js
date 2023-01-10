/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    let result = [];
    for ( const grade of grades ) {
        if ( grade >= 38 ) {
            let nextMultipleOfFive = grade + ( 5 - grade % 5 );
            if ( nextMultipleOfFive - grade < 3 ) {
                result.push( nextMultipleOfFive );
            } else {
                result.push( grade );
            }
        } else {
            result.push( grade );
        }
    }
    return result;
}