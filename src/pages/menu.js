import React, { useState } from 'react';
import { IonButton, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonRouterOutlet, IonSplitPane, IonToolbar } from '@ionic/react';

function Menu(){

    const [count, setCount] = useState(0);
    const MoodsImage = [
    
        { src: 'img/love.png', text: 'Morrer de amores', fullText: 'Que tal um romance para aquecer esse coraçãozinho?' }, 
        { src: './img/exploradora.png',  text: 'Explorar novas culturas', fullText: 'Histórias que são narradas em diferentes culturas pra você viajar sem sair de casa' },
        { src: './img/acao.png', text: 'Bang bang, mais ação (INVESTIGAÇÃO)', fullText: 'Quer tranquilidade vai pescar, aqui é só ação, aventura, porrada e correria' },

    ];

    async function addStorage(){
       
        var favorito = MoodsImage[count];
        console.log(favorito);

        localStorage.setItem('favoritos', JSON.stringify([favorito]));
      //  const favoritos = () => localStorage.getItem('favoritos') ?? favorito; //chama só a primeira vez que é renderizado
     
      const favoritos =  localStorage.getItem('favoritos');
       var readFavoritos = JSON.parse(favoritos);
        console.log(readFavoritos);

        readFavoritos.push(MoodsImage[2]);
        localStorage.setItem('favoritos', JSON.stringify([readFavoritos]));
      //  favoritos.push(favorito);
        
        setCount((prevCount) => prevCount + 1)
    }

return (
 <>
 <IonPage>
    <IonHeader>
        <IonToolbar>
            <IonButtons slot="end">
                <IonMenuButton></IonMenuButton>
            </IonButtons>
        </IonToolbar>
    </IonHeader>
   <IonContent>
    <h1>Oi</h1>
    <IonButton onClick={addStorage}>Click me</IonButton>
   </IonContent>
    </IonPage>
 </>
);
}

export default Menu;