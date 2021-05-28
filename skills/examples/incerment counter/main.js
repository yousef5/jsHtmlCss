// variables
const counts = document.querySelectorAll(".count");

counts.forEach((count) => {
  // add fn to use it in settimeout
  const updateCount = function () {
    //  this target use dataset
    const target = +count.dataset.target;
    //   innerhtml as number
    const c = +count.innerHTML;
    //incerment rate
    let incermet = target / 200;
    //add condition to incerment
    if (c < target) {
      count.innerHTML = Math.ceil(c + incermet);
      setTimeout(updateCount, 50);
    } else {
      count.innerHTML = target;
    }
  };
  //   excute the fn
  updateCount();
});
