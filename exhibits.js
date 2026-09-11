const korean = document.documentElement.lang === 'ko';
const text = (en, ko) => korean ? ko : en;

document.querySelectorAll('input[name="join-mode"]').forEach(input => {
  input.addEventListener('change', () => {
    const joined = input.value === 'joined';
    document.querySelector('[data-query]').textContent = joined
      ? 'SELECT o.order_id, o.status\nFROM demo_orders o\nLEFT JOIN demo_lines l\n  ON o.order_id = l.order_id;'
      : 'SELECT o.order_id, o.status\nFROM demo_orders o;';
    const rows = document.querySelector('[data-rows]');
    rows.replaceChildren();
    for (let i = 0; i < (joined ? 2 : 1); i++) {
      const row = rows.insertRow();
      row.insertCell().textContent = 'EX-101';
      row.insertCell().textContent = 'open';
    }
    document.querySelector('[data-count]').textContent = joined
      ? text('2 rows · one order appears twice', '2행 · 주문 하나가 두 번 나타납니다')
      : text('1 row · the unused join is removed', '1행 · 불필요한 조인을 제외했습니다');
  });
});

document.querySelectorAll('input[name="lineage-target"]').forEach(input => {
  input.addEventListener('change', () => {
    const report = input.value === 'report';
    document.querySelectorAll('[data-downstream]').forEach(layer => layer.classList.toggle('outside-scope', !report));
    document.querySelector('[data-model-target]').hidden = report;
    document.querySelector('[data-report-target]').hidden = !report;
    document.querySelector('[data-scope]').textContent = report
      ? text('Reporting scope: include the upstream model logic and continue through mart transformations to the reporting view.', '리포팅 매핑 범위: 모델 이전 단계의 로직에 더해, 데이터 마트 변환부터 리포팅 뷰까지 확인합니다.')
      : text('Model scope: inspect staging and design logic through the fact/model layer.', '모델 매핑 범위: 스테이징과 설계 로직부터 팩트 테이블·모델 계층까지 확인합니다.');
  });
});
