import styled from 'styled-components';

export const ListContiner = styled.div`
    overflow: auto;
    height: 90vh;
    width: 70%;
    padding: 1%;
    align-content: center;
`
export const PostContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    padding: 15px;
    box-shadow: 1px 2px ${({ theme }) => theme.colors.blue};
    border-radius: 10px;
    margin-bottom: 10px;
`
export const PostTitleContainer = styled.div`
    grid-row: 1/2;
    grid-column: 1/3;
`

export const PostTitle = styled.h2`
    color: ${({ theme }) => theme.colors.darkBlue};
    float: left;
`

export const PostInfo = styled.div`
    grid-row: 2/3;
    grid-column: 2/3;
    text-align: right;
`