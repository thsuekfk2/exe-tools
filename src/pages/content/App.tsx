export default function App() {
  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 18 || event.key === "Alt") {
      event.preventDefault();
      console.log("[key 감지] alt/option key 감지");
    }
  });

  window.addEventListener("beforeunload", function (event) {
    event.preventDefault();
    event.returnValue = "";
  });

  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 116 || (event.ctrlKey && event.keyCode === 82)) {
      event.preventDefault();
    }
  });

  return <div>content</div>;
}
