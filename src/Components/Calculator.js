import calculator from './calculator demo.mov';
import HoverVideoPlayer from 'react-hover-video-player';
import calculatorthumbnail from './calculatorthumbnail.png'

// export default () => <div><h1>Snek</h1> <video src = {snekdemo}></video></div>

export default () => <div onClick = {()=>document.location='https://kitteyandkat.github.io/Calculator-Project/Calculator.html'}><HoverVideoPlayer 
videoSrc={calculator}
pausedOverlay={
  <img
    src={calculatorthumbnail}
    style={{
      width: '95%',
      height: '110%',
      objectFit: 'cover',
    }}
  />
}
/>
<h1>Calculator Project</h1>
<p>This is a calculator that I built alongside my cohort. </p>
</div>