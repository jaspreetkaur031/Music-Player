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

// Safely add event listener only if sidebar_btn exists
if (sidebar_btn) {
    sidebar_btn.addEventListener("click", () => {
      if (sidebar) sidebar.classList.toggle("sidebar_hide");
      if (sidebar_icon) sidebar_icon.classList.toggle("toggle_sidebar_btn");
      if (logo) logo.classList.toggle('hide_element');
      if (mini_logo) mini_logo.classList.toggle("show-element");
      music_menu_h2.forEach(h2 => h2.classList.toggle("hide_element"));
      music_menu_p.forEach(p => p.classList.toggle("hide_element"));
      music_menu_li.forEach(li => li.classList.toggle("menu_gap"));
    });
}

// user dropdown menu
let userMenuBtn = document.querySelector('.user_login_wrapper');
let userDropdown = document.querySelector('.user_wrapper_dropdown');

if (userMenuBtn) {
    userMenuBtn.addEventListener('click', () => {
        if (userDropdown) userDropdown.classList.toggle('show_user_dropdown');
    });
}

// songs option Dropdown menu:
const songOption = document.querySelectorAll('.song_option');

songOption.forEach(option => {
    option.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent click from bubbling up to document
        const dropdown = this.querySelector('.song_option_dropdown');

        // Close other dropdowns
        document.querySelectorAll('.song_option_dropdown').forEach(otherDropdown => {
            if (otherDropdown !== dropdown && otherDropdown.classList.contains('show_song_option')) {
                otherDropdown.classList.remove('show_song_option');
            }
        });

        // Toggle the clicked dropdown
        if (dropdown) dropdown.classList.toggle('show_song_option');
    });
});

// Close dropdowns if clicked outside
document.addEventListener('click', (e) => {
    // Check if the click is outside ANY song_option element
    if (!e.target.closest('.song_option')) {
        document.querySelectorAll('.song_option_dropdown.show_song_option').forEach(dropdown => {
            dropdown.classList.remove('show_song_option');
        });
    }
     // Close user dropdown if clicked outside
     if (!e.target.closest('.user_login_wrapper') && userDropdown && userDropdown.classList.contains('show_user_dropdown')) {
        userDropdown.classList.remove('show_user_dropdown');
    }
});


// show song tab list
let tab1 = document.querySelector('.tab1');
let tab2 = document.querySelector('.tab2');
let tab3 = document.querySelector('.tab3');
let songsWrapper1 = document.querySelector('.songs_wrapper1');
let songsWrapper2 = document.querySelector('.songs_wrapper2');
let songsWrapper3 = document.querySelector('.songs_wrapper3');

function setActiveTab(tab) {
    // Ensure elements exist before trying to modify classList
    if (tab1) tab1.classList.remove('active_tab_list', 'active_song_list');
    if (tab2) tab2.classList.remove('active_tab_list', 'active_song_list');
    if (tab3) tab3.classList.remove('active_tab_list', 'active_song_list');

    if (tab) {
        tab.classList.add('active_tab_list', 'active_song_list');
    }
}

// Add event listeners only if tabs exist (for index.html)
if (tab1 && tab2 && tab3 && songsWrapper1 && songsWrapper2 && songsWrapper3) {
    try {
        // Set initial active tab (assuming tab1 is default)
        setActiveTab(tab1);

        tab1.addEventListener('click', () => {
            setActiveTab(tab1);
            songsWrapper1.style.display = 'flex';
            songsWrapper1.classList.add('show_songs');
            songsWrapper2.style.display = 'none';
            songsWrapper3.style.display = 'none';
        });
    } catch (error) {
        console.error('Error setting up tab1:', error);
    }

    try {
        tab2.addEventListener('click', () => {
            setActiveTab(tab2);
            songsWrapper1.style.display = 'none';
            songsWrapper2.style.display = 'flex';
            songsWrapper2.classList.add('show_songs');
            songsWrapper3.style.display = 'none';
        });
    } catch (error) {
        console.error('Error setting up tab2:', error);
    }

    try {
        tab3.addEventListener('click', () => {
            setActiveTab(tab3);
            songsWrapper1.style.display = 'none';
            songsWrapper2.style.display = 'none';
            songsWrapper3.style.display = 'flex';
            songsWrapper3.classList.add('show_songs');
        });
    } catch (error) {
        console.error('Error setting up tab3:', error);
    }
}


