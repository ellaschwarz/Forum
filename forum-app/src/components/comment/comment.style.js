import styled from 'styled-components';

export const CommentPageContainer = styled.div`
	grid-row: 2/3;
	grid-column: 1/3;
	border-radius: 10px;
`;

export const CommentFormContainer = styled.div`
	width: 100%;
	background: white;
	grid-row: 3/4;
	margin: auto;
	padding: 10px;
	border-radius: 10px;
`;

export const CommentContainer = styled(CommentFormContainer)`
	overflow: auto;
	width: 80%;
	height: 40vh;
`;

export const CommentButton = styled.button`
	width: 50px;
	height: 50px;
	border-radius: 10px;
	font-size: 24px;
	padding: 5px;
	position: relative;
	left: 95%;
`;

export const CommentDiv = styled.div`
	border-top: 1px solid ${({ theme }) => theme.colors.gray};
	text-align: left;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	padding-left: 15px;
	padding-right: 15px;
`;

export const CommentTitle = styled.h4`
	flex-grow: 12;
	text-align: left;
`

export const CommentTime = styled.p`
	font-size: 12px;
	text-align: right;
`

export const CommentAuthor = styled.h5`
	text-align: right;

`

