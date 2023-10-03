

import {Container} from "./container";
import { Typography } from "antd";
import "../../style/index.css"

export const Header = () => {
const { Title,Text } = Typography
    return(
        <>
        <div style={{background:"#222933"}}>
            <Container>
                <div className={"flex items-center justify-between"}>
                    <Title style={{marginBottom:"5px",color:"#fff",fontSize:"60px", marginTop:"0"}} className={"m-0"}>Movies</Title>

                    <div className={"flex top"} style={{color:"#a5bbdc"}}>

                        <div className={"cursor-pointer py-10 px-4 tep"}>
                            <Typography style={{color:"#a5bbdc",fontSize:"16px"}}>BOSH SAHIFA</Typography>
                        </div>
                        <div className={"cursor-pointer py-10 px-4 tep"}>
                            <Typography style={{color:"#a5bbdc",fontSize:"16px"}}>KINOLAR</Typography>
                        </div>
                        <div className={"cursor-pointer py-10 px-4 tep"}>
                            <Typography style={{color:"#a5bbdc",fontSize:"16px"}}>SERIALLAR</Typography>
                        </div>
                        <div className={"cursor-pointer py-10 px-4 tep"}>
                            <Typography style={{color:"#a5bbdc",fontSize:"16px"}}>JANR</Typography>
                        </div>
                        <div className={"cursor-pointer py-10 px-4 tep"}>
                            <Typography style={{color:"#a5bbdc",fontSize:"16px"}}>YIL</Typography>
                        </div>
                       <div className={"cursor-pointer py-10 px-4 tep"}>
                           <Typography style={{color:"#a5bbdc",fontSize:"16px"}}>MAMLAKAT</Typography>
                       </div>
                        <div className={"cursor-pointer py-10 px-4 tep"}>
                            <Typography style={{color:"#a5bbdc",fontSize:"16px"}}>KINO YANGILIKLARI</Typography>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
        </>
    )
}