import styled from 'styled-components';

const FORM = styled.form`
	margin: -8px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 99vw;
	height: 80vh;

	.div_error {
		color: red;
	}
	input {
		outline: 0;
		border: 0;
		border-bottom: 1px solid rgb(127, 165, 199);
		background-color: rgba(255, 255, 255, 0.2);
		&:focus-within {
			border: 1px solid #46e9ae;
			border-radius: 10px;
		}
		font-weight: bold;
		padding: 10px 20px;
	}

	.list {
		width: 100%;
		text-align: center;
		margin: 4rem 0;
		list-style: none;
		ul {
			padding: 0px;
			li {
				width: 1rem;
				height: 1rem;
				border-radius: 1rem;
				background: #0f5090;
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
			}
			li:last-child {
				background: white;
			}
			li:last-child::before {
				display: none;
			}
		}
	}

	.h2_title {
		text-align: center;
		color: rgb(127, 165, 199);
		margin-bottom: 3rem;
	}

	.datos {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.input_cnt {
			margin: 0.3rem;
		}
	}

	.btn_ctn {
		margin-top: 3rem;
		display: flex;
		justify-content: space-around;
		width: 80%;

		.btn {
			text-align: center;
			cursor: pointer;
			background: rgb(254, 109, 26);
			border: none;
			padding: 0.3rem 1rem;
			color: white;
			border-radius: 0.8rem;
		}
		.btnBack {
			background-color: rgb(7, 95, 166);
		}
	}

	@media (max-width: 2500px) {
		.btn_ctn {
			width: 40%;
		}
	}
	@media (max-width: 1441px) {
		.btn_ctn {
			width: 100%;
		}
	}

	@media (max-width: 780px) {
		.btn_ctn {
			width: 40%;
		}
	}
	@media (max-width: 380px) {
		margin-top: 0.2rem;
		margin-bottom: 1rem;
		justify-content: space-around;
		.btn_ctn {
			width: 80%;
		}
	}
`;

export default FORM;
