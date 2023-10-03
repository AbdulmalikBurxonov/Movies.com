import { useState } from "react";
import { Button, Checkbox, Input, Typography } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
export const LoginPage = ({ setUserActivited }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { Text, Space, Title } = Typography;
  const submit = (e) => {
    console.log(login, password, login === "Abdulmalik" && password === "1212");
    if (login === "Abdulmalik" && password === "1212") {
      setUserActivited(true);
      navigate("/admin");
    }
  };

  return (
    <div
      className={""}
      style={{
        width: "400px",
        height: "80vh",
        display: "flex",
        margin: "0 auto",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        className={"flex items-center text-center justify-center gap-3 mb-10  "}
      >
        <Title className={"p-0 m-0"} style={{ margin: "0" }}>
          Movies
        </Title>
        <Text
          className={
            "bg-red-600 text-amber-50 font-medium mt-1 px-2 py-0.5 rounded"
          }
        >
          CLUB
        </Text>
      </div>

      <div className={"bg-white p-5 rounded-2xl"}>
        <Title className={"pb-5"}>Kirish</Title>
        <div className={"mb-5"}>
          <Text className={"font-bold mb-2"}>Login</Text>
          <Input
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            size="large"
            placeholder=""
          />
        </div>
        <div className={""}>
          <Text className={"font-bold mb-4"}>PAROL</Text>
          <Input.Password
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            size="large"
            placeholder="password"
          />
        </div>

        <Button
          size="large"
          onClick={submit}
          className={"bg-blue-700 mt-3 text-white"}
          style={{ width: "100%" }}
        >
          Kirish
        </Button>
      </div>
    </div>
  );
};
