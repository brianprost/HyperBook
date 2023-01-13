import { readFileSync } from "https://deno.land/std@0.152.0/node/fs.ts";
import { writeFileSync } from "https://deno.land/std@0.152.0/node/fs.ts"

async function main(): Promise<void> {
  const usersJson = readFileSync("./UsersFromSQL.json", { encoding: "utf8" });
  const tripsJson = readFileSync("./TripsFromSQL.json", { encoding: "utf8" });
  const users = JSON.parse(usersJson);
  const trips = JSON.parse(tripsJson);

  // Find the user with the given userId
  function findUserById(userId: string): any {
    return users.find((user: any) => user.id === userId);
  }

  // Find the trips for the given user
  function findTripsForUser(userId: string): any[] {
    return trips.filter((trip: any) => trip.userId === userId);
  }

  // Nest the trips for a given user under their user object
  function nestTripsForUser(userId: string): any {
    const user = findUserById(userId);
    user.trips = findTripsForUser(userId);
    return user;
  }

  // Example usage
  // get all user ids from users json
  const userIds = users.map((user: any) => user.id);
  console.log("found users:", userIds);
  const newUserDb = new Array();
  for (const userId of userIds) {
    const userWithTrips = nestTripsForUser(userId);
    console.log("user with trips:", userWithTrips);
    newUserDb.push(userWithTrips);
  }


  // Write the data to a file
  writeFileSync("./UserWithTrips.json", JSON.stringify(newUserDb, null, 2));
  // console.log(userWithTrips);
}

main();
