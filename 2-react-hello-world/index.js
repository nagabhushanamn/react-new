


// working with react list is 2 steps

// step-1 : need define ui component class

/*
    <div class="alert alert-info">
        <p>Good Evening</p>
        <p>10.45PM</p>
    </div>
*/

// way-1 : pure javascript

// class Greeting extends React.Component {
//     render() {
//         let pEle = React.createElement('p', null, 'Good Evening');
//         let pEle2 = React.createElement('p', null, new Date().toLocaleTimeString());
//         let divEle = React.createElement('div', { className: 'alert alert-info' }, pEle);
//         return divEle;
//     }
// }

//way-2: using JSX

class Greeting extends React.Component {
    render() {
        let timeNow=new Date().toLocaleTimeString();
        return (
            <div className="alert alert-info">
                <p>Good Evening</p>
                <p>{timeNow}</p>
            </div>
        );
    }
}

// step-2 : instatiate ui component & render to virtual DOM
// let greeting1 = React.createElement(Greeting, null, null);
// or
let greeting1=<Greeting />

ReactDOM.render(greeting1, document.getElementById('root'));