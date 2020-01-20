var musicTrack = new Audio();
var playlist = [
    { musicFile: 'assets/music/Afro-B-Drogba.mp3', artist: 'Afro-B', song: 'Drogba (Joanna)', album: 'Afrowave 2', cover: 'assets/images/covers/afrowaves2.jpg' },
    { musicFile: 'assets/music/Algee-Smith-All-Yours.mp3', artist: 'Algee Smith', song: 'All Yours', album: '24', cover: 'assets/images/covers/24.jpg' },
    { musicFile: 'assets/music/Beyonce-7-11.mp3', artist: 'Beyonce', song: '7/11', album: 'Beyonce', cover: 'assets/images/covers/beyonce.jpg' },
    { musicFile: 'assets/music/Lucky-Daye-Real-Games.mp3', artist: 'Lucky Daye', song: 'Real Games', album: 'Painted', cover: 'assets/images/covers/painted.jpg' },
    { musicFile: 'assets/music/NICE.mp3', artist: 'Jay-Z & Beyonce', song: 'Nice', album: 'Everything is Love', cover: 'assets/images/covers/everything-is-love.jpg' },
    { musicFile: 'assets/music/Sunrise-Sunset.mp3', artist: "J Brown", song: 'Sunrise Sunset', album: 'Sunrise Sunset', cover: 'assets/images/covers/sunrise-sunset.jpg' }]

var app = new Vue({
    el: '#audio-app',
    data: {
        numberOftracks: "",
        currentIndex: 0,
        artists: [],
        songs: [],
        albums: [],
        covers: []
    },
    mounted() {
        this.numberOftracks = playlist.length;
        this.collectArtists();
    },
    methods: {
        playMusic(x) {
            musicTrack.src = playlist[x].musicFile;
            musicTrack.play();
        },
        stopMusic() {
            musicTrack.pause();
        },
        collectArtists() {
            for (var i = 0; i < playlist.length; i++) {
                this.artists.push(playlist[i].artist);
                this.songs.push(playlist[i].song);
                this.albums.push(playlist[i].album);
                this.covers.push(playlist[i].cover);
            }
        },
        getIndex(index) {
            if (this.currentIndex != index) {
                this.currentIndex = index
            } else {
                this.currentIndex = 0;
                this.stopMusic()
            }
        }
    }
});