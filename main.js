const fortuneTeller = {
    messagePieces: [
        [
            'Tomorrow,',
            'In one year from now,',
            'By the end of the week,',
            'Today,'
        ],
        [
            'you will',
            'you are going to',
            'you have to'
        ],
        [
            'find',
            'encounter',
            'think about',
            'face',
            'lose'
        ],
        [
            'a new highly paid job',
            'your soulmate',
            'how this ends'
        ],
    ],

    printMessage () {
        const message = [];

        for (const piecesSection of this.messagePieces) {
            const pieceLocation = Math.floor(Math.random() * piecesSection.length);
            message.push(piecesSection[pieceLocation]);
        }

        console.log(message.join(' '));
    }
};

fortuneTeller.printMessage();