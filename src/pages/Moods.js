import {
    IonContent,
    IonHeader,
    IonToolbar,
     IonItem,
    IonLabel,
    IonImg,
    IonGrid,
    IonRow,
    IonCol,
    IonAvatar,
    IonIcon,
    IonButtons,
    IonPage,
  } from '@ionic/react';
  
  import React, {useState, useEffect} from 'react';
  import { ellipsisVerticalOutline, checkbox} from 'ionicons/icons';
  
  import { CupertinoPane } from "cupertino-pane";
  import FadeCupertino from '../components/myModal';
  import MoodsImage from '../components/moodsImage';
  import TalkFlow from '../components/talkFlow';
  import PizzaIcon from '../components/pizza';
 

import RightMenu from '../components/rightMenu';

  import '../css/moods.css';


  function Moods() {
   
    //init 
    var drawer;
    const[currMood, setCurrMood] = useState({ src: 'img/love.png', text: 'Morrer de amores', fullText: 'Que tal um romance para aquecer esse coraçãozinho?' });
    const[countChat, setCountChat] = useState(0);
    const[textPizza, setTextPizza] = useState();
    const [currIdMood, setCurrIdMood] = useState();
    const[blackoutOpen, setBlackoutOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [itensFav, setItensFav] = useState([]);
    const handleDragStart = (e) => e.preventDefault();
 

  //Draer 
  drawer = new CupertinoPane('.cupertino-pane', {
      breaks: {
           top: { enabled: false, offset: 700 },
           middle: { enabled: true, height: 200 },
      }, 
      events: {
        onWillPresent: (ev) => {
        },
        onDidDismiss: (ev) => {
          let currActiveItem = document.querySelector('[iconOpen="true"]');
          let currActiveAvatar = document.querySelector('[avatarOpen="true"]');
          currActiveItem.setAttribute('iconOpen', 'false');
          currActiveItem.classList.add('styleIconNone');
          currActiveAvatar.setAttribute('avatarOpen', 'false');
          currActiveAvatar.classList.remove("selectedMood");
           styleToogleModal(false)
        }
      },
      
     });//end drawer

  
 
    
  //Pizza useEffect
   useEffect(() => {

    console.log('pizza');
    if(countChat < 63){
      setTextPizza(TalkFlow[countChat]);
    }
    

    if(countChat === 24){
      document.getElementById('divPizza1').classList.add('divPizzaClose');
      document.getElementById('divPizza2').classList.remove('divPizzaClose');
      document.getElementById('divPizza2').classList.add('divPizzaOpen');
    }

    if(countChat === 52){
      document.getElementById('divPizza2').classList.add('colorTextRed');
    }

    if(countChat === 53){
      document.getElementById('divPizza2').classList.remove('colorTextRed');
    }

    if(countChat === 61){
      document.getElementById('yanzada').classList.remove('divPizzaClose');
      document.getElementById('yanzada').classList.add('divPizzaOpen');

      document.getElementById('divPizza2').classList.remove('divPizzaOpen');
      document.getElementById('divPizza2').classList.add('divPizzaClose');
      
    }

 }, [countChat]);





    //Click in mood
    async function selectMood(event) {
        
        let el = event.currentTarget;
        let itens = document.querySelectorAll('.itemAvatar');
        let currKey = el.valueKey;

        //set curr ID
        setCurrIdMood(currKey);

        //remove all calss
        itens.forEach(item => {
          item.classList.remove("selectedMood");
        });
      
        //add class
        el.classList.add('selectedMood');
      
        //hide icons
        let icons = document.querySelectorAll('.styleIcon');
        icons.forEach(icon => {
          icon.classList.add('styleIconNone');
        });

        //show icon selected
        let idIcon = 'icon'+el.valueKey;
        document.getElementById(idIcon).classList.remove('styleIconNone');
        document.getElementById(idIcon).setAttribute('iconOpen', true);

        //set show avatar
        el.setAttribute('avatarOpen', true);
        
       //open modal
        drawer.present({animate: true});

        //change style
        styleToogleModal(true);
        setCurrMood(MoodsImage[currKey]);
          
      }//end func



      //Open modal 2
      async function destroyDrawer() {
        let btnDestroy = document.querySelector('.destroy-button');
        btnDestroy.click();
       
      
        styleToogleModal(true);
    
      };




      /* UTIL */
      
      function styleToogleModal(state){
        //state = if modal open or close
        let contentApp = document.querySelector('.contentApp');
        let headerApp = document.querySelector('.ionHeader');
        
        if(state === true){
          contentApp.classList.add('backgroundModalOpen');
          headerApp.classList.add('backgroundModalOpen');
        } else{
          contentApp.classList.remove('backgroundModalOpen');
          headerApp.classList.remove('backgroundModalOpen');
        }
       
        setBlackoutOpen(state);
      }
  
      
      function toogleMenu(){
        
        var items = [];
        if(menuOpen === false){
      
            setBlackoutOpen(true);
    
            var getFav = localStorage.getItem('favoritos');
            var allFav = JSON.parse(getFav);
    
            //Se existe favoritos
            if(getFav){
                allFav.forEach(e => {
                  let imageStorage = <img src={e.image} onDragStart={handleDragStart} role="presentation" />;
                  items.push(imageStorage);
                });
    
                setItensFav(items);
            }
    
            let myMenu = document.querySelector('.myMenu');
            myMenu.classList.add('myMenuVisible');
            setMenuOpen(true);
        }
        else
        {
          let myMenu = document.querySelector('.myMenu');
          myMenu.classList.remove('myMenuVisible');
          setMenuOpen(false);
          setBlackoutOpen(false);
        }
          
      }//end func

  
     

    return (
        <IonPage style={{backgroundColor:'#ccc', maxWidth: '500px', margin: 'auto', border: '1px solid #ccc'}}>
          
          
          {/* RIGHT MENU */}
          <RightMenu handleDragStart={handleDragStart} destroyDrawer={destroyDrawer} toogleMenu={toogleMenu} blackoutOpen={blackoutOpen} itensFav={itensFav} />
     
          {/* Header */}
          <IonHeader className="ionHeader">
          <IonToolbar>
            <IonImg src="./img/logo-moods-white.png" style={{width: "140px", margin: 'auto'}} />
          
            <IonButtons slot="end">
              <IonIcon style={{fontSize: '25px', marginRight: '10px', cursor: 'pointer'}} icon={ellipsisVerticalOutline} onClick={toogleMenu} />
            </IonButtons>

          
          </IonToolbar>

        

          </IonHeader>
         

        

         
          <IonContent className="ion-padding contentApp">

       


            {/* <div className="blackout"></div> */}
            <div size="6" style={{fontFamily: 'Expletus Sans', marginBottom: '8px'}}>
                <h4>Qual seu estado de espirito para próxima leitura?</h4>
                <div style={{height:'2px',width:'20%',backgroundColor:'#02b5a5'}}></div>
             </div>
            
            <IonGrid>
               <IonRow>
                    
                    {/* MAP ICON MOOD */}
                    {MoodsImage.map((image, i) => (
                    <IonCol size="6" className="ion-text-center" key={i}>
                        <IonItem lines="none" className='listMood alignmentCenter'>
                              <IonIcon iconOpen={false} id={'icon' + i} className="styleIcon styleIconNone" icon={checkbox} />
                              <IonAvatar avatarOpen={false}  onClick={selectMood} id={'mood' + i} valueKey={i} className='itemAvatar'>
                                <IonImg className="imgMood" src={image.src} />
                              </IonAvatar>
                        </IonItem>
                        <IonLabel style={{ fontFamily: 'EB Garamond'}}>{image.text}</IonLabel>
                      </IonCol>
                    ))}
        
                  </IonRow>
            </IonGrid>
             
                      {/* Include Pizza */}
                      <PizzaIcon setCountChat={setCountChat} textPizza={textPizza} />

          </IonContent>
        
         
            
          {/* Incui o modal */}
          <FadeCupertino data={currMood}  idMood={currIdMood} />
         
        
        </IonPage>
      );
    }
    
    export default Moods;