// 타이머 ID를 저장할 변수 (전역 또는 함수 외부에 선언)
let timeoutId = null; 

function changeText() {
    // 이전에 설정된 타이머가 있다면 취소
    if (timeoutId !== null) {
        clearTimeout(timeoutId);
    }
    
    const element = document.getElementById('description');
    const img = document.getElementById('img');
    const myAudio = document.getElementById('myAudio');

    // 오디오를 처음부터 재생
    myAudio.currentTime = 0;
    myAudio.play();

    element.textContent = 'oiiiaioiiaioiiiai';
    img.src = 'oiia2.gif';

    // 새로운 타이머를 설정하고 ID를 변수에 저장
    timeoutId = setTimeout(function () {
        element.textContent = 'oiiai';
        img.src = 'oiia1.webp';
        myAudio.pause();
        // 타이머가 끝나면 ID를 초기화
        timeoutId = null; 
    }, 2500);
}








