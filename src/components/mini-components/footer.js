import React from "react";
import {Button, Typography} from "antd";
import {Container} from "./container";


export const Footer = () => {

    const {Title} = Typography

    return(
        <>
        <div className={"bg-[#222933] py-10"}>
            <Container>
                <div className={"flex items-center justify-between"}>

                        <Title style={{color:"#fff",fontSize:"60px",paddingBottom:"16px", marginBottom:"0" }}>Movies</Title>
                        <div className={"flex items-center gap-3 "}>
                        <Button style={{background:"none",border:" 1px solid #A5BBDC", color:"#A5BBDC"}}>Qoida</Button>
                        <Button style={{background:"none",border:" 1px solid #A5BBDC", color:"#A5BBDC"}}>Reklama</Button>
                        <Button style={{background:"none",border:" 1px solid #A5BBDC", color:"#A5BBDC"}}>Texnik qo'llab quvvatlash</Button>
                        </div>

                </div>
            </Container>
        </div>
        </>
    )
}