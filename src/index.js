import './index.css';
import {getQuibbles} from './api/quibbleApi';

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
});
