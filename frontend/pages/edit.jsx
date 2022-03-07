import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import EditUserForm from "../components/login/EditUserForm.component";
import { getUser } from "../services/UserService";

const EditUserPage = (props) => {
  const userId = props.userId;
  const [user, setUser] = useState([]);

  getUser(userId)
    .then((res) => {
      if (res.status == 200 && res.statusText === "OK") {
        const user = [];
        user.push("firstName", res.data.firstName)
        user.push("lastName", res.data.lastName);
        user.push("email", res.data.email);
        const address = res.data.addressLine2
        ? res.data.addressLine2
        : "";
        user.push("addressLine1", res.data.addressLine1);
        user.push("addressLine2", address)
        user.push("city", res.data.city);
        user.push("state", res.data.state);
        user.push("zip", res.data.zip);
        user.push("phone", res.data.phone);
        setUser(user)
      }
    })
    .catch((err) => {
      console.error(err);
    });
  return (
    <div>
      <Head>
        <title>Edit User Page</title>
      </Head>
      <section id="edit">
        <EditUserForm 
          user={user}
        />
      </section>
    </div>
  );
};

export default EditUserPage;
