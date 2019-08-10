import React from 'react'

type Props = {
    name: string,
    model: string,
    length: string,
    crew: string,
}

class SpaceShip extends React.PureComponent <Props> {
    render() {
        const { name, model, length, crew } = this.props;
        return (
            <div>
                <span>Name: {name}</span>
                <span> Model: {model}</span>
                <span> Length: {length}</span>
                <span> Crew: {crew}</span>
            </div>
        )
    }
}

export default SpaceShip;
