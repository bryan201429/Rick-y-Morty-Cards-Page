import styled from "styled-components";
import{ReactComponent as MagnifyingGlass} from "../../assets/imagenes/iconslupa64.svg"

export const SearchContainer=styled.div`
    margin-top: 30px;
    height: 30px;
    width: 50%;
    display: flex;
    justify-content: center;
    margin-bottom: 25px;
    margin-left:30%;
    padding:1%;
`;

export const SearchInput=styled.input`
width:30%;
padding:12px 20px;
border:solid #39ff14 1px;
border-radius: 10px 0px 0px 10px;
box-sizing: border-box;
box-shadow: inset 0 0 5px #808080;
`;

export const SearchIcon=styled(MagnifyingGlass)`
width: 30px;
height: 30px;
fill: #39ff14;

&:hover{
    scale 1.15;
}
`
export const SearchIconContainer = styled.div`
    position:relative;
    display:flex;
    align-items: center;
    justify-content:center;
    cursor:pointer;
    background-color:black;
    padding:10px;
    border: solid #39ff14 1px;
    border-radius:0px 7px 7px 0px;

    &:hover{
        box-shadow:inset 0 0 10px #34ff14;
    }

`