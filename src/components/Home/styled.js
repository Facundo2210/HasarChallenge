import styled from 'styled-components';

const HomeDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100vw;
	height: 100vh;

	.img_home {
		width: 15rem;
		height: 15rem;
		border-radius: 50%;
	}

	.btn_home {
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

	@media (max-width: 2500px) {
		.img_home {
			width: 14rem;
			height: 14rem;
		}
		.btn_home {
			width: 17rem;
		}
	}
	@media (max-width: 1441px) {
		.img_home {
			width: 12rem;
			height: 12rem;
		}
		.btn_home {
			width: 14rem;
		}
	}

	@media (max-width: 780px) {
		.img_home {
			width: 10rem;
			height: 10rem;
		}
		.btn_home {
			width: 13rem;
		}
	}
	@media (max-width: 380px) {
		.img_home {
			width: 8rem;
			height: 8rem;
		}
		.btn_home {
			width: 10rem;
		}
	}
`;

export default HomeDiv;
