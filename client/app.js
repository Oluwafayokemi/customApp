// implementation using list.js
const options = {
  valueNames: ['username', 'age'],
  item: '<li><h3 class="username"></h3><p class="age"></p></li>'
};

const values = [
  { username: 'Timber', age: 32 }
  , { username: 'John', age: 10 },
];


// implementation appending onclick listener to button
const appButton = document.querySelector('#my-app')
const chartGraph = document.querySelector('#line-graph')
const chartButton = document.querySelector('#line-btn')
const listItem = document.querySelector('.list')

const url = 'http://localhost:3000'

const fetchData = {
  method: 'POST',
  body: [],
  headers: new Headers()
}

const getApp = async () => {
  try {
    listItem.style.display = 'block'
    if (chartGraph.style.display !== 'none') {
      chartGraph.style.display = "none"
    }
    const studentList = new List('student-list', options, values);
    const response = await fetch(url, fetchData)
    const data = await response.json()
    console.log(data, 'no need to connect to listjs')
  }
  catch (err) {
    throw new Error(err, ' Perhaps you could try again')
  }
}

const displayChart = async () => {
  try {
    if (listItem.style.display !== 'none') {
      listItem.style.display = 'none'
    }
    chartGraph.style.display = "block"
  }
  catch (err) {
    throw new Error()
  }
}
appButton.addEventListener('click', getApp)
chartButton.addEventListener('click', displayChart)