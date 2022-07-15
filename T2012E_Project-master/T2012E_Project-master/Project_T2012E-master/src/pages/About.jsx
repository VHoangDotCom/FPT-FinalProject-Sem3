import React, { useState } from "react";
import { Form, Button, Row, Col, Tabs, Tab, Accordion } from "react-bootstrap";
import OurTeam from "../components/OurTeam";

const About = () => {
  const [key, setKey] = useState("home");
  const imgAbout = "https://thumbs.dreamstime.com/b/concept-15354944.jpg";
  const img1 = "http://www.omikaelevators.com/images/about-img-1.jpg";
  const logoUytin =
    "https://thangmaymini.com/wp-content/uploads/2015/10/hang-thang-may.gif";
  return (
    <>
      <div className="wrapper">
        <div className="page-header">
          <h1 className="section-title" style={{ textAlign: "center" }}>
            About Us
          </h1>
        </div>

        <div className="about">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img src={img1} alt="Image" />
              </div>
              <div className="col-md-6">
                <h2>Company elevator introduction</h2>
                <p>
                  ToangCSharp Company is one of the first joint venture home
                  elevator companies in Vietnam market. With nearly 15 years of
                  experience in distributing and installing elevators
                  nationwide. Our company always puts the interests of
                  customers, elevator quality and company reputation first. With
                  a team of experienced consultants and installers, we always
                  try our best to create the best quality and stylish elevators.
                </p>
                <p>
                  Market integration with ToangCSharp brand, so far we are known
                  as a permanent member in the lifting industry. It is thanks to
                  the trust and support of customers throughout the country
                  through the capacity and experience of the staff - staff and
                  the quality of the equipment performed during the working
                  process through the units. specialized…
                </p>
                <a className="btn" href="#">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container section about-us mt-4">
          <Row>
            <Col md={7} style={{ fontSize: "16px" }}>
              <div className="about-text">
                <h2>Company development history</h2>
              </div>
              <div style={{ fontSize: "16px" }}>
                <li>Tax code (VAT ID): 0305342304</li>
                <li>
                  May 2006 established Gia Dinh Elevator Co., Ltd. address: Binh
                  Thanh District - Ho Chi Minh City.
                </li>
                <li>
                  June 2006 built a factory system for manufacturing and
                  assembling elevator cabins in District 12 - Ho Chi Minh City.
                </li>
                <li>
                  March 2009 opened a representative branch in the North at To
                  Hieu - Cau Giay - Hanoi.
                </li>
                <li>
                  From January 2018 until now, the Northern branch has been
                  transferred to SunSquare building at 21 Le Duc Tho - Nam Tu
                  Liem - Hanoi.
                </li>
              </div>

              
            </Col>
            <Col md={5}>
              <div className="about-img">
                <img src={imgAbout} />
              </div>
            </Col>
          </Row>
        </div>

        <div className="container section mt-4">
          <Row style={{ fontSize: "16px" }}>
          <h3 style={{ marginTop: "20px", textAlign: "center" }}>
                Products of elevator company ToangCSharp
              </h3>

              <p>
                We specialize in providing elevator products for families
                family, passenger elevator, car lift, cargo elevator goods,
                elevators for villas, renovation houses… customer demand for
                supply, installation of elevators and services relate to.{" "}
              </p>

              <p>
                Provide genuine equipment{" "}
                <a href={logoUytin}>Mitsubishi Elevator</a> (made in Japan),
                Montanari (made in Italy), Fuji (made in Japan).{" "}
                {/* <a href="https://thangmaymini.com/san-pham/">xem chi tiết</a>. */}
              </p>

              <figure class="wp-block-image alignnone wp-image-1782 size-full">
                <img
                  style={{ width: "933", height: "90", margin: '0 auto', display: 'block' }}
                  // width="933"
                  // height="90"
                  src={logoUytin}
                  data-src="https://thangmaymini.com/wp-content/uploads/2015/10/hang-thang-may.gif"
                  alt="Công ty thang máy Gia Định 1"
                  class="wp-image-1782 lazy"
                />
              </figure>

              <p>
                The products of ToangCSharp elevator company are all tested and
                certified certificate and license by the Quality Assurance
                Department of the Ministry of Labor Invalids and Social Affairs,
                Vietnam Ministry of Construction.
              </p>

              <p>
                <strong>Elevator motor:</strong>
              </p>

              <p>
                We specialize in providing 3 types{" "}
                <a href="https://thangmaymini.com/dong-co-thang-may-co-hop-va-khong-hop-co-phong-may-va-khong-phong-may.html">
                  elevator motor
                </a>
                :{" "}
                <a
                  href="https://thangmaymini.com/thang-may-mitsubishi-gia-dinh"
                  title="Mitsubishi"
                >
                  Mitsubishi
                </a>{" "}
                imported from Thailand, Montanari imported from Italy and Fuji
                imported from Korea.{" "}
              </p>

              <p>
                These are the companies that specialize in providing engines and
                constantly updating elevator technology on the market today.
                Each engine of Gia Dinh elevator company all have certificates
                of origin Made CO&amp; CQ (Certificate of Origin and
                Certifficate of Quality).
              </p>

              <figure class="wp-block-image alignnone">
                <a href="https://thangmaymini.com/wp-content/uploads/2015/10/may-moc.jpg">
                  <img
                    style={{ width: "1024", height: "341",margin: '0 auto', display: 'block' }}
                    // width="1024"
                    // height="341"
                    src="https://thangmaymini.com/wp-content/uploads/2015/10/may-moc-1024x341.jpg"
                    data-src="https://thangmaymini.com/wp-content/uploads/2015/10/may-moc-1024x341.jpg"
                    alt="Công ty thang máy gia định"
                    class="wp-image-1347 lazy"
                  />
                </a>
                <figcaption style={{textAlign: 'center'}}>
                  Elevator motors with and without gear box
                </figcaption>
              </figure>

              <p>
                <strong>System of installation works</strong>
              </p>

              <p>
                Installation works of Gia Dinh elevator company throughout the
                provinces and cities nationwide: Hanoi, Ho Chi Minh City. Ho Chi
                Minh City, Hung Yen, Hai Phong, Hai Duong, Lao Cai, Phu Tho, Son
                La, Thai Nguyen, Quang Ninh, Binh Duong, Vung Tau, Long An, Dong
                Nai… With the main focus on Thu Hanoi and Ho Chi Minh City.
              </p>

              <p>
                <strong>
                  The organizational structure of the enterprise management
                  apparatus of the company machine ToangCSharp
                </strong>
              </p>

              <p>
                {" "}
                <span
                  //  style="font-size: 12pt; font-family: 'times new roman', times, serif;"
                  style={{
                    fontSize: "12pt",
                    fontFamily: "times new roman",
                    fontWeight: "bold",
                  }}
                >
                  ToangCSharp Elevator Company is managed according to the
                  following model
                </span>
              </p>

              <div class="wp-block-image">
                <figure class="aligncenter">
                  <a href="https://thangmaymini.com/wp-content/uploads/2015/10/so-do-cong-ty.png">
                    <img
                    style={{margin: '0 auto', display: 'block'}}
                      src="https://thangmaymini.com/wp-content/uploads/2015/10/so-do-cong-ty.png"
                      data-src="https://thangmaymini.com/wp-content/uploads/2015/10/so-do-cong-ty.png"
                      alt="sơ đồ cơ cấu quản lý công ty thang máy Gia Định"
                      class="wp-image-1749 lazy"
                    />
                  </a>
                  <figcaption style={{textAlign: 'center'}}>Management structure chart</figcaption>
                </figure>
              </div>

              <p>
                With a strict management system along with the spirit of
                self-acceptance departmental operations. Technical team with
                many years of experience along with a team of young enthusiastic
                and enthusiastic employees job. We always meet the best
                requirements of the owner private.
              </p>

              <p>
                Are you a customer and you want to learn how? How to install the
                best elevator at a reasonable price? best for your family. Give
                us a call for a consultation free.{" "}
              </p>

              <p>
                Gia Dinh Elevator Company always puts benefits and creates
                comfort of customers when looking to the company comes first.
                Because each company The program has a unique feature in terms
                of function as well as space to use should use the choice of an
                elevator with size, load and the most appropriate form is
                paramount.{" "}
              </p>

              <p>
                Giving the most accurate solution for each project is yours
                Every customer is our duty because we know that Customers always
                need the most practical information.
              </p>
          </Row>
        </div>

        <div
          className="section about container mt-4"
          style={{ marginTop: "400px" }}
        >
          <Row>
            <div
              className="col-lg-5 align-items-stretch  img"
              style={{
                height: "300px",
                backgroundImage:
                  "url(https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_420/https://trulyexperiences.com/blog/wp-content/uploads/2020/11/pexels-olya-kobruseva-5428833-scaled-e1605623269850-420x529.jpg )",
              }}
            ></div>
            <div className="col-lg-7 d-flex flex-column about">
              <div className="content px-xl-5">
                <h3>
                  Frequently Asked <strong>Questions</strong>
                </h3>
                <p style={{ fontSize: "16px" }}>
                  Answer all questions as well as frequently asked questions
                  when customers come to buy our company's products
                </p>
              </div>
              <Accordion
                defaultActiveKey={["0"]}
                alwaysOpen
                style={{ marginLeft: "40px" }}
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    The smallest type of elevator that is easy to buy and sell ?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Small elevator with reasonable price, suitable for all
                      types of construction, diverse installation locations, so
                      it is very popular, easy for sellers - saving for buyers.
                    </p>
                    <p>
                      <strong>
                        The selling price of the family mini elevator
                      </strong>{" "}
                      is about 250 million VND to 350 million VND depending on
                      different options.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Does the maintenance cost, equipment to replace the mini
                    elevator cost?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      The life of an elevator usually falls between 10 and 15
                      years. Depending on the use and maintenance of the
                      elevator, the life of the elevator also changes. Regular
                      maintenance of elevators is usually 2 months.
                    </p>
                    <p>
                      This time may be less at the request of the homeowner and
                      according to the maintenance costs included in the
                      package. Small family elevators are usually used for
                      families, so few people use them. So the elevator will be
                      more durable. Usually less damaged after many years of
                      use.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Row>
        </div>

        <OurTeam />

        <div className="call-to-action about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-9">
                <h2>Get A Free HTML Template</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam sit amet metus sit amet
                </p>
              </div>
              <div className="col-md-3">
                <a className="btn" href="https://htmlcodex.com/contact">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
