function HarburguerMenu() {
 
  return (

    <div className = "hamburguer-menu">
        <a href='#' className = "links active"><img src = "./home.png"/>home</a> 
        <a href='#' className = "links"><img src = "./shorts.png"/>shorts</a>
        <a href='#' className = "links"><img src = "./subscription.png"/>inscrições</a>
        <a href='#' className = "links"><img src = "./youtube music.png"/>youtube music</a>

        <hr className = "separator"/>
        <a href='#' className = "links"><img src = "./library.png"/>biblioteca</a>
        <a href='#' className = "links"><img src = "./history.png"/>histórico</a>
        <a href='#' className = "links"><img src = "./your-video.png"/>seus vídeos</a>
        <a href='#' className = "links"><img src = "./watch-later.png"/>assistir mais tarde</a>
        <a href='#' className = "links"><img src = "./liked video.png"/>vídeos com "gostei"</a>
        <a href='#' className = "links"><img src = "./show more.png"/>mostrar mais</a>
    </div>
    
  );
}

export default HarburguerMenu;


