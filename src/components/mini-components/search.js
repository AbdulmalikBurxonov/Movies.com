import React, { useContext } from "react";
import { Button, Input } from "antd";
import { useState } from "react";
import { Container } from "./container";
import { BiFilm } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { SiMicrostrategy } from "react-icons/si";
import { AiFillExclamationCircle, AiOutlineSearch } from "react-icons/ai";
import "../../style/index.css";
import { SearchContext } from "../context";

export const Search = () => {
  const { searchFilm, setSearchFilm } = useContext(SearchContext);

  return (
    <>
      <div className={"bg-[#131A20] py-10"}>
        <Container className={"flex items-center justify-between"}>
          <div
            className={"bg-[#222933] flex items-center px-3"}
            style={{ borderRadius: "2px" }}
          >
            <Input
              placeholder={"Film izlash..."}
              size={"large"}
              className={"bg-[#222933] haw border-0 text-[#99B1D4]"}
              style={{ outline: "none", boxShadow: "none" }}
              onChange={(e) => setSearchFilm(e.target.value)}
            />
            <AiOutlineSearch
              style={{
                fontSize: "26px",
                fontWeight: "bold",
                cursor: "pointer",
                color: "#99B1D4",
              }}
            />
          </div>
          <div className={"flex items-center gap-2"}>
            <Button
              size={"large"}
              className={"bg-[#232A35] border-0 text-[#A5BBDC]"}
            >
              <BiFilm style={{ fontSize: "22px", paddingBottom: "2px" }} />
            </Button>
            <Button
              size={"large"}
              className={"bg-[#232A35] border-0 text-[#A5BBDC]"}
            >
              <FiMail style={{ fontSize: "22px", paddingBottom: "2px" }} />
            </Button>
            <Button
              size={"large"}
              className={"bg-[#232A35] border-0 text-[#A5BBDC]"}
            >
              <SiMicrostrategy
                style={{ fontSize: "22px", paddingBottom: "2px" }}
              />
            </Button>
            <Button
              size={"large"}
              className={"bg-[#232A35] border-0 text-[#A5BBDC]"}
            >
              <AiFillExclamationCircle
                style={{ fontSize: "22px", paddingBottom: "2px" }}
              />
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
};
