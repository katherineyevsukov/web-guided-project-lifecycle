import React from 'react';
import fetchDogs from './services/fetchDogs';

class App extends React.Component {
    state = {
        dogImages:[],
        breed: ''
    }

    componentDidMount() {
        fetchDogs("boxer")
            .then(dogImages=> {
                this.setState({
                    dogImages: dogImages
                });
            })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.dogImages !== prevState.dogImages) {
            if (this.state.breed === "chihuahua") {
                fetchDogs("pug")
                    .then(dogImages=> {
                        this.setState({
                            dogImages: dogImages,
                            breed: "pug"
                        });
                    })
            }
        }
    }

    handleSubmit = (e)=> {
        e.preventDefault();
        fetchDogs(this.state.breed)
            .then(dogImages=> {
                this.setState({
                    dogImages: dogImages
                });
            });
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            breed: e.target.value
        })
    }

    render(){ 
        return(<div>
            <h1>Dog Image Getter 3.4 ++</h1>
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.breed} onChange={this.handleChange}/>
                <button>Fetch dogs</button>
            </form>
            <div id="dogImages">
                {
                    this.state.dogImages.map(image => {
                        return <img width={200} src={image} alt={image}/>
                    })
                }
            </div>
        </div>);
    }
}

export default App;