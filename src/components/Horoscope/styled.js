import styled from 'styled-components';

const DIV = styled.div`
	margin: -8px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	width: 99vw;
	height: 80vh;

	.sign_img {
		margin-left: 2rem;
		margin-top: 3rem;
		width: 90vw;
		max-height: 7rem;
		align-self: center;
	}
	.hcp_cnt {
		margin: 1rem;
		text-align: center;
	}
	p {
		text-align: center;
		margin: 0 1rem;
	}

	.home {
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
		&:hover {
			transform: scale(1.1);
		}
		&:active {
			transform: scale(0.9);
		}
	}
	@media (max-width: 3600px) {
		.sign_img {
			width: 35vw;
		}
	}
	@media (max-width: 2500px) {
		.sign_img {
			width: 35vw;
			align-self: flex-start;
		}
	}
	@media (max-width: 1441px) {
		.sign_img {
			width: 35vw;
			align-self: flex-start;
		}
	}

	@media (max-width: 780px) {
		.sign_img {
			width: 65vw;
			align-self: flex-start;
		}
	}
	@media (max-width: 380px) {
		.sign_img {
			margin-top: 6rem;
			width: 90vw;
			align-self: flex-start;
		}
	}
`;

export default DIV;
