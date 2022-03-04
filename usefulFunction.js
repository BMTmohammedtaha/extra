// checking vars & object
const isEmpty = val => val == null || !(Object.keys(val) || val).length;
const isObject = obj => obj === Object(obj);
function isset(variable_name){
    if (typeof variable_name !== undefined) {
        return variable_name
      }else{
        return undefined;
      }
} 
function issetObject(object_name){
    if (object_name.hasOwnProperty('action')) {
        return object_name;
      }else{
        return undefined;
      }
}
// sort with
function sortArrayByArray(array1,array2){
  let result = [];
  array1.forEach(val => array2.includes(val) && result.push(val));
  return result;
}
// Grouped By
function groupByKey(array, key) {
    return array
      .reduce((hash, obj) => {
        if(obj[key] === undefined) return hash; 
        return Object.assign(hash, { [obj[key]]:( hash[obj[key]] || [] ).concat(obj)})
      }, {})
}
// remove Duplicates
function removeDuplicates(objDuplicate, key) {
  return [
    ...new Map(objDuplicate.map(item => [key(item), item])).values()
  ]
}
// convert By Property
function convertByProperty(originalObject, groupByProperty, secondProperty) {  
    var finalArray = [];  
    var uniqueVals = [];  
    originalObject.map((i) => {  
        var existingVals = uniqueVals.filter((j) => {  
            return (i[groupByProperty] == j)  
        });  
        if (existingVals.length == 0) {  
            uniqueVals.push(i[groupByProperty]);  
        }  
    });  
    uniqueVals.map((k) => {  
        var dataObj = [];  
        var expectedObj = {};  
        var items = originalObject.filter((l) => {  
            return (l[groupByProperty] == k)  
        });  
        items.map((m) => {  
            var obj = {};  
            obj[secondProperty] = m[secondProperty];  
            obj['data'] = m.data;  
            dataObj.push(obj);  
        });  
        expectedObj[groupByProperty] = k;  
        expectedObj['data'] = dataObj;  
        finalArray.push(expectedObj);  
    });  
    return finalArray; 
}
//return an array of objects according to key, value, or key and value matching
function getObjects(obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getObjects(obj[i], key, val));    
        } else 
        //if key matches and value matches or if key matches and value is not passed (eliminating the case where key matches but passed value does not)
        if (i == key && obj[i] == val || i == key && val == '') { //
            objects.push(obj);
        } else if (obj[i] == val && key == ''){
            //only add if the object is not already in the array
            if (objects.lastIndexOf(obj) == -1){
                objects.push(obj);
            }
        }
    }
    return objects;
}
//return an array of values that match on a certain key
function getValues(obj, key) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getValues(obj[i], key));
        } else if (i == key) {
            objects.push(obj[i]);
        }
    }
    return objects;
}
//return an array of keys that match on a certain value
function getKeys(obj, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getKeys(obj[i], val));
        } else if (obj[i] == val) {
            objects.push(i);
        }
    }
    return objects;
}
//Short String
function strShort(str,n) {
 return (str.length > n) ? str.substr(0,n - 1) + '...' : str;
}
//random
function randomNumber(min,max){
  return Math.floor(Math.random()* (max - min + 1)) + min;
}
