document.addEventListener('DOMContentLoaded', function(){
    let imagenes=[
      
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
      {img: 'assets/images/cm/cm12.jpg'}
  
  
  
     
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