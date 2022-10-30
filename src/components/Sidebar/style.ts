import styled from "styled-components"


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: min(299px, 100%);
`;

export const SearchWrapper = styled.div`
    padding: 10px 24px;
    width: min(399pc, 100%);

    position: fixed;
    top: 0;
    z-index: 2;
    /* background: #EBEEF0; */

    max-height: 57px;
`;

