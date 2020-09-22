import React, { Component } from 'react';
import './Joke.style.scss';
import Axios from 'axios';
import SideBar from '../Component/Sidebar/SideBar.component';
import JokeList from '../Component/JokeList/JokeList.component';
import Helper from '../Helper/Helper';
import Loader from '../Component/Loader/Loader';
class Joke extends Component {
    static defaultProps = {
        numberOfJokes: 10,
    };
    constructor(props) {
        super(props);
        this.state = {
            jokes: JSON.parse(localStorage.getItem('jokes') || '[]'),
            loading: false,
        };
    }
    componentDidMount() {
        if (this.state.jokes.length !== 10) this.getJokes();
    }
    getJokes = async () => {
        try {
            let joke = [];
            for (let i = 0; i < this.props.numberOfJokes; i++) {
                const res = await Axios.get('https://icanhazdadjoke.com/', {
                    headers: { Accept: 'application/json' },
                });
                joke.push({ id: Helper(), text: res.data.joke, votes: 0 });
            }
            this.setState({ jokes: joke, loading: false });
            localStorage.setItem('jokes', JSON.stringify(joke));
        } catch (e) {
            alert(e);
            this.setState({ loading: false });
        }
    };
    handleVotes = (id, dalta) => {
        this.setState(
            (prvState) => ({
                jokes: prvState.jokes.map((j) =>
                    j.id === id ? { ...j, votes: j.votes + dalta } : j
                ),
            }),
            () => {
                localStorage.setItem('jokes', JSON.stringify(this.state.jokes));
            }
        );
    };
    handleClick = () => {
        this.setState({ loading: true }, this.getJokes);
    };

    render() {
        if (this.state.loading) return <Loader />;
        return (
            <div className='joke'>
                <SideBar getNewJoke={this.handleClick} />
                <JokeList
                    jokes={this.state.jokes}
                    handleVotes={this.handleVotes}
                />
            </div>
        );
    }
}
export default Joke;
