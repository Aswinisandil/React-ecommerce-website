import React,{useEffect} from 'react';
import css from '../Footer/Styles.module.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const margin1 = {
        margin: " 0 150px 0 70px",
    };
    const margin2 = {
        margin: " 0 150px 0 60px",
    };
    const col = {
        color:"#f9fafa",
    }

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <footer>
        <div className={css.ftrbanner}>
          <ul className={css.ftrlist}>
            <li className={css.lis}>
              <i class="bi bi-bag-heart"></i>
              <p>EASY EXCHANGE</p>
            </li>
            <li className={css.lis}>
              <i class="bi bi-house-heart-fill"></i>
              <p>100% HANDPICKED</p>
            </li>
            <li className={css.lis}>
              <i class="bi bi-patch-check-fill"></i>
              <p>ASSURED QUALITY</p>
            </li>
          </ul>
        </div>
        <div className={css.ftrcont}>
          <div className={css.ftrmid}>
            <div className={css.ftrbodyinner}>
              <section className={css.ftrsupport}>
                <div className={css.headline}>Ajio</div>
                <div className={css.ftritems}>
                  <a href="!#">Who We Are</a>
                  <a href="!#">Join Our Team</a>
                  <a href="!#">Terms & Conditions</a>
                  <a href="!#">We Respect Your Privacy</a>
                  <a href="!#">Fees and Payments</a>
                  <a href="!#">Returns and Refunds Policy</a>
                  <a href="!#">Promotions Terms & Conditions</a>
                </div>
              </section>
              <section className={css.ftrsupport}>
                <div className={css.headline}>Help</div>
                <div className={css.ftritems}>
                  <a href="/customercare">Track Your Order</a>
                  <a href="customercare">Frequently Asked Questions</a>
                  <a href="customercare">Returns</a>
                  <a href="customercare">Payments</a>
                  <a href="customercare">Cancellations</a>
                  <a href="customercare">Customer Care</a>
                  <a href="customercare">How Do I Redeem My Coupon</a>
                </div>
              </section>
              <section className={css.ftrsupport} style={margin1}>
                <div className={css.headline}>Shop By</div>
                <div className={css.ftritems}>
                  <NavLink to={"/men"} onClick={() => window.scrollTo(0, 0)}>Men</NavLink>
                  <NavLink  to={"/women"} onClick={() => window.scrollTo(0, 0)}>Women</NavLink>
                  <NavLink to={"/kids"} onClick={() => window.scrollTo(0, 0)}>Kids</NavLink>
                  <NavLink to={"/women"} onClick={() => window.scrollTo(0, 0)}>Indie</NavLink>
                  <NavLink to={"/products" } onClick={() => window.scrollTo(0, 0)}>Stores</NavLink>
                  <NavLink to={"/products"} onClick={() => window.scrollTo(0, 0)}>New Arrivals</NavLink>
                  <NavLink to={"/products"} onClick={() => window.scrollTo(0, 0)}>Brand Directory</NavLink>
                  <NavLink to={"/"} onClick={() => window.scrollTo(0, 0)}>Home</NavLink>
                  <NavLink to={"/products"} onClick={() => window.scrollTo(0, 0)}>Collections</NavLink>
                </div>
              </section>
              <section className={css.ftrsupport} style={margin2}>
                <div className={css.headline}>Follow us</div>
                <div className={css.ftritems}>
                  <a href="!#">Facebook</a>
                  <a href="!#">Instagram-AJIOlife</a>
                  <a href="!#">Instagram-AJIO LUXE</a>
                  <a href="!#">We Respect Your Privacy</a>
                  <a href="!#">Twitter</a>
                  <a href="!#">Pinterst</a>
                </div>
              </section>
            </div>
            <div className={css.ftrbtm}>
              <div className={css.ftrpayment}>
                <div className={css.headline}>Payment methods</div>
                <div className={css.methods}>
                  <ul>
                    <li className={css.net}>
                      <div>Net</div>
                      <div className={css.bb}>Banking</div>
                    </li>
                    <li className={css.vw}>
                      <div className={css.vwp1}><i>Verified by</i></div>
                      <div className={css.vw2}><i>VISA</i></div>
                    </li>
                    <li className={css.master}>
                      <i
                        className="fa-brands fa-cc-mastercard"
                        style={col}
                      ></i>
                    </li>
                    <li className={css.cod}>
                      <i class="bi bi-currency-rupee"></i>
                      <div>
                        <p>CASH ON DELIVERY</p>
                      </div>
                    </li>
                    <li className={css.jio}>
                      <div className={css.jiologo}>Jio</div>
                      <div>Money</div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={css.ftrsecure}>
                <div className={css.headline}>Secure systems</div>
                <div className={css.methodlist}>
                  <i class="bi bi-lock-fill"></i>
                  <div className={css.secure2}>
                    <p>256 BIT</p>
                    <div>ENCRYPTION</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer