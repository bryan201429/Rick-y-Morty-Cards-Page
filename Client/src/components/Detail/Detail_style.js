import styled from "styled-components";

export const Detail_style =styled.div`
    width:100%;
    display:flex;
    justify-content: center;
    align-items: center;
    color:white;
    font-size: 1.5vw;
    background:rgba(40,40,40,0.8);
`;

export const ImgContainer=styled.div`
    width:50%;
    height:90%;
    display: flex;
    align-content:center;
    justify-content:center;
    img {
        width:60%;
        height:auto;
        object-fit:cover;
        border-radius: 20px;
    }
`;

export const TextContainer=styled.div`
    width:50%;
    display: flex;
    flex-direction:column;
    align-items:center;
    background:rgba(30,30,30,0.8);
    div{
        display:flex;
        align-items:center;
        h2{
            color:rgb(0,255,0);
        }
        h3{
            margin-right:5px;
            color:rgb(0,255,0);
        }
        p{

        }
    }
`;