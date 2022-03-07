import Head from "next/head";
import Link from "next/link";
import Cookies from "cookies";
import React from "react";
import { useState, useEffect } from "react";
import EditUserForm from "../components/login/EditUserForm.component";
import { getUser } from "../services/UserService";

const EditUserPage = (props) => {
  const userId = props.userId;
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser(userId)
    .then((res) => {
      if (res.status == 200 && res.statusText === "OK") {
        const user = [];
        user.push("userId", res.data.userId);
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
  }, [])
  
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

export async function getServerSideProps(context) {
    const cookies = Cookies(context.req, context.res);
    const isUser = cookies.get("isAuthenticated") ? true : false;
    //const isUser = localStorage.getItem("isAuthenticated");
    if (!isUser || isUser === "false") {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    } else {
      return {
        props: {}, // will be passed to the page component as props
      };
    }
  }

export default EditUserPage;
