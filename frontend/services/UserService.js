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

export async function getDestinations(cityId) {
  const response = await axios.get(
    base_url + `/api/HyperBook/GetDestinations?cityId=${cityId}`
  );
  return response;
}

export async function addTrip(userId, podId, statusId) {
  const trip = { userId: userId, podSchedule: podId, statusId: statusId };
  const response = await axios.post(base_url + `/api/Insert/AddTrip`, trip);
  return response;
}

export async function addUser(
  firstName,
  lastName,
  email,
  password,
  addressLine1,
  addressLine2,
  city,
  state,
  zip,
  phone
) {
  const user = {
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
    addressLine1: addressLine1,
    addressLine2: addressLine2,
    city: city,
    state: state,
    zip: zip,
    phone: phone,
  };
  const response = await axios.post(base_url + `/api/Insert/AddUser`, user);
  return response;
}

export async function updateUser (
  userId,
  firstName,
  lastName,
  email,
  addressLine1,
  addressLine2,
  city,
  state,
  zip,
  phone
) {
  const user = {
    userId: userId,
    email: email,
    firstName: firstName,
    lastName: lastName,
    addressLine1: addressLine1,
    addressLine2: addressLine2,
    city: city,
    state: state,
    zip: zip,
    phone: phone,
  };
  const response = await axios.put(base_url + `/api/HyperBook/UpdateUser`, user);
  return response;
}

export async function cancelTrip(tripIdToCancel) {
  // Ref Status 1 Pending 2 Booked 3 Cancelled

  const cancelTripObject = {
    tripId: tripIdToCancel,
    refStatusId: 3,
  };

  axios
    .put(`${base_url}/api/HyperBook/UpdateTripStatus`, {
      tripId: tripIdToCancel,
      refStatusId: 3,
    })
    .then((response) => {
      window.location.reload(false);
    });
}
