
function Loading(props) {
  if (props.error) {
    return (
      <div>
        Error! <button onClick={props.retry}>Retry</button>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

// const LoadablePlot = Loadable({
//   loader: () => import("../skills/plot"),
//   render(loaded, props) {
//     let Component = loaded.SkillsPlot;
//     return <Component {...props} />;
//   },
//   loading() {
//     return <Loading />;
//   },
// });
