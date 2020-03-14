$(function () {
  $("#search").submit((event) => {
    event.preventDefault()
    console.log("submitting form")
    const input = $("#query").val()
    console.log(input)
    search(input)
  })

  function search(query) {
    const url = "https://api.openweathermap.org/data/2.5/weather"
    const apiKey = "438ceeb359013e6105d226483449bbc1"

    $.ajax({
        url: url,
        type: "GET",
        data: { appid: apiKey, q: query }
      })
      .done((response) => {
        console.log(response.list)

        displayResults(response.list)
      })
      .fail(() => {
        alert('error occurred')
      })
  }
  // <th>City Name</th>
  // <th>Current Temperate (in Fahrenheit)</th>
  // <th>Weather Description</th>
  // <th>Min temp (in Fahrenheit)</th>
  // <th>Max temp (in Fahrenheit)</th>

  function displayResults(results) {
      const resultRows = results.map((result) => {
          `
          <tr>
            <td>${result.main.temp}</td>
            <td>${result.main.temp}</td>
            <td>${result.weather.description}</td>
            <td>${result.list.temp_min}</td>
            <td>${result.list.temp_max}</td>
          </tr>s
          `

      })
      console.log(resultRows)
      $('tbody').html(resultRows)
  }
})
