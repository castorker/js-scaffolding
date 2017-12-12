import './index.css';
import {getQuibbles, deleteQuibble} from './api/quibbleApi';

// Populate table of quibbles via API call.
getQuibbles().then(result => {
  let quibblesBody = "";

  result.forEach(quibble => {
    quibblesBody += `<tr>
      <td><a href="#" data-id="${quibble.id}" class="deleteQuibble">Delete</a></td>
      <td>${quibble.id}</td>
      <td>${quibble.category}</td>
      <td>${quibble.text}</td>
      </tr>`
  });

  global.document.getElementById('quibbles').innerHTML = quibblesBody;

  const deleteLinks = global.document.getElementsByClassName('deleteQuibble');

  // Must use array.from to create a real array from a DOM collection
  // getElementsByClassName only returns an "array like" object
  Array.from(deleteLinks, link => {
    link.onclick = function(event) {
      const element = event.target;
      event.preventDefault();
      deleteQuibble(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });
});
