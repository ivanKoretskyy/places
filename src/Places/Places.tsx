import React, {useEffect, useState} from 'react';
import { getPlaces, Place } from './endpoints/getPlaces';
import { NewPlace } from './NewPlace';

import styles from './Places.module.scss'
import { PlacesList } from './PlacesList';

export const Places:React.FC<{}> = () => {

    const [ places, setPlaces ] = useState<Place[]>([]);
    useEffect(() => {
        getPlaces().then(res => setPlaces(res.data ?? []))
    }, [])

    return         <div className={styles.container}> 
    <PlacesList newPlace={<NewPlace/>} list={places}/>
</div>
}