function searchCity(city, callback) {
  const apiKey = "ce54f8031f66eoe3bt1a9b3dc47a23f4";
  const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(callback);
}