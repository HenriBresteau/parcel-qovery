// here you put all the js you want.
import Keypoints from "./js/keypoints.js";

const options = {
  rootMargin: "0px",
  threshold: 0.3,
};
function callback(entries) {
  entries.filter((item) => {
    if (item.isIntersecting) {
      item.target.classList.add("visible");
    } else {
    }
  });
}
let observer = new IntersectionObserver(callback, options);

const keypoints = new Keypoints(observer);
