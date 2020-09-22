import React from 'react';
import './JokeList-item.style.scss';
import DownArrow from './icons/down-arrow.svg';
import UpArrow from './icons/up-arrow.svg';


const getEmoji = (vote) => {
      if (vote > -3 && vote < -1) {
            return {
                  el: <i className="em em-disappointed" />,
                  color: 'rgb(250, 152, 86)'
            }
      }
	else if (vote <= -3) {
		return {
			el: <i className="em em-angry" />,
			color: 'rgb(246, 91, 91)'
		};
	} else if (vote < 0) {
		return {
			el: <i className="em em-slightly_frowning_face" />,
                  color: 'rgb(250, 148, 90)'
		};
	} else if (vote > 0 && vote < 3) {
		return {
			el: <i className="em em-slightly_smiling_face" />,
			color: 'rgb(172, 75, 251)'
		};
	} else if (vote >= 3 && vote < 6) {
		return {
			el: <i className="em em-face_with_hand_over_mouth" />,
			color: 'rgb(75, 87, 251)'
		};
	} else if (vote >= 6 && vote < 9) {
		return {
			el: <i className="em em-grin" />,
			color: 'rgb(75, 201, 251)'
		};
	} else if (vote >= 9 && vote < 12) {
		return {
			el: <i className="em em-laughing" />,
			color: 'rgb(27, 251, 195)'
		};
	} else if (vote >= 12) {
		return {
			el: <i className="em em-rolling_on_the_floor_laughing" />,
			color: 'rgb(67, 185, 93)'
		};
	} else {
		return {
			el: <i className="em em-neutral_face" />,
			color: 'rgb(216, 230, 93)'
		};
	}
};

const JokeListItem = ({ text, votes, upVotes, downVotes }) => {
	return (
		<div className="joke-list-item">
			<button onClick={upVotes} className="joke-list-item__button up">
				<img src={UpArrow} alt="up arrow key" className="joke-list-item__icon" />
			</button>
			<span
				className="joke-list-item__votes"
				style={{
					borderColor: getEmoji(votes).color
				}}
			>
				{votes}
			</span>
			<button onClick={downVotes} className="joke-list-item__button down">
				<img src={DownArrow} alt="down arrow key" className="joke-list-item__icon" />
			</button>
			<p className="joke-list-item__text">{text}</p>
			<div className="joke-list-item__emoji">{getEmoji(votes).el}</div>
		</div>
	);
};
export default JokeListItem;
