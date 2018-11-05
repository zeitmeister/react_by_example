import React from 'react';
import ConfirmedFilter from './ConfirmedFilter';
import Counter from './Counter';
import GuestList from './GuestList';

const MainContent = props => 
    <div className="main">
        <ConfirmedFilter 
            isFiltered={props.isFiltered}
            toggleFilter={props.toggleFilter}
        />
        <Counter 
            totalInvited={props.totalInvited}
            numberAttending={props.numberAttending}
            numberUnconfirmed={props.numberUnconfirmed}/>
        <GuestList 
            guests={props.guests}
            toggleConfirmation={props.toggleConfirmation} //the function is passed to the guestlist component as props
            toggleEditing={props.toggleEditing} //the function is passed to the guestlist component as props
            setName={props.setName}
            isFiltered={props.isFiltered}
            removeGuest={props.removeGuest}
            pendingGuest={props.pendingGuest}
        />
    </div>

export default MainContent; 