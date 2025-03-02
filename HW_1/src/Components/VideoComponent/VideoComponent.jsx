// Создать новый компонент, назовите его VideoComponent, он должен возвращать видео.
import "./VideoComponent.css"

const VideoComponent = () => {
    return (
        <div class="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/mhNg55_IYiw?si=Ia6Eqndm4Hpmq9vX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


            {/* <iframe
                src="https://www.youtube.com/embed/v=mhNg55_IYiw">
            </iframe> */}
            
            
        </div>
    )
}

export default VideoComponent;