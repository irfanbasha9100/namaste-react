const heading = React.createElement("h1", { id: 'heading' }, "Hello world using react cdn links")
const root1 = ReactDOM.createRoot(document.getElementById("root"))
root1.render(heading)

//The below is the nested structure
const parent = React.createElement(
    "div", { id: "parent" },
    React.createElement("div", { id: 'child' },
    [React.createElement("h1", {}, "This is h1 inside 2 divs"),
    React.createElement("h2",{},"This is h2")]))

console.log(parent)
const root2 = ReactDOM.createRoot(document.getElementById("root"))
root2.render(parent)
