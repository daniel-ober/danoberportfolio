import "./BackgroundVideo.css";

export default function BackgroundVideo({ src = "/media/app-bg-video2.mp4" }) {
  return (
    <div className="bgvideo">
      <video className="bgvideo__video" autoPlay loop muted playsInline>
        <source src={src} type="video/mp4" />
      </video>
      <div className="bgvideo__overlay" />
    </div>
  );
}
