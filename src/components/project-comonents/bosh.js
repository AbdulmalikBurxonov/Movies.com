import { Carousel, Col, Row, Typography } from "antd";
import { Container } from "../mini-components/container";
import { useQuery } from "react-query";
import { useContext, useEffect, useState } from "react";
import { ContextApi } from "../../api";
import { useNavigate, useParams } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

export const BoshSahifa = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [ganerId, setGanerId] = useState(0);
  const [countryId, setCountryId] = useState(0);

  const api = useContext(ContextApi);
  const { data, isLoading, isError } = useQuery("kino", () =>
    api.get("/kinolar"),
  );

  const { Title } = Typography;

  // console.log(data?.data)
  const contentStyle = {
    height: "460px",
    color: "#fff",
    lineHeight: "460px",
    textAlign: "center",
    background: "#364d79",

    objectFit: "cover",
  };

  return (
    <>
      <div
        style={{
          background: "#2E293F",
          paddingTop: "40px",
          paddingBottom: "60px",
        }}
      >
        <Container>
          <div className={"flex items-center gap-4 pb-4"}>
            <div
              style={{ background: "#9B59B6", width: "8px", height: "35px" }}
            ></div>
            <Title level={3} style={{ color: "#A5BBDC", marginTop: "10px" }}>
              PREMYERA
            </Title>
          </div>
          <Carousel autoplay className={"cursor-pointer"}>
            {data?.data.map((item) => {
              return (
                <div className={""}>
                  <img
                    className={" md:w-auto lg:w-[1200px]"}
                    style={contentStyle}
                    src={item.poster}
                    alt=""
                  />
                </div>
              );
            })}
          </Carousel>
        </Container>
      </div>
      <div
        style={{
          background: "#161D25",
          paddingTop: "50px",
          paddingBottom: "100px",
        }}
      >
        <Container>
          <Row gutter={[24, 24]}>
            {data?.data.map((item) => {
              return (
                <Col xs={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
                  <Fade>
                    <div
                      className={"text-center pt-4 pb-2 cursor-pointer"}
                      style={{ background: "#1D232C" }}
                      onClick={() => navigate(`/movies/kino/${item.id}`)}
                    >
                      <img className={"w-[100%] px-2"} src={item.img} alt="" />
                      <div className={"bg-[#222933] h-[7vh]"}>
                        <Typography className={"text-[#A5BBDC] pt-2"}>
                          {item.name}
                        </Typography>
                      </div>
                    </div>
                  </Fade>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};
