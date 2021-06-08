import styled from 'styled-components';

const DIV = styled.div`
	margin: -8px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	width: 99vw;
	height: 80vh;

	.img_cnt {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.h2_sbttl {
		color: rgb(127, 165, 199);
	}

	img {
		width: 25%;
		cursor: pointer;
	}

	.ul_cnt {
		padding: 0;
		width: 100%;
		text-align: center;
		margin: 5rem 0;

		li {
			width: 1rem;
			height: 1rem;
			border-radius: 1rem;
			background: white;
			border: 1px solid #0f5090;
			margin: 0 2rem 0 2rem;
			display: inline-block;
			color: white;
			position: relative;
		}
		li::before {
			content: '';
			position: absolute;
			top: 0.5rem;
			left: 1rem;
			width: 4.2rem;
			height: 0.15rem;
			background: #0f5090;
			z-index: -1;
		}
		li:first-child {
			background: #0f5090;
		}
		li:last-child::before {
			display: none;
		}
	}

	.continue {
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
	.error {
		font-size: 1.5rem;
		color: red;
	}
	.select {
		background-color: rgb(240, 240, 240);
	}
	/* 
 
*/

	@media (max-width: 2500px) {
		.continue {
			width: 17rem;
		}
		img {
			width: 18%;
		}
	}
	@media (max-width: 1441px) {
		.continue {
			width: 14rem;
		}
		img {
			width: 20%;
		}
	}

	@media (max-width: 780px) {
		.continue {
			width: 13rem;
		}
		img {
			width: 23%;
		}
	}
	@media (max-width: 380px) {
		.continue {
			width: 10rem;
		}
		img {
			width: 25%;
		}
	}
`;

export default DIV;
