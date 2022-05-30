const target = {};
({ key: target.key} = { key: '1'}); // target = {key: '1'} (A)
[, ...target.array ]= [1,2,3]; // target = {key: '1', array: [2,3]} (3)