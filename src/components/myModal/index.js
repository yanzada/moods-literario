import {
    IonImg,
    IonGrid,
    IonRow,
    IonCol,
    IonAvatar,
    IonIcon,
     IonButton,
  } from '@ionic/react';
  import {Link} from 'react-router-dom';
  import { send } from 'ionicons/icons';

function FadeCupertino({data, idMood}) {
   
    return(
    <div id="divCupertinoPane" className="cupertino-pane">
         
        <IonGrid>
                <IonRow>
                <IonCol size="3">
                <IonAvatar className='itemAvatar'>
                        <IonImg className="imgMood" src={data.src} />
                    </IonAvatar>
                </IonCol>
                <IonCol size="8">
                    <p>{data.fullText}</p>
                </IonCol>
                
                </IonRow>
                
            </IonGrid>
            
            <Link to={`/books/${idMood}`}>
                <IonButton slot="end" size="default" className="showMeBooks" color="tertiary">
                Prosseguir &nbsp;
                <IonIcon icon={send} size="small" slot="end" style={{marginTop: "-3px"}}/>
                </IonButton>
            </Link>
         
        
    </div>
)}

export default FadeCupertino;

