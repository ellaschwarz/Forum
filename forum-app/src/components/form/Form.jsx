import React from 'react';
import { FormDivStyle, FormHeadStyle, FormStyle } from './Form.style';

export default function Form(props) {
	return (
		<FormDivStyle>
			<FormHeadStyle>
                <h1>Welcome to Forum</h1>
            </FormHeadStyle>
            <FormStyle>
			<form>{props.children}</form>
            </FormStyle>
		</FormDivStyle>
	);
}
