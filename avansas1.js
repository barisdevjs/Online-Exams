function manipulateStudentRecord(obj, operation, prop, newValue) {
    switch (operation) {
        case 'delete':
            delete obj[prop];
            break;
        case 'edit':
            obj[prop] = newValue;
            break;
            default:
                break;
    }

    return obj;
  }
  
  const obj = {
    name: 'John',
    lastName: 'Bliss',
    city: 'Florida'
  }
  
  console.log(manipulateStudentRecord(obj, "edit", "city", "Seattle"))