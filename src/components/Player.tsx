import AudioPlayer from 'react-modern-audio-player';
const playList = [
    {
        name: 'sdfsdf',
        writer: 'fsdsdf',
        img: 'fsdsdf',
        src: require('./../assets/audio/boing.mp3'),
        id: 1,
    },
]

function Player () {
    return <AudioPlayer playList={playList}/>
}

export default Player;