// play pause next prev option:
let play_prev = document.querySelector('.music_option_prev');
let play_next = document.querySelector('.music_option_next');
let shuffle_mode = document.querySelector('.shuffle_mode');
let repeat_mode = document.querySelector('.repeat_mode');

if (play_next) play_next.addEventListener('click', () => {
    // Logic for toggling active class might be needed if styling depends on it
    // play_next.classList.toggle('music_play_btn_active')
});
if (play_prev) play_prev.addEventListener('click', () => {
     // play_prev.classList.toggle('music_play_btn_active')
});
if (shuffle_mode) shuffle_mode.addEventListener('click', () => {
    // Add shuffle logic here if needed
    shuffle_mode.classList.toggle('music_play_btn_active')
});
if (repeat_mode) repeat_mode.addEventListener('click', () => {
     // Add repeat logic here if needed
    repeat_mode.classList.toggle('music_play_btn_active')
});

// on off volume option:
// Moved this logic inside DOMContentLoaded where 'audio' is guaranteed

// queue dropdown box:
let musicBottomBtn = document.querySelector('.music_bottom_btn');
let queueDropdownBox = document.querySelector('.queue_dropdown_box');
let queueBtn = document.querySelector('.queue_btn');

if (musicBottomBtn) musicBottomBtn.addEventListener('click', () => {
    if (queueDropdownBox) queueDropdownBox.classList.add('show_queue_box');
});

if (queueBtn) queueBtn.addEventListener('click', () => {
    if (queueDropdownBox) queueDropdownBox.classList.remove('show_queue_box');
});

// bottom conatiner menu:
let bottom_toggle_btn = document.querySelector('.bottom_container_btn');
let bottom_toggle_icon = document.querySelector('.bottom_container_btn i');
let bottom_container = document.querySelector('.bottom_container');

if (bottom_toggle_btn) bottom_toggle_btn.addEventListener('click', () => {
    if (bottom_container) bottom_container.classList.toggle('show_bottom_box');
    if (bottom_toggle_icon) bottom_toggle_icon.classList.toggle('icon_rotate');
});


// show sidebar in small screen:
let bar = document.querySelector('.bars');

if (bar) bar.addEventListener('click', () => {
    if (sidebar) sidebar.classList.toggle('show_aside');
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
let audio; // Declare globally, assign in DOMContentLoaded
let playBtn; // Declare globally, assign in DOMContentLoaded
let nextBtn; // Declare globally, assign in DOMContentLoaded
let prevBtn; // Declare globally, assign in DOMContentLoaded
let songTitle; // Declare globally, assign in DOMContentLoaded
let songArtist; // Declare globally, assign in DOMContentLoaded
let songImg; // Declare globally, assign in DOMContentLoaded
let music_volume_img; // Declare globally, assign in DOMContentLoaded


// Helper function to load song details
function loadSong(index) {
    if (!audio || index < 0 || index >= songs.length) return;
    const song = songs[index];
    if (!audio.paused) {
        audio.pause();
    }
    audio.src = song.src;
    audio.load();

    if (songTitle) songTitle.textContent = song.name;
    if (songArtist) songArtist.textContent = song.artist;
    if (songImg) songImg.src = song.img;

    const progressBar = document.querySelector('.music_play_line');
    if (progressBar) progressBar.style.setProperty('--progress-percent', '0%');

    if (playBtn) playBtn.classList.remove('playing');
}

// Helper function to play song (only performs action)
function playSong() {
    if (!audio) return;
    let playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.error("Error attempting to play audio:", error);
        });
    }
}

// Helper function to pause song (only performs action)
function pauseSong() {
    if (!audio) return;
    audio.pause();
}

// Format seconds into mm:ss
function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return "0:00";
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

