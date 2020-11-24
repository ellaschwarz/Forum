import styled from 'styled-components';

export const ListContiner = styled.div`
	overflow: auto;
	height: 90vh;
	width: 70%;
	padding: 1%;
	align-content: center;
	margin: auto;
`;
export const PostContainer = styled.div`
	display: grid;
	grid-template-rows: 1fr 1fr;
	grid-template-columns: 1fr 1fr;
	padding: 15px;
	box-shadow: 1px 1px 3px 3px ${({ theme }) => theme.colors.blue};
	background-color: ${({ theme }) => theme.colors.coldLightBlue};
	border-radius: 10px;
	margin-bottom: 10px;
    cursor: pointer;
`;

export const PostTitleContainer = styled.div`
	grid-row: 1/2;
	grid-column: 1/3;
`;

export const PostTitle = styled.h2`
	color: ${({ theme }) => theme.colors.darkBlue};
	float: left;
`;

export const PostInfo = styled.div`
	grid-row: 2/4;
	grid-column: 2/3;
	justify-self: end;
`;

export const PostDetailContainer = styled(PostContainer)`
	height: 90vh;
	width: 90%;
	margin: auto;
	box-shadow: none;
	background-color: transparent;
	grid-template-rows: repeat(5, 1fr);
	grid-template-columns: 1fr 1fr;
`;

export const PostDetailItem = styled(PostContainer)`
	grid-row: 1/2;
	grid-column: 1/3;
	display: grid;
	grid-template-columns: 30px 220px 1fr 100px 50px;
	grid-template-rows: repeat(5, auto);
	grid-row-gap: 7px;
	width: 80%;
	margin: auto;
	margin-bottom: 15px;
	background: ${({ theme }) => theme.colors.coldLightBlue};
`;

export const ButtonStyle = styled.button`
	width: 130px;
	float: left;
	margin: auto;
	position: relative;
	font-size: 24px;
	padding: 3px;
	margin-left: 1px;
`;

export const HomeButton = styled(ButtonStyle)`
	font-size: 30px;
	padding: 0px;
`;
export const PostButton = styled(ButtonStyle)`
	grid-column: 1/3;
	margin: auto;
`;

export const FormContainer = styled.div`
	grid-column: 1/3;
	grid-row: 1/2;
`;

export const PostFormPage = styled.div`
	width: 90%;
	margin: auto;
	margin-top: 70px;
`;

export const ContentContainer = styled.div`
	overflow: auto;
	grid-row: 4/6;
	grid-column: 1/7;
	background-color: ${({ theme }) => theme.colors.lightBlue};
	max-height: 130px;
	padding: 5px;
	border-radius: 5px;
`;

export const CreatedTag = styled.p`
	font-size: 12px;
	grid-row: 3/4;
	grid-column: 1/3;
`;

export const UpdatedTag = styled(CreatedTag)`
	grid-column: 3/4;
`;

export const TitleTag = styled.h1`
	grid-row: 2/3;
	grid-column: 2/5;
	text-align: left;
	margin-left: 45px;
`;
export const IdTitle = styled.h1`
	grid-row: 2/3;
	grid-column: 1/2;
`;

export const PTag = styled.p`
	justify-self: right;
	align-self: center;
`;
