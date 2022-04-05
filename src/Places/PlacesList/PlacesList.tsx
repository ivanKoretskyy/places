import React from 'react';
import { Place as IPlace } from '../endpoints';
import { Place } from '../Place'

import styles from './PlacesList.module.scss';

export interface PlaceListPros {
    list: IPlace[];
    newPlace: React.ReactNode
}



export const PlacesList: React.FC<PlaceListPros> = props => {
    return <div className={styles.list}>
        {props.newPlace}
        {props.list.map(place => {
        return <Place key={place.id} place={place}/>
    })}
    </div>
}