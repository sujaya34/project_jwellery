import React, { lazy, Suspense } from "react";

import Cd1 from "../../../Assets/images/cd1.PNG";
import Cd2 from "../../../Assets/images/cd2.PNG";
import Cd3 from "../../../Assets/images/cd3.PNG";
import Cd4 from "../../../Assets/images/cd4.PNG";
import Cd5 from "../../../Assets/images/cd5.PNG";
import Cd6 from "../../../Assets/images/cd6.PNG";
import Cd7 from "../../../Assets/images/cd7.PNG";
import Cd8 from "../../../Assets/images/cd8.PNG";
import Cd9 from "../../../Assets/images/cd9.PNG";
import Cd10 from "../../../Assets/images/cd10.PNG";
import Cd11 from "../../../Assets/images/cd11.PNG";
import Cd12 from "../../../Assets/images/cd12.PNG";
import "../../../Assets/css/styling.css";
import { useState } from "react";
// const LazyCard = lazy(() => import("./LazyCard"));
function JwelleryCard({ setShowCardDetails, setShowCards, setSelectedCards }) {
  const [userList, setUserList] = useState([
    {
      id: 1,
      imageUrl: [Cd1, Cd2, Cd3, Cd4],
      title: "The Butterfly Flutter- Golden Pearl Bracelet",
      price: "₹249.00",
      offer: "₹89.00",
      availability: "In stock",
    },
    {
      id: 2,
      imageUrl: [Cd2, Cd1, Cd5, Cd3],
      title: "The Butterfly Flutter- Golden Pearl Bracelet",
      price: "₹249.00",
      offer: "₹89.00",
      availability: "In stock",
    },
    {
      id: 3,
      imageUrl: [Cd3, Cd1, Cd5, Cd3],
      title: "The Butterfly Flutter- Golden Pearl Bracelet",
      price: "₹249.00",
      offer: "₹89.00",
      availability: "In stock",
    },
    {
      id: 4,
      imageUrl: [Cd4, Cd2, Cd5, Cd3],
      title: "The Butterfly Flutter- Golden Pearl Bracelet",
      price: "₹249.00",
      offer: "₹89.00",
      availability: "In stock",
    },
    {
      id: 5,
      imageUrl: [Cd5, Cd4, Cd5, Cd3],
      title: "The Butterfly Flutter- Golden Pearl Bracelet",
      price: "₹249.00",
      offer: "₹89.00",
      availability: "In stock",
    },
    {
      id: 6,
      imageUrl: [Cd6, Cd2, Cd5, Cd3],
      title: "The Butterfly Flutter- Golden Pearl Bracelet",
      price: "₹249.00",
      offer: "₹89.00",
      availability: "In stock",
    },
    {
      id: 7,
      imageUrl: [Cd7, Cd2, Cd4, Cd3],
      title: "The Butterfly Flutter- Golden Pearl Bracelet",
      price: "₹249.00",
      offer: "₹89.00",
      availability: "In stock",
    },
    {
      id: 8,
      imageUrl: [Cd8, Cd2, Cd5, Cd3],
      title: "The Butterfly Flutter- Golden Pearl Bracelet",
      price: "₹249.00",
      offer: "₹89.00",
      availability: "In stock",
    },
    {
      id: 9,
      imageUrl: [Cd9, Cd2, Cd5, Cd3],
      title: "The Butterfly Flutter- Golden Pearl Bracelet",
      price: "₹249.00",
      offer: "₹89.00",
      availability: "In stock",
    },
    {
      id: 10,
      imageUrl: [Cd10, Cd2, Cd5, Cd3],
      title: "The Butterfly Flutter- Golden Pearl Bracelet",
      price: "₹249.00",
      offer: "₹89.00",
      availability: "In stock",
    },
    {
      id: 11,
      imageUrl: [Cd11, Cd2, Cd5, Cd3],
      title: "The Butterfly Flutter- Golden Pearl Bracelet",
      price: "₹249.00",
      offer: "₹89.00",
      availability: "In stock",
    },
    {
      id: 12,
      imageUrl: [Cd12, Cd2, Cd5, Cd3],
      title: "The Butterfly Flutter- Golden Pearl Bracelet",
      price: "₹249.00",
      offer: "₹89.00",
      availability: "In stock",
    },
  ]);
  function showDetails(id) {
    setShowCardDetails(true);
    setShowCards(false);
    userList.map((item) => {
      if (item.id === id) {
        setSelectedCards(item);
      }
    });
  }
  // return (
  //   <div className="card-list d-flex justify-content-center mt-4">
  //     {userList.map((userList) => (
  //       <Suspense key={userList.id} fallback={<div>Loading...</div>}>
  //         <LazyCard
  //           imageUrl={userList.imageUrl[0]}
  //           title={userList.title}
  //           price={userList.price}
  //           offer={userList.offer}
  //         />
  //       </Suspense>
  //     ))}
  //   </div>
  // );
  return (
    <div className="card-list d-flex justify-content-center mt-4">
      {userList.map((userList) => (
        <div
          key={userList.id}
          className="card  animate-card"
          id={`card-${userList.id}`}
          onClick={() => {
            showDetails(userList.id);
          }}>
          <img
            src={userList.imageUrl[0]}
            alt={userList.title}
            className="card-image"
          />
          <div className="card-content m-1">
            <p className="card-title text-uppercase">{userList.title}</p>
            <div className="flex">
              <span className="card-description price">{userList.price}</span>
              <span className="card-description">{userList.offer}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default JwelleryCard;
