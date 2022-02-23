import React, { useEffect, useState } from "react";

// temporarily including map on page instead of component
// import { Map } from "../components/Map.component";

import MapSection from "../components/book/MapSection.component";

const BookingPage = () => {
  return (
    <section id="book" className="flex h-5/6 flex-col justify-between">
      <MapSection />
    </section>
  );
};

export default BookingPage;
