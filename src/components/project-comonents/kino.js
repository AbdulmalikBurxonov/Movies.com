
import {React, useContext, useMemo} from "react";

import { useNavigate , useParams} from "react-router-dom";
import { useQuery } from "react-query";
import  { Header } from "../mini-components/header";
import {ContextApi} from "../../api";
import {Typography} from "antd";


export const BoshSahifaKino = () => {
    const api = useContext(ContextApi)
    const{id} = useParams()

    const {
        data: kinoData,
        isLoading: isLoadingKino,
        isError: isErrorKino,
    } = useQuery(["kino",id] ,() => api.get(`/kinolar/${id}`))

    const movie = useMemo(() => kinoData?.data || [], [kinoData?.data])
    console.log(movie)

    return(
        <>
            <h1>{id}</h1>
           <div>
             <Typography>{movie.name}</Typography>
           </div>
        </>
    )
}