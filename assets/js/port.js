document.addEventListener('DOMContentLoaded', function(){
    let imagenes=[
      {img: 'assets/images/wr/wr6.jpg'},
      {img: 'assets/images/wr/wr2.jpg'},
      {img: 'assets/images/wr/wr3.jpg'},
      {img: 'assets/images/wr/wr8.jpg'},
      {img: 'assets/images/wr/wr11.jpg'},
      {img: 'assets/images/wr/wr1.jpg'},
      {img: 'assets/images/wr/wr5.jpg'},
      {img: 'assets/images/wr/wr12.jpg'},
      {img: 'assets/images/wr/wr14.jpg'},
      {img: 'assets/images/wr/wr10.jpg'},
      {img: 'assets/images/wr/wr7.jpg'},
      {img: 'assets/images/wr/wr15.jpg'},
      {img: 'assets/images/wr/wr4.jpg'},
      {img: 'assets/images/wr/wr13.jpg'},
      {img: 'assets/images/wr/wr16.jpg'},
  
      {img: 'assets/images/ill/il1.jpg'},
      {img: 'assets/images/ill/il3.jpg'},
      {img: 'assets/images/ill/il4.jpg'},
      {img: 'assets/images/ill/il2.jpg'},
      {img: 'assets/images/ill/il8.jpg'},
      {img: 'assets/images/ill/il6.jpg'},
      {img: 'assets/images/ill/il9.jpg'},
      {img: 'assets/images/ill/il5.jpg'},
      {img: 'assets/images/ill/il7.jpg'},
      {img: 'assets/images/ill/il10.jpg'},
  
      {img: 'assets/images/rd/rd1.jpg'},
      {img: 'assets/images/rd/rd2.jpg'},
      {img: 'assets/images/rd/rd3.jpg'},
      {img: 'assets/images/rd/rd4.jpg'},
      {img: 'assets/images/rd/rd5.jpg'},
      {img: 'assets/images/rd/rd6.jpg'},
      {img: 'assets/images/rd/rd11.jpg'},
      {img: 'assets/images/rd/rd9.jpg'},
      {img: 'assets/images/rd/rd10.jpg'},
      {img: 'assets/images/rd/rd7.jpg'},
      {img: 'assets/images/rd/rd8.jpg'},
      {img: 'assets/images/rd/rd16.jpg'},
      {img: 'assets/images/rd/rd12.jpg'},
      {img: 'assets/images/rd/rd14.jpg'},
      {img: 'assets/images/rd/rd15.jpg'},
  
      {img: 'assets/images/cm/cm1.jpg'},
      {img: 'assets/images/cm/cm16.jpg'},
      {img: 'assets/images/cm/cm3.jpg'},
      {img: 'assets/images/cm/cm4.jpg'},
      {img: 'assets/images/cm/cm5.jpg'},
      {img: 'assets/images/cm/cm6.jpg'},
      {img: 'assets/images/cm/cm9.jpg'},
      {img: 'assets/images/cm/cm10.jpg'},
      {img: 'assets/images/cm/cm11.jpg'},
      {img: 'assets/images/cm/cm13.jpg'},
      {img: 'assets/images/cm/cm14.jpg'},
      {img: 'assets/images/cm/cm7.jpg'},
      {img: 'assets/images/cm/cm8.jpg'},
      {img: 'assets/images/cm/cm15.jpg'},
      {img: 'assets/images/cm/cm12.jpg'},
  
      {img: 'assets/images/pw/pw1.jpg'},
      {img: 'assets/images/pw/pw11.jpg'},
      {img: 'assets/images/pw/pw4.jpg'},
      {img: 'assets/images/pw/pw12.jpg'},
      {img: 'assets/images/pw/pw8.jpg'},
      {img: 'assets/images/pw/pw6.jpg'},
      {img: 'assets/images/pw/pw9.jpg'},
      {img: 'assets/images/pw/pw5.jpg'},
      {img: 'assets/images/pw/pw7.jpg'},
      {img: 'assets/images/pw/pw10.jpg'},
  
      {img: 'assets/images/tm/tm1.jpg'},
      {img: 'assets/images/tm/tm2.jpg'},
      {img: 'assets/images/tm/tm3.jpg'},
      {img: 'assets/images/tm/tm4.jpg'},
      {img: 'assets/images/tm/tm5.jpg'},
      {img: 'assets/images/tm/tm6.jpg'},
      {img: 'assets/images/tm/tm7.jpg'},
      {img: 'assets/images/tm/tm8.jpg'},
      {img: 'assets/images/tm/tm9.jpg'},
      {img: 'assets/images/tm/tm10.jpg'},
      {img: 'assets/images/tm/tm11.jpg'},
      {img: 'assets/images/tm/tm13.jpg'},
      {img: 'assets/images/tm/tm14.jpg'},
      {img: 'assets/images/tm/tm15.jpg'},
      {img: 'assets/images/tm/tm12.jpg'},
      {img: 'assets/images/tm/tm16.jpg'},
      {img: 'assets/images/tm/tm18.jpg'},
      {img: 'assets/images/tm/tm19.jpg'},
      {img: 'assets/images/tm/tm20.jpg'},
  
      {img: 'assets/images/au/au1.jpg'},
      {img: 'assets/images/au/au2.jpg'},
      {img: 'assets/images/au/au3.jpg'},
      {img: 'assets/images/au/au6.jpg'},
      {img: 'assets/images/au/au4.jpg'},
      {img: 'assets/images/au/au5.jpg'},
      {img: 'assets/images/au/au16.jpg'},
      {img: 'assets/images/au/au7.jpg'},
      {img: 'assets/images/au/au8.jpg'},
      {img: 'assets/images/au/au9.jpg'},
      {img: 'assets/images/au/au10.jpg'},
      {img: 'assets/images/au/au11.jpg'},
      {img: 'assets/images/au/au12.jpg'},
      {img: 'assets/images/au/au13.jpg'},
      {img: 'assets/images/au/au14.jpg'},
      {img: 'assets/images/au/au15.jpg'},
      {img: 'assets/images/au/au18.jpg'},
      {img: 'assets/images/au/au17.jpg'}
  
     
    ]
    
    let contador=0
    const contenedor = document.querySelector('.slideshow')
    const overlay = document.querySelector('.overlay')
    const galeria_imagenes = document.querySelectorAll('.galeria img')
    const img_slideshow = document.querySelector('.slideshow img')
    
    contenedor.addEventListener('click', function(event){
      let atras= contenedor.querySelector('.atras'),
      adelante = contenedor.querySelector('.adelante'),
      img = contenedor.querySelector('img'),
      tgt= event.target
      if(tgt == atras){
        if(contador > 0){
          img.src = imagenes[contador - 1].img
          contador--
        }else{
          img.src = imagenes[imagenes.length - 1].img
          contador = imagenes.length - 1
        }
      }else if(tgt == adelante){
        if(contador < imagenes.length - 1){
          img.src = imagenes[contador + 1].img
          contador++
        }else{
          img.src = imagenes[0].img
          contador = 0
        }
  
      }
    })
    Array.from(galeria_imagenes).forEach(img=>{
      img.addEventListener('click',event => {
        const imagen_seleccionada = +event.target.dataset.imgMostrar
        img_slideshow.src = imagenes[imagen_seleccionada].img
        contador = imagen_seleccionada
        overlay.style.opacity = 1
        overlay.style.visibility = 'visible'
      })
    })
  
    
    document.querySelector('.btn_cerrar').addEventListener('click', () =>{
      overlay.style.opacity= 0
      overlay.style.visibility= 'hidden'
    })
  
  });