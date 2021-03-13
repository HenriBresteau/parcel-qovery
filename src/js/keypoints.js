export default class Keypoints {
  constructor(observer) {
    console.log("init Keypoints");
    this.observer = observer;
    this.init();
  }

  init() {
    const target = document.querySelectorAll(".q-key-points ul li");
    target.forEach((li) => {
      this.observer.observe(li);
    });
    // this.observer.observe(target);
  }
}
