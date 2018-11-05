import React, { Component } from 'react';
import './App.css';
import GuestList from './GuestList';

class App extends Component {
  nameInput = React.createRef();
  
  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: [
      {
        name: 'Treause',
        isConfirmed: false,
        isEditing: false
      },
      {
        name: "Kalle Kebab",
        isConfirmed: true,
        isEditing: false
      },
      {
        name: "Jenka",
        isConfirmed: true,
        isEditing: true
      }
    ]
  }

  //handler to update data passed from the childcomponent
    toggleGuestPropertyAt = (property, indexToChange)  => 
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest, // spread operator, adds the keys and values to the new object,
            [property]: !guest[property]
          };
        }
        return guest;
      })
    });

    

    toggleConfirmationAt = index => 
    this.toggleGuestPropertyAt("isConfirmed", index);

    toggleEditingAt = index => {
    this.toggleGuestPropertyAt("isEditing", index);
    }


    setNameAt = (name, indexToChange)  => 
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest, // spread operator, adds the keys and values to the new object,
            name
          };
        }
        return guest;
      })
    });

    handleNameInput = e => {
      this.setState({
        pendingGuest: e.target.value
      })
    }

    handleSubmit = e => {
      e.preventDefault();
      this.setState({
        guests: [
          {
            name: this.state.pendingGuest,
            isConfirmed: false,
            isEditing: false
          },
          ...this.state.guests
       ],
       pendingGuest: ""
    });
    }


    toggleFilter = () =>
    this.setState({ isFiltered: !this.state.isFiltered})


    getTotalInvited = () => this.state.guests.length;
  
  //getAttendingGuests = () =>
  //getUnconfirmedGuests= () =>

  render() {
    return (
      <div className="App">
      <header>
        <h1>RSVP</h1>
        <p>A Treehouse App</p>
        <form onSubmit={this.handleSubmit}>
            <input 
              type="text"
              onChange={this.handleNameInput}
              value={this.state.pendingGuest}
              ref={this.nameInput} 
              placeholder="Invite Someone"
               />
            <button type="submit" name="submit" value="submit">Submit</button>
        </form>
      </header>
      <div className="main">
        <div>
          <h2>Invitees</h2>
          <label>
            <input type="checkbox" 
            onChange={this.toggleFilter}
            onChecked={this.state.isFiltered}
            /> Hide those who haven't responded
          </label>
        </div>
        <table className="counter">
          <tbody>
            <tr>
              <td>Attending:</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Unconfirmed:</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
        <GuestList 
        guests={this.state.guests}
        toggleConfirmationAt={this.toggleConfirmationAt} //the function is passed to the guestlist component as props
        toggleEditingAt={this.toggleEditingAt} //the function is passed to the guestlist component as props
        setNameAt={this.setNameAt}
        isFiltered={this.state.isFiltered}
        />
      </div>
    </div>
    );
  }
}

export default App;
