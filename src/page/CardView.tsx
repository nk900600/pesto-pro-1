import React, {useEffect } from "react"
import { Card } from "../component/Card/Card"
import {useDispatch, useSelector} from "react-redux"
import {IInitialState} from "../redux/reducer";
import {SearchBar} from "../component/SearchBar/SearchBar";
import {CardViewStyled} from "./CardView.styled";
import { API } from 'aws-amplify';
import { getData } from '../graphql/queries';
import {UpdateList} from "../redux/actions";


const CardViewComp = ():JSX.Element => {
    const dispatch = useDispatch()
    const listData = useSelector((state: IInitialState) => state.list)
    useEffect(() => {
        fetchNotes();
    }, []);

    async function fetchNotes() {
        const apiData = await API.graphql({query: getData});
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dispatch(UpdateList(apiData.data.getData))
    }
    return <>
        <SearchBar/>
        <CardViewStyled>
        {
            listData?.map(val=>
                <Card key={val.Id} location={val.location} company={val.name} />
            )
        }
        </CardViewStyled>

    </>
}

export const CardView =  CardViewComp