import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { Example } from "./Example";
import { StubArticle } from "./StubArticle";
import "overlayscrollbars/overlayscrollbars.css";
import "./App.css";

export function App() {
  return (
    <div className="App">
      <div className="App_area">
        <Example />
        <StubArticle />
      </div>

      <OverlayScrollbarsComponent
        className="App_area"
        defer
        options={{ overflow: { y: "scroll" } }}
      >
        <Example />
        <StubArticle />
      </OverlayScrollbarsComponent>
    </div>
  );
}
