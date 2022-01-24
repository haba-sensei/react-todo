import React from 'react';
import { FcCheckmark, FcClock } from "react-icons/fc";
import './TodoIcon.css';

function TodoIcon({status}){
    
    return (
			<>
				<span>{status ? <FcCheckmark /> : <FcClock />}</span>
			</>
		);
}

export { TodoIcon };