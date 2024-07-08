// 로또 번호 추첨 함수
function generateLottoNumbers() {
  // 1에서 45까지의 숫자 배열 생성
  let numbers = Array.from({ length: 45 }, (_, index) => index + 1);

  // 배열을 섞기 위한 Fisher-Yates 알고리즘 적용
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  // 첫 6개의 숫자를 선택하여 정렬
  let selectedNumbers = numbers.slice(0, 6).sort((a, b) => a - b);

  // 선택된 번호를 화면에 출력
  let numbersContainer = document.getElementById('numbers');
  numbersContainer.textContent = ''; // 기존 번호 초기화
  selectedNumbers.forEach(number => {
    let numberSpan = document.createElement('span');
    numberSpan.textContent = number + ' ';
    numbersContainer.appendChild(numberSpan);
  });

  // SweetAlert2를 이용해 번호를 알림창으로 보여줌
  Swal.fire({
    title: '추첨 결과',
    html: `<p class="text-2xl font-bold">${selectedNumbers.join(', ')}</p>`,
    icon: 'success',
    confirmButtonText: '확인'
  });
}

// 번호 추첨 버튼 클릭 시 이벤트 핸들러 연결
document.getElementById('generate-btn').addEventListener('click', generateLottoNumbers);
