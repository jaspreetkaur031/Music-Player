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