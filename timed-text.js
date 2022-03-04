var Messages = [
    "Here are the BTC price levels to watch with Bitcoin hanging on $40K cliff",
    "Investing in Crypto: Alternatives to Bitcoin and Ether",
    "The popularity of retail bitcoin mining is surging",
    "Bitcoin is falling back below 38,000 USD",
    ];

    function displayMessages() {
    var TIMER_INTERVAL = 5000;
    var FADE_INTERVAL = 0;

    var $div = $("#content");
    $div.text(Messages[0]);

    var messageCounter = 1;

    setInterval(function() {
        if (messageCounter === Messages.length) {
        messageCounter = 0;
        }
        $div.fadeOut(FADE_INTERVAL, function() {
        $div.text(Messages[messageCounter]);
        $div.fadeIn(FADE_INTERVAL);
        messageCounter++;
        });

    }, TIMER_INTERVAL)
    }
    displayMessages();