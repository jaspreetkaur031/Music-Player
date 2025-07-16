// Show & hide sidebar
let sidebar_btn = document.querySelector(".sidebar_btn");
let sidebar_icon = document.querySelector(".sidebar_btn i");
let sidebar = document.querySelector("aside");

// hide & show sidebar element
let logo = document.querySelector(".logo");
let mini_logo = document.querySelector(".small_logo");
let music_menu_h2 = document.querySelectorAll(".music_menu h2");
let music_menu_p = document.querySelectorAll(".music_menu ul li a p");
let music_menu_li = document.querySelectorAll(".music_menu ul li");

sidebar_btn.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar_hide");
  sidebar_icon.classList.toggle("toggle_sidebar_btn");
  logo.classList.toggle('hide_element')
  mini_logo.classList.toggle("show-element");
  music_menu_h2.forEach(h2 => h2.classList.toggle("hide_element"));
  music_menu_p.forEach(p => p.classList.toggle("hide_element"));
  music_menu_li.forEach(li => li.classList.toggle("menu_gap"));
});

// user dropdown menu 

let userMenuBtn=document.querySelector('.user_login_wrapper');
let userDropdown=document.querySelector('.user_wrapper_dropdown');

userMenuBtn.addEventListener('click', () =>{
    userDropdown.classList.toggle('show_user_dropdown');
});

// songs option Dropdown menu:

const songOption = document.querySelectorAll('.song_option');

songOption.forEach(option =>{
    option.addEventListener('click', function (){
        document.querySelectorAll('.song_option_dropdown').forEach(dropdown =>{
            if(dropdown !== this.querySelector('.song_option_dropdown')){
                dropdown.classList.remove('show_song_option');
            }
        });
        const dropdown = this.querySelector('.song_option_dropdown');
        dropdown.classList.toggle('show_song_option');
    });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.song_option')) {
    document.querySelectorAll('.song_option_dropdown').forEach(dropdown => {
      dropdown.classList.remove('show_song_option');
    });
  }
});

// show song tab list 

let tab1 = document.querySelector('.tab1');
let tab2 = document.querySelector('.tab2');
let tab3 = document.querySelector('.tab3');
let songsWrapper1 = document.querySelector('.songs_wrapper1');
let songsWrapper2 = document.querySelector('.songs_wrapper2');
let songsWrapper3 = document.querySelector('.songs_wrapper3');

function setActiveTab(tab){
    tab1.classList.remove('active_tab_list');
    tab2.classList.remove('active_tab_list');
    tab3.classList.remove('active_tab_list');

     tab1.classList.remove('active_song_list');
    tab2.classList.remove('active_song_list');
    tab3.classList.remove('active_song_list');

    tab.classList.add('active_tab_list');
    tab.classList.add('active_song_list');
}

try{
tab1.addEventListener('click',() =>{
    setActiveTab(tab1);
    songsWrapper1.style.display='flex';
    songsWrapper1.classList.add('show_songs');
    songsWrapper2.style.display='none';
    songsWrapper3.style.display='none';
});
} catch(error){
    console.log('Error: ', error);  
}

try{
tab2.addEventListener('click',() =>{
    setActiveTab(tab2);
    songsWrapper1.style.display='none';
    songsWrapper2.style.display='flex';
    songsWrapper2.classList.add('show_songs');
    songsWrapper3.style.display='none';
});
} catch(error){
    console.log('Error: ', error);  
}

try{
tab3.addEventListener('click',() =>{
    setActiveTab(tab3);
    songsWrapper1.style.display='none';
    songsWrapper2.style.display='none';
    songsWrapper3.style.display='flex';
    songsWrapper3.classList.add('show_songs');
});
} catch(error){
    console.log('Error: ', error);  
}


// play pause next prev option:

let play_prev = document.querySelector('.music_option_prev');
let play_next = document.querySelector('.music_option_next');
let shuffle_mode = document.querySelector('.shuffle_mode');
let repeat_mode = document.querySelector('.repeat_mode');

play_next.addEventListener('click',() =>{
    play_next.classList.toggle('music_play_btn_active')
});
play_prev.addEventListener('click',() =>{
    play_prev.classList.toggle('music_play_btn_active')
});
shuffle_mode.addEventListener('click',() =>{
     shuffle_mode.classList.toggle('music_play_btn_active')
});
repeat_mode.addEventListener('click',() =>{
     repeat_mode.classList.toggle('music_play_btn_active')
});

// on off volume option:

let music_volume_img = document.querySelector('.music_volume img');
console.log(music_volume_img);
music_volume_img.addEventListener('click',() =>{
    let volume_mute = 'Images/volume-mute.png';
    let volume_on = 'Images/volume.svg';

    if(music_volume_img.src.includes(volume_mute)){
        music_volume_img.src = volume_on;
    }
    else{
        music_volume_img.src = volume_mute;
    }
});


// queue dropdown box:

let musicBottomBtn = document.querySelector('.music_bottom_btn');
let queueDropdownBox = document.querySelector('.queue_dropdown_box');
let queueBtn = document.querySelector('.queue_btn');

