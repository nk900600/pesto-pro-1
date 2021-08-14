import React, {ChangeEvent, useState} from "react"
import {SearchBarWrapper, SvgStyled} from "./SerachBar.styled";
import {useDispatch} from "react-redux";
import {handleOnClick} from "../../redux/actions";

export const SearchBar = ():JSX.Element => {

    const dispatch = useDispatch()
    const [value, setValue] = useState("")

    const handleOnClickButton = () => {
        dispatch(handleOnClick(value.toLowerCase()))
    }
    const handleOnChange = (event:ChangeEvent<HTMLInputElement>) => setValue(event.target.value)


    return <SearchBarWrapper>
        <div className="label">Submit your search</div>
        <div className="searchBar">
            <input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Search" value={value} onChange={handleOnChange} />
            <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit" onClick={handleOnClickButton}>
                <SvgStyled viewBox="0 0 24 24"><path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                </SvgStyled>
            </button>
        </div>
    </SearchBarWrapper>
}