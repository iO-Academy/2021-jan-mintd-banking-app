import React from 'react';

class Validation extends React.Component {


    validateUserName(userName){
        // let userNameRegex = '/^(?=.{8,20}$)(?![_.-])(?!.*[_.-]{2})[a-zA-Z0-9._-]+(?<![_.-])$/';
        // let isUserNameValid = userNameRegex.test(userName)
        console.log('test')
        console.log(userName)
        return true;
    }
}

export default Validation;
