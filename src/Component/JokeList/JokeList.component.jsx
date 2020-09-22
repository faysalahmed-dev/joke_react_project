import React from 'react';
import './JokeList.style.scss';
import JokeListItem from '../JokeList-item/JokeList-item.component';


const JokeList = ({ jokes, handleVotes }) => {
      const sortVotes = jokes.sort((a,b) => b.votes - a.votes)
      return(<section className="joke__section">
            {sortVotes.map(({ id, text, votes }) => (
			<JokeListItem
				text={text}
				votes={votes}
                        key={id}
				upVotes={() => handleVotes(id, 1)}
				downVotes={() => handleVotes(id, -1)}
			/>
		))}
	</section>
)};

export default JokeList;
