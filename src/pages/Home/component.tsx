import React from 'react'
import axios, { AxiosResponse } from 'axios'
import SpaceShip from '../../components/SpaceShip/SpaceShip'

type State = {
    results: {}[],
}

type StarWarsBattleShip = {
    name: string,
    model: string,
    length: string,
    crew: string,
}

export default class Home extends React.PureComponent<{}, State> {
    state = {
        results: [],
    };

    componentDidMount() {
        axios.get('https://swapi.co/api/starships')
            .then((response: AxiosResponse<{ results: StarWarsBattleShip[] }>) => {
                this.setState({ results: response.data.results })
            })

    }

    render() {
        return (
            <div>
                {this.state.results.map((item: {
                    name: string,
                    model: string,
                    length: string,
                    crew: string,
                }) => (
                    <SpaceShip
                        name={item.name}
                        model={item.model}
                        length={item.length}
                        crew={item.crew}
                    />
                ))}
                Hello TypeScript
            </div>
        )
    }
}
