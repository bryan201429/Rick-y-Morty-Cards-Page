import errorImg from '../../assets/imagenes/error.png';
import styled from 'styled-components';

const ErrorContainer=styled.div`
    height:90%;
    & img{
        width:50 vw;
        height:auto;
    }
`;

export default function ErrorPage(){

    return(
        <ErrorContainer>
            <img src={errorImg}></img>
        </ErrorContainer>
    )
}