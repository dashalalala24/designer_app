import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import "./vendor/slick-carousel/slick/slick.css";
import "./vendor/slick-carousel/slick/slick-theme.css";

import { MainPage } from "./pages/MainPage";

// function App() {
//   return (
//     <Router>
//       <Route
//         render={({ location }) => (
//           <TransitionGroup>
//             <CSSTransition key={location.key} timeout={500} classNames="page">
//               <Routes location={location}>
//                 <Route  path="/" component={Home} />
//                 <Route path="/about" component={About} />
//                 <Route path="/contact" component={Contact} />
//               </Routes>
//             </CSSTransition>
//           </TransitionGroup>
//         )}
//       />
//     </Router>
//   );
// }

// export default App;

// const About = () => (
//   <div
//     style={{
//       backgroundColor: "lemonchiffon",
//       width: "100vw",
//       height: "100vh",
//       color: "black",
//     }}
//   >
//     About
//     <br />
//     <Link to="/">Link to home</Link>
//   </div>
// );
// const Contact = () => <div>Contact</div>;

const App = () => {
  return (
    <Router>
      <RouteWrapper />
    </Router>
  );
};

const RouteWrapper = () => {
  // const location = useLocation();

  // const transitions = useTransition(location, location => location.key, {
  //   from: {
  //     opacity: 0,
  //     position: 'absolute',
  //     width: '100%',
  //     transform: `translate3d(100%, 0, 0)`
  //   },
  //   enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  //   leave: {
  //     opacity: 0,
  //     transform: `translate3d(-50%, 0, 0)`
  //   }
  // })

  // return (
  //   <TransitionGroup>
  //     <CSSTransition
  //       key={location.key}
  //       timeout={1000}
  //       classNames={{
  //         enter:
  //           location.pathname === "/about"
  //             ? "page-enter-from-right"
  //             : "page-enter",
  //         enterActive: "page-enter-active",
  //         exit:
  //           location.pathname === "/about" ? "page-exit-to-left" : "page-exit",
  //         exitActive: "page-exit-active",
  //       }}
  //     >
  //       <Routes location={location}>
  //         <Route path="/" Component={Home} />
  //         <Route path="/about" Component={About} />
  //         <Route path="/contact" Component={Contact} />
  //       </Routes>
  //     </CSSTransition>
  //   </TransitionGroup>
  // );

  // const transitions = useTransition(location, {
  //   from: {
  //     opacity: 0,
  //     position: "absolute",
  //     width: "100%",
  //     transform: `translate3d(100%, 0, 0)`,
  //   },
  //   enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  //   leave: {
  //     opacity: 0,
  //     transform: `translate3d(-50%, 0, 0)`,
  //   },
  //   // Добавьте необходимые свойства, такие как ref и т.д., если это необходимо
  // });

  // return transitions.map((style, item) => (
  //   <animated.div key={key} style={style}>
  //     <Routes location={item}>
  //       <Route path="/" Component={Home} />
  //       <Route path="/about" Component={About} />
  //     </Routes>
  //   </animated.div>
  // ));

  return (
    <Routes location={location}>
      <Route path="/" Component={MainPage} />
      {/* <Route path="/about" Component={About} /> */}
    </Routes>
  );
};

export default App;
