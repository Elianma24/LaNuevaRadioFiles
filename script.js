document.querySelectorAll('.trigger').forEach(item => {
    item.addEventListener('click', function() {
        var song = this.getAttribute('data-song');
        var player = document.getElementById('music-player');
        var audio = document.getElementById('audio-player');
        
        if (player.classList.contains('hidden')) {
            player.classList.remove('hidden');
        }
        
        audio.src = song;
        audio.play();
    });
});
