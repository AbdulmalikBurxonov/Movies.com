import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/index.css";
import { AiOutlineUser } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { useContext, useEffect, useMemo, useState } from "react";
import { ContextApi } from "../../api";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { Table } from "antd";
import { Nav, Tab, Row, Col } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";
import { Input, Button, Modal, Form, DatePicker } from "antd";
import TextArea from "antd/es/input/TextArea";

export const Admin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const api = useContext(ContextApi);

  const { data, isLoading, isError } = useQuery(["kinolar"], () =>
    api.get("/kinolar"),
  );
  const movies = useMemo(() => data?.data || [], [data?.data]);

  const { data: countryData } = useQuery(["countrys"], () =>
    api.get(`/countrys`),
  );
  const countrys = useMemo(() => countryData?.data || [], [countryData?.data]);

  const { data: genreData } = useQuery(["genre"], () => api.get("/genres"));

  const genres = useMemo(() => genreData?.data || [], [genreData?.data]);

  const {
    mutate: postData,
    isLoading: isLoadingQowiw,
    isError: isErrorQowiw,
  } = useMutation((data) => api.post("/kinolar", data), {
    onSuccess: (res) => {
      toast.success("Muvaffaqiyatli saqlandi");
      queryClient.invalidateQueries("kinolar");
    },
    onError: (err) => toast.success("Xatolik sodir boldi"),
  });
  const onFinish = (values) => {
    const data = { ...values };
    console.log("Success:", data);

    postData(data);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const { mutate: deleteKino } = useMutation(
    (id) => api.delete(`/kinolar/${id}`),
    {
      onSuccess: (res) => {
        queryClient.invalidateQueries("kinolar");
      },
    },
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns = [
    {
      title: "Img",
      dataIndex: "img",
      key: "img",
      render: (row) => {
        return (
          <span>
            <img src={row} className={"product-img"} alt="" />
          </span>
        );
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Janr",
      dataIndex: "genre",
      key: "genre",
      render: (genre) => {
        let foundJanr = genres.find((item) => item.id === genre);
        return foundJanr ? foundJanr.genre : "Not Found";
      },
    },

    {
      title: "Davlati",
      dataIndex: "country",
      key: "country",
      render: (country) => {
        let foundCountry = countrys.find((item) => item.id === country);
        return foundCountry ? foundCountry.name : "Not Found";
      },
    },

    {
      title: "Yili",
      dataIndex: "movieyear",
      key: "movieyear",
    },
    {
      title: "",
      dataIndex: "id",
      key: "id",
      render: (id) => {
        return (
          <span>
            {" "}
            <Button className="me-2">
              <FaRegEdit className="fs-5" />
            </Button>
            <Button
              variant="danger"
              className=""
              onClick={() => deleteKino(id)}
            >
              <MdDeleteOutline className="fs-5 " />
            </Button>
          </span>
        );
      },
    },
    {},
  ];

  useEffect(() => {
    if (!localStorage.getItem("userActivited")) navigate("/adminlogin");
  }, []);

  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="uch">
        <Row className="g-0">
          <Col xs={2}>
            <div className="left p-2">
              <h2 className="text-light text-center">Admin</h2>

              <Nav variant="pills" className="flex-column pt-4">
                <Nav.Item>
                  <Nav.Link
                    eventKey="bir"
                    className="d-flex align-items-center gap-2"
                  >
                    <AiOutlineUser />
                    Foydalanuchi
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link
                    eventKey="ikki"
                    className="d-flex align-items-center gap-2"
                  >
                    <BiCategory />
                    Kategoriya
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Col>
          <Col xs={10}>
            <Tab.Content>
              <Tab.Pane eventKey="ikki">
                <Modal
                  title="Basic Modal"
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={null}
                >
                  <Form
                    name="basic"
                    layout={"vertical"}
                    style={{
                      minWidth: 400,
                      maxWidth: 500,
                    }}
                    initialValues={{}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Form.Item
                      label="Url"
                      name="movie"
                      rules={[
                        {
                          required: true,
                          message: "Iltimos toliq ism kiriting",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Nomi"
                      name="name"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="Yili"
                      name="movieyear"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="Rasm"
                      name="img"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="Vaqt"
                      name="duration"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                    {/*<Form.Item label="Izoh" name="note">*/}
                    {/*  <TextArea rows={4} />*/}
                    {/*</Form.Item>*/}

                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        loading={isLoadingQowiw}
                      >
                        Saqlash
                      </Button>
                    </Form.Item>
                  </Form>
                </Modal>
                <section className="mx-3 p-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <h2>Products</h2>
                    <Button type="primary" onClick={showModal}>
                      + Qoshish
                    </Button>
                  </div>
                  <div>
                    <Table
                      columns={columns}
                      dataSource={movies}
                      pagination={{
                        pageSize: 5,
                      }}
                    />
                  </div>
                </section>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};
