import React from 'react';
import axios from 'axios';
import { produce } from 'immer';

class EditPage extends React.Component {

    state = {
        isLoading: true,
        person: {
            id: '',
            firstName: '',
            lastName: '',
            age: ''
        }
    }

    onTextChange = e => {
        const nextState = produce(this.state, draftState => {
            draftState.person[e.target.name] = e.target.value;
        });
        this.setState(nextState);
    }

    onSubmit = async () => {
        await axios.post('/api/people/update', this.state.person);
        this.props.history.push('/'); //redirect to '/'
    }

    componentDidMount = async () => {
        const { data } = await axios.get(`/api/people/get?id=${this.props.match.params.id}`);
        this.setState({ person: data, isLoading: false });
    }

    render() {
        const { isLoading } = this.state;
        const { firstName, lastName, age } = this.state.person;
        return (
            <div className="container" style={{ marginTop: 60 }}>
                {isLoading && <h2>Loading....</h2>}
                {!isLoading && <div className="row">
                    <div className="col-md-6 col-md-offset-3 well">
                        <input name='firstName'
                            className="form-control"
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={this.onTextChange} />
                        <br />
                        <input
                            name='lastName'
                            className="form-control"
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={this.onTextChange} />
                        <br />
                        <input
                            name='age'
                            className="form-control"
                            type="text"
                            placeholder="Age Name"
                            value={age}
                            onChange={this.onTextChange} />
                        <br />
                        <button onClick={this.onSubmit} className="btn btn-primary btn-lg btn-block">Submit</button>
                    </div>
                </div>}
            </div>
        )
    }
}

export default EditPage;