import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	return (
		<>
			{options.map((option) => (
				<button type="button" name={option} onClick={onLeaveFeedback}>
					{option}
				</button>
            ))}
		</>
	);
};
FeedbackOptions.propTypes = {
	options: PropTypes.array.isRequired,
	onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;