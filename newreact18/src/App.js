import "./App.css";
import React, { useEffect, useState, useTransition } from "react";

const Item = ({ i }) => {
  for (let i = 0; i < 200000; i++) { }
  return (
    <span
      key={i}
      style={{
        display: "inline-block",
        width: "5px",
        height: "5px",
        backgroundColor: `rgb(${255 * Math.random()},${255 * Math.random()},${255 * Math.random()
          })`,
      }}
    />
  );
};

const App = () => {
  useEffect(() => {
    console.log('渲染')
  })
  const n = 50000;
  const [state, setState] = useState(false);
  const [isPending, startTransition] = useTransition({ timeoutMs: 3000 });

  return (
    <div style={{ fontSize: 0 }}>
      <button
        onClick={() => {
          React.startTransition(() => {
            // 本次更新是并发更新
            setState(!state);
          });
        }}
      >
        666
      </button>
      {state &&
        [...new Array(n)].map((_, i) => {
          return <Item key={i} i={i} />;
        })}
    </div>
  );
};


export default App;