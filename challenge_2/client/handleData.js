var handleData = function(data) {
  var keys = [];
  var users = [];
  var csv = [['COPY AND PASTE THE TEXT BELOW INTO YOUR CSV EDITOR'], ["\n"],keys]
  // get an array of our keys
  for (var key in data) {
    keys.push(key)
  }
  //pushes a single user into users array
  var makeSingleUser = function(obj) {
    var temp = [];
    for (var key in obj) {
      if (key === "children"){
        continue;
      } else {
        temp.push(obj[key])
      }
    }
    users.push(temp)
  };
  // recurse through testData and add each object into users
  var recurse = function(obj) {
    makeSingleUser(obj)
    for (var i = 0; i < obj.children.length; i++) {
      recurse(obj.children[i])
    }
  }
  recurse(data)
  //push each user into csv
  for (var i = 0; i < users.length; i++) {
    csv.push(users[i])
  }
  //remove 'children' from keys array
  csv[2] = csv[2].slice(0, keys.length-1);
  //finally, return csv!
  return csv.join("<br />");
}
exports.handleData = handleData;
