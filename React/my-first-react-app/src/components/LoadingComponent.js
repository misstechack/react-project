import React from 'react';

export const Loading = () => {
	return(
		<div className="container  mt-5 mb-5 loading">
			<span className="fa fa-spinner fa-pulse fa-3x fa-fw"></span>
			<p> Loading.... </p>
		</div>
	);
};