"use strict";

document.addEventListener('DOMContentLoaded', function () {
    var closedGiftBox = document.querySelector('.closed-gift-box');
    var messageElement = document.querySelector('.message');
    var heading = document.querySelector('h1');

    closedGiftBox.addEventListener('click', function () {
        // Hide the closed gift box and heading
        closedGiftBox.style.display = 'none';
        heading.style.display = 'none';

        // Show the message
        messageElement.style.display = 'block';
    });
});
