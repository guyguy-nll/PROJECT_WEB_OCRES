import React from 'react';
import Button from './button';
import { map, split } from 'lodash';
import './movie.css';

/**
 * Data reçu :
 *  movie, // Titre
    yearOfRelease,
    duration // en minutes,
    actors,
    poster, // lien vers une image d'affiche,
    boxOffice, // en USD$,
    rottenTomatoesScore
 */

export default class Movies extends React.Component {
    renderInfo(label, info) {
        return (<div className='infoLine'>
            <div className='infoLabel'>{label}</div>
            <div className='info'>{info}</div>
        </div>);
    }

    renderInfos(label, infos) {
        return (<div className='infoLine'>
            <div className='infoLabel'>{label}</div>
            <div>{map(infos, info => <div className='info' key ={`infoList-${info}`}>{info}</div>)}</div>
        </div>);
    }

    render() {
        const { infos, deleteMovie } = this.props;
        const { id,meteo,temp,humidite,vent,pression } = infos;

        return (
            <div className='movie'>
                
                <div className='infos'>
                    {this.renderInfo('Localisation', meteo)}
                    {this.renderInfo('Temp', temp)}
                    {this.renderInfo('humidite', humidite)}
                    {this.renderInfo('vent', vent)}
                    {this.renderInfo('pression', pression)}
                    
                </div>
                <Button text={'Delete movie'} onClick={() => deleteMovie(id)} />
            </div>)
    }
}