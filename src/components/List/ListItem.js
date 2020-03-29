import styled from 'styled-components';

const ListItem = styled.li`
	display: ${(props) => (props.inline ? 'inline' : 'block')};
	margin-left: ${(props) => (props.inline ? '2rem' : '0')};
	font-size: 130%
	;

	a {
		color: white;
		text-decoration: none;
		&:hover {
			color: red;
		}
	}
`;

export default ListItem;
