import ReactPlayer from "react-player";

type VideoPlayerProps = {
  url: string;
};

export const VideoPlayer = ({ url }: VideoPlayerProps) => {
  return (
    <ReactPlayer
      url={url}
      config={{
        youtube: {
          playerVars: { showinfo: 1 },
        },
      }}
    />
  );
};
