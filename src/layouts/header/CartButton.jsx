import Link from "next/link";
import { Fragment, useState } from "react";
import useClickOutside from '@/lib/hooks/useClickOutside';
import Image from "next/image";
import notif_thumb_1 from '@/assets/images/content/notifications/notif-thumb-1.png';
import notif_thumb_2 from '@/assets/images/content/notifications/notif-thumb-2.png';
import notif_thumb_3 from '@/assets/images/content/notifications/notif-thumb-3.png';

const CartButton = () => {
  const [toggle, setToggle] = useState(false);
  let domNode = useClickOutside(() => {
    setToggle(false);
  });
  return (
    <>
      <div className="cart-button-cont" ref={domNode}>
        <button
          className={`cart-button cryptoki-notif-bttn ${
            toggle ? "active" : ""
          }`}
          data-target="cart-dropdown"
          onClick={() => setToggle(!toggle)}
        >
          <span className="counter">3</span>
          <svg className="crumina-icon">
            <use xlinkHref="#bag-icon" />
          </svg>
          {/*cart dropdown*/}
        </button>
        <div
          id="cart-dropdown"
          className={`cryptoki-notif-target ${toggle ? "active" : ""}`}
        >
          <div className="title">
            Your Cart <span className="colored">3</span>
          </div>
          <div className="cart-wrapper">
            {/*cart product*/}
            <div className="cart-product">
              <div className="thumb-box">
                {" "}
                <Link legacyBehavior href="/05-product-page">
                  <Image
                    src={notif_thumb_1}
                    width={50}
                    height={50}
                    alt="UI templates"
                    loading="lazy"
                  />
                </Link>{" "}
              </div>
              <div className="purchase-info">
                <div className="product-info">
                  <div className="product-title">
                    {" "}
                    <Link legacyBehavior href="/05-product-page">
                      Cryptoki NFT and Digital Market PSD Template
                    </Link>{" "}
                  </div>
                  <div className="product-price">$12.00</div>
                </div>
                <div className="product-type ui-templates">UI templates</div>
              </div>
            </div>
            {/*/cart product*/}
            {/*cart product*/}
            <div className="cart-product">
              <div className="thumb-box">
                {" "}
                <Link legacyBehavior href="/06-product-page-v2">
                  <Image
                    src={notif_thumb_2}
                    width={50}
                    height={50}
                    alt="Social graphics"
                    loading="lazy"
                  />
                </Link>{" "}
              </div>
              <div className="purchase-info">
                <div className="product-info">
                  <div className="product-title">
                    {" "}
                    <Link legacyBehavior href="/06-product-page-v2">
                      Twitter Gaming Headers Pack 04
                    </Link>{" "}
                  </div>
                  <div className="product-price">$40.00</div>
                </div>
                <div className="product-type social-graphics">
                  Social graphics
                </div>
              </div>
            </div>
            {/*/cart product*/}
            {/*cart product*/}
            <div className="cart-product">
              <div className="thumb-box">
                {" "}
                <Link legacyBehavior href="/07-product-page-v3">
                  <Image
                    src={notif_thumb_3}
                    width={50}
                    height={50}
                    alt="Coded templates"
                    loading="lazy"
                  />
                </Link>{" "}
              </div>
              <div className="purchase-info">
                <div className="product-info">
                  <div className="product-title">
                    {" "}
                    <Link legacyBehavior href="/07-product-page-v3">
                      Olympus WP - Social Networking Theme
                    </Link>{" "}
                  </div>
                  <div className="product-price">$68.00</div>
                </div>
                <div className="product-type coded-templates">
                  Coded templates
                </div>
              </div>
            </div>
          </div>
          {/*/cart product*/}
          <div className="total-price">
            <div className="heading">Cart Total</div>
            <div className="price">$120.00</div>
          </div>
          <div className="cart-buttons">
            {" "}
            <Link legacyBehavior href="27-shopping-cart">
              <a className="btn-small gradient-background btn-square">
                Go to Cart
              </a>
            </Link>{" "}
            <Link legacyBehavior href="28-checkout">
              <a className="btn-small btn-dark btn-square">Checkout</a>
            </Link>{" "}
          </div>
        </div>
      </div>
    </>
  );
};
export default CartButton;
