const video = document.querySelector("video")
        const button = document.querySelector("button")

        function MediaPlayer(){}

        MediaPlayer.prototype.playPause = function() {
            video.volume = 0.1
            if(video.paused){
                video.play()
            }else{
                video.pause()
            }
        }

        const player = new MediaPlayer();
        button.onclick = () => player.playPause();

    //     button.onclick = () => {
    //         if(status == 0){
    //             status = 1
    //             video.play()
    //         }else{
    //             video.pause()
    //             status == 0
    //         }
    // }