// Helper function for adding listeners to artist/album cards
function addCardListeners(cardSelector) {
    try {
        const cards = document.querySelectorAll(cardSelector);
        if (cards.length > 0) {
            cards.forEach((card, index) => {
                card.addEventListener('click', () => {
                    currentSongIndex = index % songs.length;
                    loadSong(currentSongIndex);
                    setTimeout(playSong, 100);
                });
            });
        }
    } catch (error) {
        console.error(`Error adding listeners for ${cardSelector}:`, error);
    }
}

// === Wait for DOM ready before adding listeners ===
document.addEventListener('DOMContentLoaded', () => {

    // --- Assign crucial elements now that DOM is ready ---
    audio = document.getElementById('main-audio');
    playBtn = document.querySelector('.play_button');
    nextBtn = document.querySelector('.music_option_next');
    prevBtn = document.querySelector('.music_option_prev');
    songTitle = document.querySelector('.music_box_text h2');
    songArtist = document.querySelector('.music_box_text p');
    songImg = document.querySelector('.music_box_img img');
    music_volume_img = document.querySelector('.music_volume img');
    let currentTimeEl = document.querySelector('.music_timeline p:first-child');
    let durationEl = document.querySelector('.music_timeline p:nth-child(2)');
    const progressBar = document.querySelector('.music_play_line');

    // --- Add Button Event Listeners Here ---
    if (playBtn) {
        playBtn.addEventListener('click', () => {
            if (!audio) return;
            if (audio.paused) {
                playSong();
            } else {
                pauseSong();
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentSongIndex = (currentSongIndex + 1) % songs.length;
            loadSong(currentSongIndex);
            setTimeout(playSong, 100);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
            loadSong(currentSongIndex);
            setTimeout(playSong, 100);
        });
    }


    // --- Load the first song initially ---
    loadSong(currentSongIndex);


    // Update duration and attach audio event listeners
    if (audio) {
        // --- Volume control ---
        if (music_volume_img) {
            // Set initial volume icon state
            music_volume_img.src = audio.muted ? 'Images/volume-mute.png' : 'Images/volume.svg';

            music_volume_img.addEventListener('click', () => {
                let volume_mute_src = 'Images/volume-mute.png';
                let volume_on_src = 'Images/volume.svg';
                audio.muted = !audio.muted; // Toggle mute state
                music_volume_img.src = audio.muted ? volume_mute_src : volume_on_src; // Update icon
            });
        }


        audio.addEventListener('loadedmetadata', () => {
            if (durationEl && !isNaN(audio.duration)) {
                durationEl.textContent = formatTime(audio.duration);
            } else if (durationEl) {
                durationEl.textContent = "0:00";
            }
             if (playBtn) playBtn.classList.remove('playing');
        });

        audio.addEventListener('timeupdate', () => {
            if (currentTimeEl && !isNaN(audio.currentTime)) {
                currentTimeEl.textContent = formatTime(audio.currentTime);
            } else if (currentTimeEl) {
                 currentTimeEl.textContent = "0:00";
            }

            // --- Update Progress Bar Visually (No requestAnimationFrame needed here) ---
            if (audio.duration && progressBar && audio.duration > 0 && !isNaN(audio.currentTime)) {
                const progressPercent = (audio.currentTime / audio.duration) * 100;
                progressBar.style.setProperty('--progress-percent', Math.min(progressPercent, 100) + '%');
            } else if (progressBar) {
                 progressBar.style.setProperty('--progress-percent', '0%');
            }
        });

        audio.addEventListener('ended', () => {
            if (nextBtn) {
                nextBtn.click();
            }
        });

        // --- Listeners for Synchronization (Sole source of truth for .playing class) ---
        audio.addEventListener('play', () => {
            if (playBtn) playBtn.classList.add('playing');
        });

        audio.addEventListener('pause', () => {
            if (playBtn) playBtn.classList.remove('playing');
        });
        // --- END Listeners ---

        // Set initial button state
        if (playBtn) {
            playBtn.classList.toggle('playing', !audio.paused);
        }

    } else {
        console.error("Audio element with ID 'main-audio' not found!");
        if(playBtn) playBtn.disabled = true;
        if(nextBtn) nextBtn.disabled = true;
        if(prevBtn) prevBtn.disabled = true;
    }

    // --- Timeline Click and Drag Functionality ---
    let isDragging = false;
    let rafId = null; // Variable to store requestAnimationFrame ID

    function seek(event) {
        // Use pageX for broader compatibility, including touch converted events
        let clientX = event.pageX || (event.touches ? event.touches[0].pageX : 0);
        if (!audio || !progressBar || isNaN(audio.duration) || audio.duration <= 0) return;

        const progressBarRect = progressBar.getBoundingClientRect();
         // Calculate offset relative to the document, not just viewport
        const clickX = clientX - progressBarRect.left - window.scrollX;
        const width = progressBarRect.width;

        if (width > 0) {
             const clampedX = Math.max(0, Math.min(clickX, width)); // Ensure value stays within bounds
            const seekTime = (clampedX / width) * audio.duration;

            if (!isNaN(seekTime)) {
                audio.currentTime = seekTime; // Update audio time immediately

                // --- Use requestAnimationFrame for visual update ---
                cancelAnimationFrame(rafId); // Cancel previous frame if dragging quickly
                rafId = requestAnimationFrame(() => {
                    // Update CSS variable for progress bar fill and dot position
                    const progressPercent = (seekTime / audio.duration) * 100;
                    progressBar.style.setProperty('--progress-percent', Math.min(progressPercent, 100) + '%');
                    // Update time display
                    if (currentTimeEl) {
                        currentTimeEl.textContent = formatTime(seekTime);
                    }
                });
                // --- End requestAnimationFrame ---
            }
        }
    }


    if (progressBar) {
        progressBar.addEventListener('mousedown', (e) => {
            isDragging = true;
            seek(e); // Seek on initial click
            progressBar.style.cursor = 'grabbing';
            document.body.style.userSelect = 'none'; // Prevent text selection
        });
        progressBar.addEventListener('touchstart', (e) => {
             // Prevent page scroll while dragging timeline on touch
            // e.preventDefault(); // Might be too aggressive, test carefully
            isDragging = true;
            seek(e.touches[0]); // Use first touch point
            progressBar.style.cursor = 'grabbing';
            document.body.style.userSelect = 'none';
        }, { passive: false }); // Need passive: false to potentially preventDefault
    }

     // Listen on document/window to catch moves/releases outside the bar
     document.addEventListener('mousemove', (e) => { if (isDragging) seek(e); });
     document.addEventListener('touchmove', (e) => {
         if (isDragging) {
             // Prevent page scroll while dragging timeline on touch
             e.preventDefault();
             seek(e.touches[0]);
         }
      }, { passive: false }); // Need passive: false to preventDefault

     document.addEventListener('mouseup', () => {
         if (isDragging) {
             isDragging = false;
             cancelAnimationFrame(rafId); // Cancel pending animation frame
             if(progressBar) progressBar.style.cursor = 'pointer'; document.body.style.userSelect = '';
         }
     });
     document.addEventListener('touchend', () => {
         if (isDragging) {
             isDragging = false;
             cancelAnimationFrame(rafId); // Cancel pending animation frame
             if(progressBar) progressBar.style.cursor = 'pointer'; document.body.style.userSelect = '';
         }
     });


    // --- Add Listeners for Clickable Elements ---
    const songCols = document.querySelectorAll('.song_col');
    if (songCols.length > 0) {
        songCols.forEach((col, index) => {
            col.addEventListener('click', () => {
                currentSongIndex = index % songs.length;
                loadSong(currentSongIndex);
                 setTimeout(playSong, 100);
            });
        });
    }

    addCardListeners('.artistSplide .splide__slide .artist_card_box');
    addCardListeners('.recommendedSplide .splide__slide .artist_card_box');
    addCardListeners('.albumSplide .splide__slide .artist_card_box');
    addCardListeners('.recommendedalbumSplide .splide__slide .artist_card_box');

}); // End DOMContentLoaded

