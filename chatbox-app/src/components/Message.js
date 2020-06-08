import React from 'react';
//si la fonction isUser detecte que le pseudo du message est le meme que celui connecté, on a une div user-message (bleu a droite)
//sinon c'est une div not-user-message, rose a gauche
const Message = ({ pseudo, message, isUser }) => {
    if (isUser(pseudo)) {
        return (
            <p className="user-message">
                {message}
            </p>
        );
    }
    else {
        return (
            <p className="not-user-message">
               <strong>{pseudo}</strong> {message}
            </p>
        );
    }
};

export default Message;