import React, { useEffect, useState } from 'react';
import { Modal } from '../../shared';
import { Place as IPlace } from './../endpoints';
import styles from './Place.module.scss';
declare var google: any;
export interface PlaceProps {
    place: IPlace
}
//let map: google.maps.Map;

export const Place: React.FC<PlaceProps> = ({ place }) => {

  const [isOpen, setIsOpen] = useState(false);

  

    useEffect(() => {
      if (isOpen) {
        new google.maps.Map(document.getElementById("map") as HTMLElement, {
          center: { lat: +place.address.geo.lat, lng: +place.address.geo.lng },
          zoom: 8,
        });
      }

    },[isOpen])
    const imageSrc = `https://picsum.photos/200/300?random=${place.id}`;

    return (
      <>
       
          <div className={styles.container}>
            <img src={imageSrc}/>
            <div> {place.address.city}</div>
            <div> {place.address.street}</div>
            <div className={styles.mapLabel} onClick={() => setIsOpen(true)}>map</div>
          </div>
        
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}><div className={styles.mapContainer} id="map"/></Modal>
        
        </>

    )
}