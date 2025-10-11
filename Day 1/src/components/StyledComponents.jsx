import {styled} from "styled-components";

export default function StyledComponents() {
    const StyledDiv = styled.div`
        display: flex;
        background-color: white;
        padding: 4px;
    `;
    return <StyledDiv>Hello</StyledDiv>
}