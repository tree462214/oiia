function changeText() {
    // HTML에서 id가 'description'인 요소를 찾아서 변수에 저장
    const element = document.getElementById('description');
    const img = document.getElementById('img');
    const myAudio = document.getElementById('myAudio')
    // 해당 요소의 내용을 변경
    element.textContent = 'oiiiaioiiaioiiiai'
    img.src = 'oiia2.gif'
    myAudio.play();
    setTimeout(function () {
        element.textContent = 'oiiai';
        img.src = 'oiia1.webp'
        myAudio.pause();
    },1500)
    

}
