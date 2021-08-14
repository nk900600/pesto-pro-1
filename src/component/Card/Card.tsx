import React from "react";
import {CardStyled} from "./Card.styled";

export type CardProps = {
    company:string ;
    location: string;
}

export const Card = ({company,location}:CardProps):JSX.Element => {
    return  <CardStyled>
        <h4>{company}</h4>
        <p>{location}</p>
    </CardStyled>
}
