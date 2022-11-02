import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { close} from 'ionicons/icons';
import { IonButtons, IonIcon } from '@ionic/react';




function rightMenu({handleDragStart, destroyDrawer, toogleMenu, blackoutOpen, itensFav}){


    return (
        <>
        <div className="allBlackout" onClick={destroyDrawer} style={{ display: blackoutOpen ? 'block' : 'none'}}></div>
        <div className="myMenu">

        <div className="closeMyMenu">
        <IonButtons slot="start">
          <IonIcon style={{padding: '5px', fontSize: '22px', color: '#731a1a', cursor: 'pointer'}} icon={close} onClick={toogleMenu} />
        </IonButtons>
        </div>

        <div className="updates">
        <p style={{marginBottom: '0px', color: '#fff'}}><small>Próximas atualizações:</small></p>
        <p style={{marginTop:'0px'}}>+ 50 Livros, + 2 moods</p>
        </div>
        {console.log(itensFav.length)}
        {itensFav.length === 0 ? (
        
          <div className="favoritos">
              <p className="meusFavoritos">Favoritos ({itensFav.length})</p>
              <AliceCarousel mouseTracking items={[<img src="./img/zero-favorito.jpg" onDragStart={handleDragStart} role="presentation" alt="Sem nenhum favorito" />]} />
          </div>
        ):(

          <div className="favoritos">
            <p className="meusFavoritos">Favoritos ({itensFav.length})</p>
            <AliceCarousel mouseTracking items={itensFav} />
          </div>
        )}
        

        <div className="footer">
          <p><small style={{color: '#fff'}}>Críticas e sugestões:</small>
            <br />
           <a style={{color: '#000'}} href="https://www.instagram.com/yanzada/">@yanzada</a>
          </p>
        </div>
        
    </div>
    </>
    );
}

export default rightMenu;