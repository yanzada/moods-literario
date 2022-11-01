import React, {useEffect, useState} from 'react';
import { IonApp, IonBadge, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonRow, IonToolbar,  IonLoading, IonToast } from '@ionic/react';
import ReactStars from 'react-rating-stars-component';
import { arrowBack, send, heartOutline, heart } from 'ionicons/icons';
import '../css/moods.css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import FakeLoading from '../components/fakeLoading';


function Books() {

 
      const[titleBook, setTitleBook] = useState('');
      const[imageBook, setImageBook] = useState('');
      const[authorBook, setAuthorBook] = useState('');
      const[priceBook, setPriceBook] = useState('');
      const[numPagesBook, setNumPagesBook] = useState('');
      const[ratingBook, setRatingBook] = useState();
      const [starsKey, setStarsKey] = useState(Math.random());
      const[descriptionBook, setDescriptionBook] = useState('');
      const[showToast, setShowToast] = useState(false);
      const[messageToast, setMessageToast] = useState();
      const[colorFav, setColorFav] = useState(false);
  
 
    const[showLoading, setShowLoading] = useState();
   
   // const idMood = useParams();
    const { idMood } = useParams();


    useEffect(() => {
      getBook();

    }, []);

   
      
    useEffect(() => {

        verifyFav();
     
    });

   

    function getBook(){
      
      axios.interceptors.request.use(function(config) {
        // Do something before request is sent
       
        setShowLoading(true);
       
        return config;
      }, function(error) {
        // Do something with request error
        console.log('Error');
        return Promise.reject(error);
      });
      
      axios.interceptors.response.use(function(response) {
        // Do something with response data
 
        setShowLoading(false);
        return response;
      }, function(error) {
        // Do something with response error
        console.log('Error fetching the data');
        return Promise.reject(error);
      });
      
   
   
      axios.get(`https://api.moodsliterario.com.br/livro?id=${idMood}`)
      .then((res) => {
        let dataBook = res.data;
        setTitleBook(dataBook.title);
        setImageBook(dataBook.image);
        setAuthorBook(dataBook.author);
        setPriceBook(dataBook.price);
        setNumPagesBook(dataBook.numberPages);

         let newRating = Number(dataBook.rating);
         setRatingBook(newRating);
      
         setTimeout(() => {
          setStarsKey(Math.random()); 
           
         }, 500);
        
        setDescriptionBook(dataBook.description);
       // setColorFav(false); 
       

        
      })
      .catch((err) => console.log(err));

    }

    function verifyFav(){

    
      var prevFav = localStorage.getItem('favoritos');
      var newFav = JSON.parse(prevFav);
      if(prevFav){
        var existImage = newFav.findIndex(el => el.image === imageBook);
        if(existImage !== -1){
       
          setColorFav(true);
        }else{
          setColorFav(false);
         
        }
      }
    }//end func

   

    function saveFav(){
      var newFav = [];
     
      
      let bookFav = {
        title:titleBook,
        image:imageBook,
      };

      var prevFav = localStorage.getItem('favoritos');

      if(prevFav === null){
        localStorage.setItem('favoritos', JSON.stringify([bookFav]));
        setColorFav(true);

        setShowToast(true);
        setMessageToast('Favoritado com sucesso!');
      }
      else{
         newFav = JSON.parse(prevFav);
        var existImage = newFav.findIndex(el => el.image === imageBook);
      
        if(existImage !== -1){
          newFav.splice(existImage, 1);
          setColorFav(false);

          setShowToast(true);
          setMessageToast('Removido dos favoritos!');
        }else{
          newFav.push(bookFav);
          setColorFav(true);

          setShowToast(true);
          setMessageToast('Favoritado com sucesso!');
        }
       

        localStorage.setItem('favoritos', JSON.stringify(newFav));
       
      }

    
    }
   
    return (
      
     

     
        <IonApp style={{backgroundColor:'#fafafa', maxWidth: '500px', margin: 'auto', border: '1px solid #ccc'}}>
      
        <IonHeader>
            <IonToolbar>
           
                    <Link to="/" style={{textDecoration:'none'}}>
                      <IonButtons slot="start" style={{color: '#fff', cursor: 'pointer'}}>
                        <IonIcon icon={arrowBack} style={{fontSize: '22px'}} />
                        <p> Voltar</p>
                      </IonButtons>
                    </Link>
                    
                     
             
                      <IonButtons onClick={getBook} slot="end" style={{color: '#fff', cursor: 'pointer'}}>
                      <p>Próximo &nbsp;</p>
                        <IonIcon icon={send} style={{fontSize: '16px'}} />
                      </IonButtons>
             
            </IonToolbar>
          </IonHeader>
       
          <IonContent className="ion-padding">

          <IonToast className="toastBook"
              isOpen={showToast}
              onDidDismiss={() => setShowToast(false)}
              duration={3000}
              style={{width: '200px', margin: '0 auto'}}
              message={messageToast}
              position="bottom"
           />

            <IonLoading
              isOpen={showLoading}
              spinner="bubbles"
              onDidDismiss={() => setShowLoading(false)}
              message={'Buscando Livro...'}
              
            />

          {titleBook ? (  
            <>   
              <div className="scopeTitle" size="8">
                <h4>{titleBook}</h4>
                <div className="lineScopeTitle"></div>
             </div>
          

              <IonGrid style={{paddingLeft:'0px', marginTop: '5px'}}>
                  <IonRow>
                  <IonCol size="5.5" className="" >
                      <IonItem lines="none" className='alignmentCenter'>
                           <IonImg className="imgBook" src={imageBook} />
                      </IonItem>
                  </IonCol>

                  <IonCol size="6.5" className="" >
                      <IonItem>
                        <IonIcon slot="end" style={{color: colorFav ? 'red' : '#000'}} onClick={saveFav}  icon={colorFav ? heart : heartOutline}  />
                      </IonItem>
                     
                      <IonItem>
                        <IonBadge slot="end">{authorBook}</IonBadge>
                        <IonLabel>Autor:</IonLabel>
                      </IonItem>

                      <IonItem>
                        <IonBadge slot="end">{priceBook}</IonBadge>
                        <IonLabel>Preço médio:</IonLabel>
                    </IonItem>

                    <IonItem>
                        <IonBadge slot="end">{numPagesBook}</IonBadge>
                        <IonLabel>Nº de páginas:</IonLabel>
                    </IonItem>

                    <IonItem>
                    <IonLabel>Avaliação:</IonLabel>
                    <ReactStars
                      key={starsKey}
                      count={5}
                      size={24}
                      edit={false}
                      value={ratingBook}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                    </IonItem>
                  </IonCol>

                  </IonRow>
              </IonGrid>

            
              
              <div className="scopeTitle" style={{paddingBottom: '5px'}} size="8">
                <h5>Sobre o livro:</h5>
                <div className="lineScopeTitle"></div>
             </div>

                    <p style={{textAlign: 'justify', fontFamily: 'Arial', fontWeight:'300', lineHeight: '22px'}}>
                      {/* {descriptionBook} */}
                      <span dangerouslySetInnerHTML={{ __html: descriptionBook }} />
                    </p>
          </>
          ) : (
            
              <FakeLoading />
          )}


    

        </IonContent>
            
              

     </IonApp>
   
    );

}

export default Books