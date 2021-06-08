import styled from 'styled-components';

const DIV = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-height: 100vh;
	min-height: 100vh;

	.start {
		margin-top: 1rem;
		text-decoration: none;
		text-align: center;
		cursor: pointer;
		background: rgb(254, 109, 26);
		border: none;
		padding: 0.8rem 1rem;
		color: white;
		font-weight: bold;
		border-radius: 0.8rem;
		width: 10rem;
	}
`;
export default DIV;
