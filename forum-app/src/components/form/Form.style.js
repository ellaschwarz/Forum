import styled from 'styled-components';

export const FormDivStyle = styled.div`
    max-width: 600px;
	margin: 10px auto;
	background: #ffffff;
    border-radius: 8px;
    box-shadow: 2px 1px darkgray;
`;

export const FormHeadStyle = styled(FormDivStyle)`
	background: linear-gradient(90deg, rgba(228, 231, 235, 1) 9%, rgba(120, 144, 186, 1) 62%, rgba(23, 30, 46, 1) 100%);
    height: 100px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    color: white;
    text-shadow: 2px 1px ${({ theme }) => theme.colors.gray};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FormStyle = styled.div`
    padding: 10px 20px;
`;
