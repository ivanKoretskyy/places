import React, { useEffect, useState } from 'react';
import { Modal } from '../../shared';
import { NewPlaceForm } from '../NewPlaceForm';
import styles from './NewPlace.module.scss';
declare var google: any;
export interface NewPlaceProps {
}
//let map: google.maps.Map;

export const NewPlace: React.FC<NewPlaceProps> = () => {

  const [isOpen, setIsOpen] = useState(false);

  

    useEffect(() => {
      if (isOpen) {
        new google.maps.Map(document.getElementById("map") as HTMLElement, {
          center: { lat: 41.881832, lng:  -87.623177 },
          zoom: 8,
        });
      }

    },[isOpen])

    return (
      <>
       
          <div className={styles.container}>
            <div className={styles.mapLabel} onClick={() => setIsOpen(true)}>Add</div>
          </div>
        
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <div className={styles.mapContainer} id="map"/>
            <NewPlaceForm />
        </Modal>
        
        </>

    )
}