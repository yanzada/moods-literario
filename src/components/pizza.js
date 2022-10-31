import {
    IonItem,
    IonIcon,
    IonAvatar,
  } from '@ionic/react';
import { pizzaOutline } from 'ionicons/icons';

function PizzaIcon({setCountChat, textPizza}){

    return(
        <>
            <div id="divPizza1" className="divPizzaOpen">
                    
                    <p style={{textAlign: 'right', width:'80%',  fontSize: '12px',paddingLeft: '30px', marginTop: '20px'}}>{textPizza}</p>
                    
                    <IonItem lines="none">
                      <IonIcon icon={pizzaOutline} 
                              onClick={() => setCountChat((prevCount) => prevCount + 1)} 
                              size="large"
                              style={{  float:'right', cursor: 'pointer', marginTop: '8px' ,width: '50px'}}
                              >
                              
                      </IonIcon>
                    </IonItem>
                    
                    </div>
                    
                    <div id="divPizza2" className="divPizzaClose">
                    
                      <IonItem lines="none">
                        <IonIcon icon={pizzaOutline} 
                                onClick={() => setCountChat((prevCount) => prevCount + 1)} 
                                size="large"
                                style={{ float:'left', cursor: 'pointer', marginTop: '8px' ,width: '50px'}}
                                >
                                
                        </IonIcon>
                      </IonItem>
                    
                      <p style={{textAlign: 'left', width:'80%',  fontSize: '13px',paddingRight: '30px', marginTop: '20px'}}>{textPizza}</p>
                    
                    </div>

                    <div id="yanzada" className="divPizzaClose">

                    <p style={{textAlign: 'right', width:'90%',  fontSize: '12px',paddingLeft: '20px', marginTop: '28px'}}>{textPizza}</p>

                    <IonItem lines="none" style={{ float:'right', cursor: 'pointer', marginTop: '8px' ,width: 'fit-content', paddingLeft:'0px'}}>
                      <IonAvatar slot="end"  onClick={() => setCountChat((prevCount) => prevCount + 1)} >
                          <img alt="logo-yanzada" src="/img/logo-yanzada.png" />
                      </IonAvatar>
                    </IonItem>

                    </div>
        </>
    )

}

export default PizzaIcon