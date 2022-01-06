var repoList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  // replace `octocat` with anyone else's GitHub username
  var requestUrl = 'https://api.github.com/users/octocat/repos';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
       // Check the data
       console.log(repos)

       //parsing the data
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        //access
        listItem.textContent = data[i].html_url;
        //update the page
        repoList.appendChild(listItem);
      }
    });
}

fetchButton.addEventListener('click', getApi);
