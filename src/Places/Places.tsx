import React, {useEffect, useState} from 'react';
import { getPlaces, Place } from './endpoints/getPlaces';

import styles from './Places.module.scss'
import { PlacesList } from './PlacesList';

export const Places:React.FC<{}> = () => {

    const [ places, setPlaces ] = useState<Place[] | null>(null);
    useEffect(() => {
        getPlaces().then(res => setPlaces(res.data))
    }, [])

    return         <div className={styles.container}> 
    {places?.length ? <PlacesList list={places}/> : <div>NO places found</div>}
</div>
}