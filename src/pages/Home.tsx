import logoVideo from '../assets/videos/logo-video.mp4'

export default function Home() {
    return (
        <div className="w-full h-[700px]">
            <video
                src={logoVideo}
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
            />
        </div>
    )
}
