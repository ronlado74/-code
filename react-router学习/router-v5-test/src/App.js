import React, { Fragment } from "react";

import { BrowserRouter as Router, Route, Link, Switch, Redirect, useHistory, useParams, useLocation } from "react-router-dom";

export default function App () {
  const name = "John Doe";
  const isAuthenticated = true;  //路由守卫
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              {/* 在一级导航栏匹配二级导航路由的时候，不要加exact 属性，否则二级导航中的子组件会出现不显示的问题。 */}
              <Link to={`/about/${name}`}>About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        {/* 还可以通过使用Switch包裹路由来告诉 React Router 一次仅加载一条路由。 */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about/:name" component={About} />
          {isAuthenticated ? <Route path="/contact" component={Contact} /> : <Redirect to="/" />}
        </Switch>
      </main>
    </Router>
  );
}

const Home = () => (
  <Fragment>
    <h1>Home</h1>
  </Fragment>
);

const About = () => {
  const { name } = useParams();
  // props.match.params.name
  return (
    <Fragment>
      {/* {name !== "John Doe" ? <Redirect to="/" /> : null} */}
      <h1>About {name}</h1>
      <div>
        <div>
          <h5>二级导航栏</h5>
          <ul>
            <li>
              <Link to="/about/reactpage">reactpage页面</Link>
            </li>
            <li>
              <Link to="/about/vue">Vue页面</Link>
            </li>
            <li>
              <Link to="/about/flutter">Flutter页面</Link>
            </li>
          </ul>
        </div>
        <div>
          <Route path="/about/reactpage" exact component={Reactpage} />
          <Route path="/about/vue" exact component={Vue} />
          <Route path="/about/flutter" exact component={Flutter} />
        </div>
      </div>
    </Fragment>
  )
}


const Contact = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  console.log(pathname, 'pathname++++++++++')
  return (
    <Fragment>
      <h1>Contact</h1>
      <button onClick={() => history.push("/")}>Go to home</button>
    </Fragment>
  )
};

const Reactpage = () => {
  return (
    <h1>Reactpage</h1>
  )
}

const Vue = () => {
  return (
    <h1>Vue</h1>
  )
}

const Flutter = () => {
  return (
    <h1>Flutter</h1>
  )
}
