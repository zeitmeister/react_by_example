import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import MainContent from './MainContent';

class App extends Component {
  nameInput = React.createRef();
  
  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: []
  }

  lastGuestId = 0;

  newGuestId = () => {
    const id = this.lastGuestId;
    this.lastGuestId += 1;
    return id;
  }

  //handler to update data passed from the childcomponent
    toggleGuestProperty = (property, id)  => 
    this.setState({
      guests: this.state.guests.map(guest => {
        if (id === guest.id) {
          return {
            ...guest, // spread operator, adds the keys and values to the new object,
            [property]: !guest[property]
          };
        }
        return guest;
      })
    });

    

    toggleConfirmation = id => 
    this.toggleGuestProperty("isConfirmed", id);

    removeGuest = id => 
      this.setState({
        guests: this.state.guests.filter(guest => id !== guest.id)
      });

    toggleEditing = id => {
    this.toggleGuestProperty("isEditing", id);
    }


    setName = (name, id)  => 
    this.setState({
      guests: this.state.guests.map(guest => {
        if (id === guest.id) {
          return {
            ...guest, // spread operator, adds the keys and values to the new object,
            name
          };
        }
        return guest;
      })
    });

    handleNameInput = e => {
      console.log(e.target);
      this.setState({
        pendingGuest: e.target.value
      })
    }

    handleSubmit = e=> {
      e.preventDefault();
      const id = this.newGuestId();
      this.setState({
        guests: [
          {
            name: this.state.pendingGuest,
            isConfirmed: false,
            isEditing: false,
            id
          },
          ...this.state.guests
       ],
       pendingGuest: ""
    });
    }


    toggleFilter = () =>
    this.setState({ isFiltered: !this.state.isFiltered})


    getTotalInvited = () => this.state.guests.length;
  
  getAttendingGuests = () =>
    this.state.guests.reduce(
      (total, guest) => guest.isConfirmed ? total + 1 : total,
      0
      );


  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending;
    return (
      <div className="App">
      <Header 
        handleSubmit={this.handleSubmit}
        handleNameInput={this.handleNameInput}
        pendingGuest={this.state.pendingGuest}
      />
      <MainContent 
        toggleFilter={this.toggleFilter}
        isFiltered={this.state.isFiltered}
        totalInvited={totalInvited}
        numberAttending={numberAttending}
        numberUnconfirmed={numberUnconfirmed}
        guests={this.state.guests}
        toggleConfirmation={this.toggleConfirmation}
        toggleEditing={this.toggleEditing}
        setName={this.setName}
        removeGuest={this.removeGuest}
        pendingGuest={this.state.pendingGuest}
      />
      </div>
    );
  }
}

export default App;
