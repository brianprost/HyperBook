const axios = require("axios");

const base_url = "https://hyperbookappapi.azurewebsites.net";

export async function loginUser(p1, p2) {
  const response = await axios.get(
    base_url + `/api/HyperBook/Login?email=${p1}&password=${p2}`
  );
  return response;
}

export async function getUser(id) {
  const response = await axios.get(
    base_url + `/api/HyperBook/GetAccountInfo?userId=${id}`
  );
  return response;
}

export async function getPodSchedule(depCity, desCity) {
  const response = await axios.get(
    base_url +
      `/api/HyperBook/GetPodSchedules?cityId=${depCity}&cityDestinationId=${desCity}`
  );
  return response;
}

export async function getTrips(id) {
  const response = await axios.get(
    base_url + `/api/HyperBook/GetTrips?userId=${id}`
  );
  return response;
}

export async function getCities() {
  const response = await axios.get(
    base_url + `/api/HyperBook/GetCitiesWithInfo`
  );
  return response;
}

export async function addTrip(userId, podId, statusId) {
  const trip = { userId: userId, podSchedule: podId, statusId: statusId };
  const response = await axios.post(base_url + `/api/Insert/AddTrip`, trip);
  return response;
}
