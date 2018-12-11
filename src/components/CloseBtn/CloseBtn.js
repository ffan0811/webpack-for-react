import React from 'react';
import CloseIcon from './close_icon.svg';

// 형태
// <CloseBtn/>

const CloseBtn = ({onClose, className}) => {
	return(
		<img src={CloseIcon} alt="닫기"/>
	);
};

export default CloseBtn;
