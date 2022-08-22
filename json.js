var obj1={
    name:"person1",
    age:"5"
};
var obj2={
    age:"5",
    name:"person1"
};
JSON.stringify(Object1) === JSON.stringify(object2)
// false
_.isEqual(obnject1,object2)