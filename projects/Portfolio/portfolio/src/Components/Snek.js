import snekdemo from './snekdemo.mov';
import HoverVideoPlayer from 'react-hover-video-player';
import snekthumbnail from './snekthumbnail.png'

// export default () => <div><h1>Snek</h1> <video src = {snekdemo}></video></div>

export default () => <div onClick = {()=>document.location='https://kitteyandkat.github.io/Snek/snek.html'}><HoverVideoPlayer
videoSrc={snekdemo}
pausedOverlay={
  <img
    src={snekthumbnail}
    style={{
      width: '100%',
      height: '115%',
      objectFit: 'cover',
    }}
  />
}
/>
<h1>Snek Game Project</h1>
<p>This is a game project that I built alongside my cohort. </p>
</div>