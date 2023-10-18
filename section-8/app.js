const data = {
  name: "raj",
};

const observedData = new Proxy(data, {
  set(target, key, value) {
    document.querySelector("#name").innerText = value;
    target[key] = value;
  },
});
observedData.name = "meet";
console.log(observedData.name);
