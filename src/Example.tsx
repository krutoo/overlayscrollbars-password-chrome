import { useEffect, useRef } from "react";

export function Example() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;

    if (!container) {
      return;
    }

    const input = document.createElement("input");
    const button = document.createElement("button");

    input.type = "password";
    button.textContent = "Show";

    button.addEventListener("mousedown", (event) => {
      // prevent blur on input
      if (document.activeElement === input) {
        event.preventDefault();
      }
    });

    button.addEventListener("click", () => {
      // focus only if input is not focused
      if (document.activeElement !== input) {
        input.focus();
      }

      // change input type
      input.type = input.type === "text" ? "password" : "text";
      button.textContent = input.type === "text" ? "Hide" : "Show";
    });

    container.append(input, button);
  }, []);

  return <div ref={ref}></div>;
}
