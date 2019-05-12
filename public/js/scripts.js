fetch('http://localhost:3000/api/todos')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {

    //Order items in descending order based on id
    var list = myJson.sort(function(a, b){return b.id - a.id;});

    //Get the total number of items
    var size = list.length;

    //Display number of completed items in array
    document.getElementById("completed").innerHTML = checkCompleted(list, size);

    //Display total number of items
    document.getElementById("total").innerHTML = size;

    //Displaying items of array
    displayList(list, size);
  });

  //Counting the number of completed items
  function checkCompleted(arrayToCheck, value){
    var count = 0;
    for (var i = 0; i < value; i++) {
      if (arrayToCheck[i].completed) {
        count++;
      }
    }
    return count;
  }

  //Display all items in unordered list based on title, removing special characters including speech marks and making text gold for completed items
  function displayList(arrayToDisplay, length){
    for (var i = 0; i < length; i++) {
      var node = document.createElement("LI");
      var textnode = document.createTextNode(JSON.stringify(arrayToDisplay[i].title).replace(/[\[\]"]+/g,""));
      node.appendChild(textnode);
      document.getElementById("items").appendChild(node);
      if (JSON.stringify(arrayToDisplay[i]).includes("true")) {
        node.style.color = "#f4d211";
      }
    }
  }
