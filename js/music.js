class Music{
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title + " - " + this.singer;
    }
}

const musicList = [
    new Music("One", "Metallica", "metallica-one.jpg", "metallica-one.mp3"),
    new Music("Zombie", "The Cranberries", "the-cranberries-zombie.jpg", "the-cranberries-zombie.mp3"),
    new Music("Dream On", "Aerosmith", "aerosmith-featuring-dream-on.jpg", "aerosmith-dream-on-official-audio.mp3")
];