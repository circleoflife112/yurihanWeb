/**
 * InfiniteSlider
 * 의존성 없는 바닐라 JS 무한 슬라이더
 * - 클론 방식으로 끊김 없는 루프 구현
 * - 자동 재생 (마우스오버 시 일시정지)
 * - Prev / Next 버튼
 * - 터치 스와이프 지원
 * - 리사이즈 대응
 */
class InfiniteSlider {
  constructor(el) {
    this.el = el;
    this.viewport = el.querySelector('.v-viewport');
    this.track = el.querySelector('.v-track');
    this.origSlides = Array.from(this.track.children);
    this.count = this.origSlides.length;
    this.cloneCount = 3; // 앞뒤로 복사할 슬라이드 수 (데스크탑 visible=3과 동일)
    this.current = this.cloneCount; // 첫 번째 실제 슬라이드 인덱스
    this.isAnimating = false;
    this.autoInterval = null;

    this._buildClones();
    this.allSlides = Array.from(this.track.children);
    this._setPosition(false);
    this._updateActive();
    this._bindEvents();
  }

  /** 앞뒤에 클론 슬라이드 삽입 */
  _buildClones() {
    const lastN = this.origSlides.slice(-this.cloneCount);
    const firstN = this.origSlides.slice(0, this.cloneCount);

    // 마지막 N개를 앞에 prepend (역순으로 삽입해 순서 유지)
    [...lastN].reverse().forEach(s => {
      const clone = s.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      this.track.prepend(clone);
    });

    // 첫 N개를 뒤에 append
    firstN.forEach(s => {
      const clone = s.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      this.track.appendChild(clone);
    });
  }

  /** 현재 슬라이드 너비·중심 오프셋 계산 */
  _getMetrics() {
    const slideWidth = this.allSlides[0].offsetWidth;
    const viewportWidth = this.viewport.offsetWidth;
    const visible = Math.max(1, Math.round(viewportWidth / slideWidth));
    const centerOffset = Math.floor(visible / 2);
    return { slideWidth, centerOffset };
  }

  /** 트랙 위치 설정 */
  _setPosition(animate = true) {
    const { slideWidth, centerOffset } = this._getMetrics();
    const offset = -(this.current - centerOffset) * slideWidth;

    if (!animate) {
      this.track.style.transition = 'none';
      void this.track.offsetLeft; // 강제 리플로우 (순간 이동 적용)
    } else {
      this.track.style.transition = 'transform 0.5s ease';
    }
    this.track.style.transform = `translateX(${offset}px)`;
  }

  /** 활성 슬라이드 클래스 갱신 */
  _updateActive() {
    this.allSlides.forEach((slide, i) => {
      slide.classList.toggle('v-slide-active', i === this.current);
    });
  }

  /** 특정 인덱스로 이동 */
  _goTo(idx, animate = true) {
    this.current = idx;
    this._setPosition(animate);
    this._updateActive();
  }

  /** 다음 슬라이드 */
  next() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this._goTo(this.current + 1);
  }

  /** 이전 슬라이드 */
  prev() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this._goTo(this.current - 1);
  }

  /** 트랜지션 종료 후 클론 영역이면 실제 슬라이드로 순간 이동 */
  _onTransitionEnd() {
    this.isAnimating = false;
    const lastReal = this.cloneCount + this.count - 1;

    if (this.current > lastReal) {
      // 끝 클론 → 첫 번째 실제 슬라이드
      this._goTo(this.cloneCount, false);
    } else if (this.current < this.cloneCount) {
      // 앞 클론 → 마지막 실제 슬라이드
      this._goTo(lastReal, false);
    }
  }

  /** 이벤트 바인딩 */
  _bindEvents() {
    // 버튼
    this.el.querySelector('.v-prev').addEventListener('click', () => this.prev());
    this.el.querySelector('.v-next').addEventListener('click', () => this.next());

    // 트랜지션 종료
    this.track.addEventListener('transitionend', () => this._onTransitionEnd());

    // 터치 스와이프
    let touchStartX = 0;
    this.el.addEventListener('touchstart', e => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });
    this.el.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        diff > 0 ? this.next() : this.prev();
      }
    });

    // 리사이즈 대응
    window.addEventListener('resize', () => this._setPosition(false));
  }

  /** 자동 재생 시작 */
  play() {
    this.pause();
    this.autoInterval = setInterval(() => this.next(), 3000);
  }

  /** 자동 재생 정지 */
  pause() {
    clearInterval(this.autoInterval);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.v-slider').forEach(el => new InfiniteSlider(el));
});
