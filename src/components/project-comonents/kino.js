import { React, useContext, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQueryClient, useQuery } from "react-query";
import { ContextApi } from "../../api";
import { Button, Typography, Input, Form, Avatar } from "antd";
import { Container } from "../mini-components/container";
import { AiFillMessage } from "react-icons/ai";
import { UserOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import TextArea from "antd/es/input/TextArea";
import { SearchContext } from "../context";
const { Title } = Typography;

export const BoshSahifaKino = () => {
  const api = useContext(ContextApi);
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { searchFilm, setSearchFilm } = useContext(SearchContext);
  const {
    data: kinoData,
    isLoading: isLoadingKino,
    isError: isErrorKino,
  } = useQuery(["kino", id], () => api.get(`/kinolar/${id}`));
  console.log(searchFilm);
  const {
    mutate: izoh,
    isLoading: isLoadingIzoh,
    isError: isErrorIzoh,
  } = useMutation((data) => api.put(`/kinolar/${id}`, data), {
    onSuccess: () => {
      queryClient.invalidateQueries(`kinolar`, id);
    },
  });

  const movie = useMemo(() => kinoData?.data || {}, [kinoData?.data]);

  const { data: janrData } = useQuery(
    ["janr", movie.genre],
    () => api.get(`/genres/${movie.genre}`),
    { enabled: !!movie.genre },
  );
  const { data: countryData } = useQuery(
    ["country", movie.country],
    () => api.get(`/countrys/${movie.country}`),
    { enabled: !!movie.country },
  );

  const newMassages = (values) => {
    console.log(values);

    izoh({
      ...movie,
      messages: [
        { ...values, time: dayjs(new Date()).format("YYYY.MM.DD:mm") },
        ...movie?.messages,
      ],
    });
  };

  return (
    <>
      <div className={"bg-[#161D25] py-10"}>
        <Container>
          <div className={"flex items-center gap-3"}>
            <div className={"w-[8px] h-[45px] bg-[#02B0E4]"}></div>
            <Title className={"mt-3"} style={{ color: "#A5BBDC" }}>
              {movie.name}
            </Title>
          </div>
          <div className={"bg-[#24303D] py-4 px-10 flex gap-10 mb-10"}>
            <div className={"py-[4px] px-[4px] bg-[#304156]"}>
              <img src={movie.img} className={"w-[260px]"} alt="" />
            </div>
            <div
              style={{ display: "flex", flexFlow: "column" }}
              className={"gap-4"}
            >
              <div className={"flex items-center "}>
                <Typography
                  className={
                    "bg-[#2F3F54] text-[#A5BBDC] w-[130px] h-[40px] ps-3 flex items-center rounded-s"
                  }
                >
                  NOMI
                </Typography>
                <Typography
                  style={{ fontWeight: "600", fontSize: "17px" }}
                  className={
                    "bg-[#1D232C] text-[#798FA6] w-[555px] h-[40px] ps-3 flex items-center rounded-r"
                  }
                >
                  {movie.name}
                </Typography>
              </div>
              <div className={"flex items-center "}>
                <Typography
                  className={
                    "bg-[#2F3F54] text-[#A5BBDC] w-[130px] h-[40px] ps-3 flex items-center rounded-s"
                  }
                >
                  DAVLATI
                </Typography>
                <Typography
                  style={{ fontWeight: "600", fontSize: "17px" }}
                  className={
                    "bg-[#1D232C] text-[#798FA6] w-[555px] h-[40px] ps-3 flex items-center rounded-r"
                  }
                >
                  {countryData?.data?.name}
                </Typography>
              </div>
              <div className={"flex items-center "}>
                <Typography
                  className={
                    "bg-[#2F3F54] text-[#A5BBDC] w-[130px] h-[40px] ps-3 flex items-center rounded-s"
                  }
                >
                  YILI
                </Typography>
                <Typography
                  style={{ fontWeight: "600", fontSize: "17px" }}
                  className={
                    "bg-[#1D232C] text-[#798FA6] w-[555px] h-[40px] ps-3 flex items-center rounded-r"
                  }
                >
                  {movie.movieyear}
                </Typography>
              </div>
              <div className={"flex items-center "}>
                <Typography
                  className={
                    "bg-[#2F3F54] text-[#A5BBDC] w-[130px] h-[40px] ps-3 flex items-center rounded-s"
                  }
                >
                  JANR
                </Typography>
                <Typography
                  style={{ fontWeight: "600", fontSize: "17px" }}
                  className={
                    "bg-[#1D232C] text-[#798FA6] w-[555px] h-[40px] ps-3 flex items-center rounded-r"
                  }
                >
                  {janrData?.data?.genre}
                </Typography>
              </div>
              <div className={"flex items-center "}>
                <Typography
                  className={
                    "bg-[#2F3F54] text-[#A5BBDC] w-[130px] h-[40px] ps-3 flex items-center rounded-s"
                  }
                >
                  TILI
                </Typography>
                <Typography
                  style={{ fontWeight: "600", fontSize: "17px" }}
                  className={
                    "bg-[#1D232C] text-[#798FA6] w-[555px] h-[40px] ps-3 flex items-center rounded-r"
                  }
                >
                  O'zbek tilida (Tarjima)
                </Typography>
              </div>
              <div className={"flex items-center "}>
                <Typography
                  className={
                    "bg-[#2F3F54] text-[#A5BBDC] w-[130px] h-[40px] ps-3 flex items-center rounded-s"
                  }
                >
                  DAVOMILIGI
                </Typography>
                <Typography
                  style={{ fontWeight: "600", fontSize: "17px" }}
                  className={
                    "bg-[#1D232C] text-[#798FA6] w-[555px] h-[40px] ps-3 flex items-center rounded-r"
                  }
                >
                  {movie.duration}
                </Typography>
              </div>
            </div>
          </div>
          <div>
            <div></div>
            <div>
              <video
                controls
                style={{ width: "100%", marginTop: "50px" }}
                src={movie.movie}
              ></video>
            </div>
            <div>
              <Form onFinish={newMassages}>
                <Form.Item name="name">
                  <Input
                    placeholder={"Ism"}
                    size={"large"}
                    className={"bg-[#222933] haw border-0 text-[#99B1D4]"}
                    style={{ outline: "none", boxShadow: "none" }}
                  />
                </Form.Item>
                <Form.Item name="text">
                  <TextArea
                    className={"haw border-0 "}
                    style={{
                      outline: "none",
                      boxShadow: "none",
                    }}
                    placeholder="Fikr bildirish..."
                    allowClear
                  />
                </Form.Item>
                <Button
                  htmlType={"submit"}
                  className={
                    "flex items-center gap-1 text-[#99b1d4] bg-[#526480] my-3 border-[#304156]"
                  }
                >
                  <AiFillMessage />
                  FIKR BILDIRISH / IZOH YOZISH
                </Button>
                <div
                  className={
                    "bg-[#24303D] max-h-[300px] py-3 overflow-y-scroll "
                  }
                >
                  {movie.messages?.map((item) => {
                    return (
                      <>
                        <div className={"flex items-center gap-2 ps-3 py-2"}>
                          <Avatar size="large" icon={<UserOutlined />} />
                          <div>
                            <Title
                              level={5}
                              style={{ marginBottom: "0", color: "#72b697" }}
                            >
                              {item.name}
                            </Title>
                            <Typography className={"text-[#99B1D4]"}>
                              {item.text}
                            </Typography>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </Form>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
