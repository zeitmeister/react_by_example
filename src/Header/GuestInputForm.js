import React from 'react';
import PropTypes from 'prop-types';


const GuestInputForm = props => 
    <form onSubmit={props.handleSubmit}>
        <input 
        type="text"
        onChange={props.handleNameInput}
        value={props.pendingGuest}
        placeholder="Invite Someone"
        />
        <button type="submit" name="submit" value="submit">Submit</button>
    </form>;

    GuestInputForm.propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        pendingGuest: PropTypes.string.isRequired,
        handleNameInput: PropTypes.func.isRequired
    }

export default GuestInputForm;