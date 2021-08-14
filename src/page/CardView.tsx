import React from "react"
import { Card } from "../component/Card/Card"
import { useSelector } from "react-redux"
import {IInitialState} from "../redux/reducer";
import {SearchBar} from "../component/SearchBar/SearchBar";
import {CardViewStyled} from "./CardView.styled";

export const CardView = ():JSX.Element => {

    const listData = useSelector((state: IInitialState) => state.list)

    return <>
        <SearchBar/>
        <CardViewStyled>
        {
            listData?.map(val=>
                <Card key={val.id} location={val.location} company={val.name} />
            )
        }
        </CardViewStyled>

    </>
}