musicBottomBtn.addEventListener('click', () => {
    queueDropdownBox.classList.add('show_queue_box');
});

queueBtn.addEventListener('click', () => {
    queueDropdownBox.classList.remove('show_queue_box');
});

// bottom conatiner menu:

let bottom_toggle_btn = document.querySelector('.bottom_container_btn');
let bottom_toggle_icon = document.querySelector('.bottom_container_btn i');
let bottom_container = document.querySelector('.bottom_container');

// bottom_toggle_btn.forEach(btn =>{
//     bottom_toggle_btn.addEventListener('click',() =>{
//         bottom_container.forEach(bc =>{
//             bc.classList.toggle('show_bottom_box');
//         })
//     })
// })

bottom_toggle_btn.addEventListener('click',() =>{
    bottom_container.classList.toggle('show_bottom_box');
    bottom_toggle_icon.classList.toggle('.icon_rotate');
});


// show sidebar in small screen:

let bar = document.querySelector('.bars');

bar.addEventListener('click', () => {
    sidebar.classList.toggle('show_aside');
})

// ==== Music Player Logic ====

const songs = [
    {
      name: "Walking Promises",
      artist: "Harry Jackson, Virginia Hassis",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      img: "Images/s1.jpg"
    },
    {
      name: "Desired Games",
      artist: "Harry Jackson, Virginia Hassis",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      img: "Images/s2.jpg"
    },
    {
      name: "Don't Let Me Down",
      artist: "Harry Jackson, Virginia Hassis",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      img: "Images/s3.jpg"
    },
    {
      name: "Dark Alley Acoustic",
      artist: "Harry Jackson, Virginia Hassis",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
      img: "Images/s4.jpg"
    },
    {
      name: "Until I Met You",
      artist: "Harry Jackson, Virginia Hassis",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
      img: "Images/s5.jpg"
    },
    {
      name: "Desires Pending",
      artist: "Harry Jackson, Virginia Hassis",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
      img: "Images/s6.jpg"
    },
    {
      name: "Lonely Nights",
      artist: "Harry Jackson, Virginia Hassis",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
      img: "Images/s1.jpg"
    },
    {
      name: "City Lights",
      artist: "Harry Jackson, Virginia Hassis",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
      img: "Images/s2.jpg"
    },
    {
      name: "Rainy Thoughts",
      artist: "Harry Jackson, Virginia Hassis",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
      img: "Images/s3.jpg"
    },
    {
      name: "Ocean Drive",
      artist: "Harry Jackson, Virginia Hassis",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
      img: "Images/s4.jpg"
    },
    {
      name: "Winter Breeze",
      artist: "Harry Jackson, Virginia Hassis",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
      img: "Images/s5.jpg"
    },
    {
      name: "Forever Yours",
      artist: "Harry Jackson, Virginia Hassis",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
      img: "Images/s6.jpg"
    },
    {
      name: "Mountain Echo",
      artist: "Harry Jackson, Virginia Hassis",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
      img: "Images/s1.jpg"
    },
    {
      name: "Sunset Chill",
      artist: "Harry Jackson, Virginia Hassis",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3",
      img: "Images/s2.jpg"
    },
  ];
  
  let currentSongIndex = 0;
  let audio = document.getElementById('main-audio');
  
  let playBtn = document.querySelector('.play_button');
  let nextBtn = document.querySelector('.music_option_next');
  let prevBtn = document.querySelector('.music_option_prev');
  
  let songTitle = document.querySelector('.music_box_text h2');
  let songArtist = document.querySelector('.music_box_text p');
  let songImg = document.querySelector('.music_box_img img');
  
  function loadSong(index) {
    const song = songs[index];
    audio.src = song.src;
    songTitle.textContent = song.name;
    songArtist.textContent = song.artist;
    songImg.src = song.img;
  }
  
  function playSong() {
    audio.play();
    playBtn.classList.add('playing');
  }
  
  function pauseSong() {
    audio.pause();
    playBtn.classList.remove('playing');
  }
  
  playBtn.addEventListener('click', () => {
    if (audio.paused) {
      playSong();
    } else {
      pauseSong();
    }
  });
  
  nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playSong();
  });
  
  prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playSong();
  });
  
  // Autoplay first song on load
  loadSong(currentSongIndex);

  // Make each song_col clickable to play corresponding song
  document.addEventListener('DOMContentLoaded', () => {
    const songCols = document.querySelectorAll('.song_col');
  
    console.log("Found song cards:", songCols.length); // Debug log
  
    songCols.forEach((col, index) => {
      col.addEventListener('click', () => {
        currentSongIndex = index;
        loadSong(currentSongIndex);
        playSong();
      });
    });
  });

  let currentTimeEl = document.querySelector('.current_time');
  let durationEl = document.querySelector('.total_duration');
  
  // Format seconds into mm:ss
  function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  }
  
  // Update duration when audio metadata is loaded
  audio.addEventListener('loadedmetadata', () => {
    durationEl.textContent = formatTime(audio.duration);
  });
  
  // Update current time while playing
  audio.addEventListener('timeupdate', () => {
    currentTimeEl.textContent = formatTime(audio.currentTime);
  });