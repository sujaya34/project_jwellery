import React from "react";
import { useState } from "react";
function CardDetail({ selectedCards }) {
  const [mainImageSrc, setMainImageSrc] = useState(selectedCards.imageUrl[0]);

  const handleImageClick = (imageSrc) => {
    setMainImageSrc(imageSrc);
  };
  return (
    <>
      <div class="header text-center fw-5 fs-4 p-2">{selectedCards.title}</div>
      <nav className="bread bg-light " aria-label="breadcrumb">
        <ol class="breadcrumb ms-5 p-2">
          <li class="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Library
          </li>
        </ol>
      </nav>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-xs-12 ">
            <div className="col-12  mb-1">
              <div className="lightbox">
                <img
                  src={mainImageSrc}
                  alt="Gallery image 1"
                  className="ecommerce-gallery-main-img active w-100"
                />
              </div>
            </div>
            <div className="small-images d-flex">
              {selectedCards.imageUrl.map((image, index) => (
                <div key={index} className="col-3 mt-1">
                  <img
                    src={image}
                    alt={"Gallery image " + (index + 1)}
                    className={
                      "w-100 " + (mainImageSrc === image ? "selected" : "")
                    }
                    onClick={() => handleImageClick(image)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12 ">
            <div className="flex fs-4 pb-3">
              <span className="price">{selectedCards.price}</span>
              <span className="offer">{selectedCards.offer}</span>
            </div>
            <div className="flex pb-3">
              <span className="Qty">Qty</span>
              <span>
                <select className="form-select">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </span>
              <button className="btn btn-add text-white px-2">
                ADD TO BAG
              </button>
              <div className="icons-h">
                <i className="bi bi-heart"></i>
              </div>
              <div className="icons-w">
                <i className="bi bi-whatsapp"></i>
              </div>
            </div>
            <div className="flex pb-4">
              <button
                type="button"
                className="btn btn-txt"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop">
                SIZE CHART
              </button>

              <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel">
                        Size Guide
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <h5>Rings </h5>
                      <p>
                        All our Rings come in Adjustable size. Therefore, you no
                        longer need to worry about the size of the ring as all
                        rings would fit your or your loved one's finger. Our
                        Rings are open-ended from one end so you can adjust the
                        size with a slight pressure.
                      </p>
                      <h5>Neckpieces</h5>
                      <p>
                        All neckpieces have an adjustable chain which allow them
                        to be easily adjusted as per your requirement.
                      </p>
                      <h5>Bracelets & Anklets</h5>
                      <p>
                        All bracelets and Anklets come with an adjustable chain
                        which allow them to be easily adjusted as per your
                        requirement. Earrings All earrings are meant to fit
                        everybody.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="btn btn-txt"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop1">
                DELIVERY AND RETURN
              </button>
              <div
                className="modal fade"
                id="staticBackdrop1"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel1"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel1">
                        DELIVERY AND RETURN DETAILS
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <h5>
                        How long will it take for my order to be delivered?
                      </h5>
                      <p>
                        From the date of placing the order, It takes 3-7 days
                        for the order to be delivered based upon your location.
                      </p>
                      <h5>What Payment methods are available?</h5>
                      <p>
                        You can pay via Credit Cards, Debit Cards, Netbanking,
                        Mobile Wallets or Cash on Delivery.
                      </p>
                      <h5>Can I get my order delivered earlier?</h5>
                      <p>
                        We ship the order within 24-48 hours after you place the
                        order. The rest of the time is taken by the courier
                        companies. Therefore, it's not possible for us to
                        deliver your orders any earlier than that.
                      </p>
                      <h5>Can I get my orders delivered at a specific time?</h5>
                      <p>
                        Delivering at a specific time may not always be an
                        option from courier services due to their schedules. The
                        delivery person will call you at the time of delivery.
                        You can inform him of your availability and co-ordinate
                        with him. If you are unable to contact him, please drop
                        us an email letting us know of your availability.
                      </p>
                      <h5>Can I return my order if I don't like it?</h5>
                      <p>
                        Absolutely. We have a no-questions asked exchange
                        policy. All you have to do is inform us within 48 hours
                        after receiving the order and make sure the product has
                        not been used.
                      </p>
                      <h5>How do I inform you about returning my Order?</h5>
                      <p>
                        Here are methods to return an order.<br></br> 1. Go to
                        the returns section in My account and select the order
                        and product you want to return and place a return
                        request.
                        <br></br>2. Drop a message on whatsapp at 8882188858
                        with your order number.<br></br>
                        3. Call us on 8882188858 between 11am and 6pm.<br></br>{" "}
                        4. Drop an email at care@everstylish.com.
                      </p>
                      <h5>
                        How do I exchange my product after I have returned it?
                      </h5>
                      <p>
                        Once we receive your product, our team will check that
                        the product has not been used and provide you with store
                        credits. You can use these store credits at any time in
                        the future while placing your new order.
                      </p>
                      <h5>Can I get a refund instead of store credits?</h5>
                      <p>
                        You can get a refund only if you have made online
                        payment. In such a case, we will transfer the amount
                        back to the account where the payment was originally
                        made from. In cases of orders paid with cash on
                        delivery, we are only able to pay store credits.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="txt">
              Availability: {selectedCards.availability}
            </div>
            <div className="txt">SKU: JEW1104455</div>
            <div className="txt">
              Dispatch Time : Between 31-07-2023 To 02-08-2023
            </div>
          </div>
        </div>
        <div className="text-center mt-5 mb-4">
          <button className="btn btn-outline-dark rounded-pill">
            Care and Handling
          </button>
        </div>
        <div className="text-secondary txt-detail">
          <p>
            We know how much you love our jewellery so we have created a small
            guide as to how you can make your jewellery last a long time.{" "}
          </p>
          <div className="fw-bold">
            Fashion jewelry tarnishes when exposed to moisture, oils, salts and
            acids. Keep your jewellery tarnish free by keeping it dry.
          </div>
          <div>Don't Wash Dishes or do Laundry With Your Jewelry on.</div>
          <div>Don't Wear Jewelry In Pool or at the Spa.</div>
          <div>Don't Put on Lotion or Perfume with your Jewelry on.</div>
          <div>
            Dry your hands before handling,or putting on, any piece of fashion
            jewelry from your collection.
          </div>
          <div>
            {" "}
            Remove your jewelry before showering, swimming or exercising.
          </div>
          <div>
            Thoroughly wipe each piece of jewelry with a soft, clean cloth as
            soon as you remove it.
          </div>
          <div>
            {" "}
            The goal is to remove any oil, salt or acid contaminants and to dry
            the piece.
          </div>
          <div className="fw-bold"> Wear it last, and take it off first. </div>
          <div>
            {" "}
            Put Your Jewelry on After You Put Your Clothes on and Before Your
            Take Your Clothes Off. An accidental pull on the chain can break
            your favourite necklace.
          </div>
          <div>
            When performing activities such as laundry, cooking, or gardening,
            remove your jewelry to prevent physical damage or exposure to
            cleaning chemicals or cleaning fluids.
          </div>
          <div>
            Put Jewelry On After Applying Hairspray and Makeup. This goes back
            to keeping your jewelry dry. Perfumes, hairspray, lotion and makeup
            usually contains harsh chemicals that can damage your beautiful
            jewelry.
          </div>
          <div className="fw-bold">
            Store your fashion jewellery in a soft dry place to avoid damage due
            to moisture in the air.
          </div>
          <div>
            Store your jewelry in a j ewelry box or other secure container.
          </div>{" "}
          <div>
            You can also store your jewelry in a silk or velvet pouch and put
            each pouch in a decorative shoe box.
          </div>
          <div>Avoid Air! The air around us is what makes metal tarnish.</div>
          <div>
            We recommend using a ziplock or sandwich bag with the air squeezed
            out to prevent oxidisation.
          </div>
        </div>
      </div>
    </>
  );
}

export default CardDetail;
