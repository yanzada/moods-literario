import React from 'react';
import { IonAvatar, IonItem, IonLabel, IonList, IonListHeader, IonSkeletonText, IonThumbnail } from "@ionic/react";


function FakeLoading(){

    return (
        <>
            
                
        <div className="ion-padding custom-skeleton">
        <IonSkeletonText animated style={{ width: '60%' }} />
        <IonSkeletonText animated />
        <IonSkeletonText animated style={{ width: '88%' }} />
        <IonSkeletonText animated style={{ width: '70%' }} />
        <IonSkeletonText animated style={{ width: '60%' }} />
        </div>

        <IonList>
        <IonListHeader>
            <IonLabel>
            <IonSkeletonText animated style={{ width: '20%' }} />
            </IonLabel>
        </IonListHeader>
        <IonItem>
            <IonAvatar slot="start">
            <IonSkeletonText animated />
            </IonAvatar>
            <IonLabel>
            <h3>
                <IonSkeletonText animated style={{ width: '50%' }} />
            </h3>
            <p>
                <IonSkeletonText animated style={{ width: '80%' }} />
            </p>
            <p>
                <IonSkeletonText animated style={{ width: '60%' }} />
            </p>
            </IonLabel>
        </IonItem>
        <IonItem>
            <IonThumbnail slot="start">
            <IonSkeletonText animated />
            </IonThumbnail>
            <IonLabel>
            <h3>
                <IonSkeletonText animated style={{ width: '50%' }} />
            </h3>
            <p>
                <IonSkeletonText animated style={{ width: '80%' }} />
            </p>
            <p>
                <IonSkeletonText animated style={{ width: '60%' }} />
            </p>
            </IonLabel>
        </IonItem>
        <IonItem>
            <IonSkeletonText animated style={{ width: '27px', height: '27px' }} slot="start" />
            <IonLabel>
            <h3>
                <IonSkeletonText animated style={{ width: '50%' }} />
            </h3>
            <p>
                <IonSkeletonText animated style={{ width: '80%' }} />
            </p>
            <p>
                <IonSkeletonText animated style={{ width: '60%' }} />
            </p>
            </IonLabel>
        </IonItem>
        </IonList>
    </>
    )
}
export default FakeLoading