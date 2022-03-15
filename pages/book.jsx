import Cookies from "cookies";
import React, { useEffect, useState } from "react";
import MapSection from "../components/book/MapSection.component";

const BookingPage = () => {
  return (
    <section id="book" className="flex h-5/6 flex-col justify-between">
      <MapSection />
    </section>
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

export default BookingPage;
