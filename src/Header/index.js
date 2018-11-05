import React from 'react'
import PropTypes from 'prop-types';
import GuestInputForm from './GuestInputForm';


const Header = props => 
    <header>
        <h1>RSVP</h1>
        <p>A Treehouse App</p>
        <GuestInputForm 
        handleSubmit={props.handleSubmit}
        handleNameInput={props.handleNameInput}
        pendingGuest={props.pendingGuest}
        />
    </header>;

    Header.propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        pendingGuest: PropTypes.string.isRequired,
        handleNameInput: PropTypes.func.isRequired
    }

export default Header;