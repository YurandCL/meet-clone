import { useEffect, useState, useRef } from 'react';
import { createLocalVideoTrack } from 'twilio-video';

const UserVideo = () => {
  const [localVideoTrack, setLocalVideoTrack] = useState();
  const ref = useRef(null);

  const addLocalTrack = async () => {
    const track = await createLocalVideoTrack();
    setLocalVideoTrack(track);
    ref.current && ref.current.appendChild(track.attach());
  };

  useEffect(() => {
    addLocalTrack();
  }, []);

  useEffect(() => {
    localVideoTrack?.enable();
  }, [localVideoTrack]);

  return (
    <>
      <div ref={ref}></div>
      <div>Yo</div>
    </>
  );
};

export default UserVideo;