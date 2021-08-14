import styled from "styled-components";


export const SearchBarWrapper = styled.div`
  width: 100%;
  max-width: 31.25rem;
  margin: 6rem auto;


  .label {
    font-size: .625rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: +1.3px;
    margin-bottom: 1rem;
  }


  .searchBar {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }


  #searchQueryInput {
    width: 100%;
    height: 2.8rem;
    background: #f5f5f5;
    outline: none;
    border: none;
    border-radius: 1.625rem;
    padding: 0 3.5rem 0 1.5rem;
    font-size: 1rem;
  }

  #searchQuerySubmit {
    width: 3.5rem;
    height: 2.8rem;
    margin-left: -3.5rem;
    background: none;
    border: none;
    outline: none;
  }

  #searchQuerySubmit:hover {
    cursor: pointer;
  }

`


export const SvgStyled = styled.svg`
  width:24px;
  height:24px
`





