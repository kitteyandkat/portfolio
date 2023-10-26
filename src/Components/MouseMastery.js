
import HoverVideoPlayer from 'react-hover-video-player';
import MouseMasterythumbnail from './MouseMasterythumbnail.png'
import MouseMasteryDemo from './MouseMasteryDemo.mov'

// export default () => <div><h1>Snek</h1> <video src = {snekdemo}></video></div>

export default () => <div onClick = {()=>document.location='https://mouse-mastery.up.railway.app'}><HoverVideoPlayer
videoSrc={MouseMasteryDemo}
pausedOverlay={
  <img
    src={MouseMasterythumbnail}
    style={{
      width: '100%',
      objectFit: 'cover',
    }}
  />
}
/>
<h1>Mouse Mastery</h1>
<p>This is my capstone project, completed during my time at Nebula Academy. You may find the repository <a href="https://github.com/kitteyandkat/Mouse-Mastery">here.</a></p>
</div>