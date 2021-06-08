import styled from 'styled-components';

const DIV = styled.div`
	margin: -8px;
	display: flex;
	background-color: rgb(7, 95, 166);
	justify-content: space-between;
	align-items: center;
	height: 8vh;
	min-height: 2.5rem;
	font-size: 2rem;
	color: #fff;
	width: 100vw;

	.Arrow_back {
		margin-left: 1rem;
		background-color: #1f4c81;
		box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.3vw;
		max-height: 100%;
		border-radius: 50%;
		&:hover {
			cursor: pointer;
		}
	}
	.Text {
		margin-right: 1rem;
	}
`;

export default DIV;
