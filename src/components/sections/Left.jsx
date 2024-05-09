
import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import icon1 from "../../assets/rating-top-1.svg";
import icon2 from "../../assets/rating-top-2.svg";
import icon3 from "../../assets/rating-top-3.svg";
import blueBall from "../../assets/blue-ball.svg";
function LeftHero() {
  const uData = [100, 68, 48, 84, 65];
  const xLabels = [
    "SMS yuborilganlar",
    "Linkga kirganlar",
    "Mahsulot sahifasiga kirganlar",
    "Sotib olganlar",
    "Izoh qoldirganlar",
  ];

  return (
    <div className="container">
      <div className="left-hero ">
        <div className="left-hero-header">
          <div className="header__item">
            <img className="header__item__icon" src={icon1} alt="Rating Icon" />
            <div className="header__item__text-wrapper">
              <p className="header__item__text-wrapper-paragraph1">
                Tracking loyihalari
              </p>
              <p className="header__item__text-wrapper-paragraph2">5 ta</p>
              <p className="header__item__text-wrapper-paragraph3">
                (7 ta subloyiha)
              </p>
            </div>
          </div>
          <div className="header__item">
            <img className="header__item__icon" src={icon2} alt="Rating Icon" />
            <div className="header__item__text-wrapper">
              <p className="header__item__text-wrapper-paragraph1">
                Sharh olish loyihalari
              </p>
              <p className="header__item__text-wrapper-paragraph2">15 ta</p>
              <p className="header__item__text-wrapper-paragraph3">
                (7 ta subloyiha)
              </p>
            </div>
          </div>
          <div className="header__item">
            <img className="header__item__icon" src={icon3} alt="Rating Icon" />
            <div className="header__item__text-wrapper">
              <p className="header__item__text-wrapper-paragraph1">Mijozlar</p>
              <p className="header__item__text-wrapper-paragraph2">12,345 ta</p>
              <p className="header__item__text-wrapper-paragraph3">
                (563 ta saralanmagan)
              </p>
            </div>
          </div>
        </div>
        <div className="left-hero-hero">
          <BarChart
            width={900}
            height={524}
            series={[{ data: uData, id: "uvId" }]}
            xAxis={[{ data: xLabels, scaleType: "band" }]}
          />
        </div>
        <div className="left-hero-footer">
          <div className="left-hero-footer__top">
            <p className="bold-leftText">#Tag lar</p>
            <div>
              <p className="bold-leftText">120 ta</p>
              <p className="paragraph">umumiy #tag lar soni</p>
            </div>
          </div>
          <div className="left-hero-footer__bottom">
            <div className="left-hero-footer__bottom2">
              <div className="left-hero-footer__bottom__item">
                <img src={blueBall} alt="img" />
                <p>Bolalar uchun</p>
                <span>15.7k</span>
              </div>
              <div className="left-hero-footer__bottom__item">
                <img src={blueBall} alt="Blue Ball Image" />
                <p>Bolalar uchun</p>
                <span>15.7k</span>
              </div>
              <div className="left-hero-footer__bottom__item">
                <img src={blueBall} alt="Blue Ball Image" />
                <p>Bolalar uchun</p>
                <span>15.7k</span>
              </div>
              <div className="left-hero-footer__bottom__item">
                <img src={blueBall} alt="Blue Ball Image" />
                <p>Bolalar uchun</p>
                <span>15.7k</span>
              </div>
              <div className="left-hero-footer__bottom__item">
                <img src={blueBall} alt="Blue Ball Image" />
                <p>Bolalar uchun</p>
                <span>15.7k</span>
              </div>
              <div className="left-hero-footer__bottom__item">
                <img src={blueBall} alt="Blue Ball Image" />
                <p>Bolalar uchun</p>
                <span>15.7k</span>
              </div>
            </div>
            <div className="left-hero-footer__bottom2">
              <div className="left-hero-footer__bottom__item">
                <img src={blueBall} alt="Blue Ball Image" />
                <p>Bolalar uchun</p>
                <span>15.7k</span>
              </div>
              <div className="left-hero-footer__bottom__item">
                <img src={blueBall} alt="Blue Ball Image" />
                <p>Bolalar uchun</p>
                <span>15.7k</span>
              </div>
              <div className="left-hero-footer__bottom__item">
                <img src={blueBall} alt="Blue Ball Image" />
                <p>Bolalar uchun</p>
                <span>15.7k</span>
              </div>
              <div className="left-hero-footer__bottom__item">
                <img src={blueBall} alt="Blue Ball Image" />
                <p>Bolalar uchun</p>
                <span>15.7k</span>
              </div>
              <div className="left-hero-footer__bottom__item">
                <img src={blueBall} alt="Blue Ball Image" />
                <p>Bolalar uchun</p>
                <span>15.7k</span>
              </div>
              <div className="left-hero-footer__bottom__item">
                <img src={blueBall} alt="Blue Ball Image" />
                <p>Bolalar uchun</p>
                <span>15.7k</span>
              </div>
            </div>
            <div className="left-hero-footer__bottom2">
              <div className="left-hero-footer__bottom__item">
                <img src={blueBall} alt="Blue Ball Image" />
                <p>Bolalar uchun</p>
                <span>15.7k</span>
              </div>
              <div className="left-hero-footer__bottom__item">
                <img src={blueBall} alt="Blue Ball Image" />
                <p>Bolalar uchun</p>
                <span>15.7k</span>
              </div>
              <div className="left-hero-footer__bottom__item">
                <img src={blueBall} alt="Blue Ball Image" />
                <p>Bolalar uchun</p>
                <span>15.7k</span>
              </div>
              <div className="left-hero-footer__bottom__item">
                <img src={blueBall} alt="Blue Ball Image" />
                <p>Bolalar uchun</p>
                <span>15.7k</span>
              </div>
              <div className="left-hero-footer__bottom__item">
                <img src={blueBall} alt="Blue Ball Image" />
                <p>Bolalar uchun</p>
                <span>15.7k</span>
              </div>
              <div className="left-hero-footer__bottom__item">
                <img src={blueBall} alt="Blue Ball Image" />
                <p>Bolalar uchun</p>
                <span>15.7k</span>
              </div>
            </div>
            <div className="left-hero-footer__bottom2">
              <div className="left-hero-footer__bottom__item">
                <img src={blueBall} alt="Blue Ball Image" />
                <p>Bolalar uchun</p>
                <span>15.7k</span>
              </div>
              <div className="left-hero-footer__bottom__item">
                <img src={blueBall} alt="Blue Ball Image" />
                <p>Bolalar uchun</p>
                <span>15.7k</span>
              </div>
              <div className="left-hero-footer__bottom__item">
                <img src={blueBall} alt="Blue Ball Image" />
                <p>Bolalar uchun</p>
                <span>15.7k</span>
              </div>
              <div className="left-hero-footer__bottom__item">
                <img src={blueBall} alt="Blue Ball Image" />
                <p>Bolalar uchun</p>
                <span>15.7k</span>
              </div>
              <div className="left-hero-footer__bottom__item">
                <img src={blueBall} alt="Blue Ball Image" />
                <p>Bolalar uchun</p>
                <span>15.7k</span>
              </div>
              <div className="left-hero-footer__bottom__item">
                <img src={blueBall} alt="Blue Ball Image" />
                <p>Bolalar uchun</p>
                <span>15.7k</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftHero;
