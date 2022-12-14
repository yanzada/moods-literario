import React,{ Component } from 'react';
import { render } from 'react-dom';
import Typed from 'react-typed';
 
class MyComponent extends Component {
    render() {
        return (
            <div>
                <Typed
                    strings={['Here you can find anything']}
                    typeSpeed={40}
                />
                <br/>
 
                <Typed
                strings={[
                    'Search for products',
                    'Search for categories',
                    'Search for brands']}
                    typeSpeed={40}
                    backSpeed={50}
                    attr="placeholder"
                    loop >
                    <input type="text"/>
                </Typed>
            </div>
        );
    }
}
 
render(
    <MyComponent/>,
    document.getElementById('app'),
);