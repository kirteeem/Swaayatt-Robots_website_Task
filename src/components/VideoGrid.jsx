import VideoCard from "./VideoCard";
import { offroadVideos } from "../data/offroadVideo";

export default function VideoGrid({ videos = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
