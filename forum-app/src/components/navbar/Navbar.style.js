import styled from 'styled-components';

export const NavOuterDiv = styled.div`
    width: 100%;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    box-shadow: 1px 2px black;
    padding: 10px;
    margin-bottom: 10px;
`

export const Logo = styled.h1`
    color: white;
`

export const UserTag = styled.h4`
    color: white;
    float: left;
`

export const LogoutButton = styled.button`
    float: right;
    font-size: 18px;
    background-color: pink;
    width: 100px;
    color: ${({ theme }) => theme.colors.darkBlue};
`