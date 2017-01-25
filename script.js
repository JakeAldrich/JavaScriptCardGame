var deck = ["2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "TD", "JD", "QD", "KD", "AD",
            "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "TS", "JS", "QS", "KS", "AS",
            "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "TH", "JH", "QH", "KH", "AH",
            "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "TC", "JC", "QC", "KC", "AC"];
var cardNum=0;

function displayCardImages()
{
	//var table7 = document.getElementById("score");
	var table7 = $('#score').get(0);
	 table7.innerHTML = "";
  var cardImages = new Array();
	//var table = document.getElementById("hand");
	var table = $('#hand').get(0);
	 table.innerHTML = "";
	var row = table.insertRow(0);
	var cell1 = row.insertCell(0);

	shuffleCards();
    for (var i=0; i<5; ++i)
    {
        cardImages[i]= "cards/" + deck[cardNum++] + ".jpeg";
      //  table.innerHTML = cardImages[1];
    }

    for (i=0;i<cardImages.length;i++)
   {
		var img1 = document.createElement('img');
		img1.src = "" + cardImages[i];
		cell1.appendChild(img1);
   }
	pairCheck();
	threeCheck();
	fullHouseCheck();
	flushCheck();
	straightCheck();
}


function shuffleCards()
{
        cardNum = 0;
        var ran1 = 0;
        var ran2 = 0;
        var holder = 0;
        for (var i = 0; i < 100; ++i)
        {
            ran1 = Math.floor((Math.random() * deck.length));  // generate random number between 0 and 12
            ran2 = Math.floor((Math.random() * deck.length));  // generate random number between 0 and 12
            holder = deck[ran1];
            deck[ran1] = deck[ran2];
            deck[ran2] = holder;
        }

}

    function showDeck()
    {
        document.write("");
        for (var i = 0; i < deck.length; ++i)
        {
            document.write(deck[i] + "&nbsp");
        }
        document.write("");
    }

	function pairCheck()
	{
		//var table2 = document.getElementById("results");
		var table2 = $('#results').get(0);

		  table2.innerHTML = "";
		var row2 = table2.insertRow(0);
		var cell2 = row2.insertCell(0);
		var pairs = "";

		  row2.innerHTML = pairs;
		var p1 = deck[0].charAt(0);
		var p2 = deck[1].charAt(0);
		var p3 = deck[2].charAt(0);
		var p4 = deck[3].charAt(0);
		var p5 = deck[4].charAt(0);

		if (p1 == p2){
		  pairs = pairs + "\nPair of: "  + p1;
			}
		if (p1 == p3) {
			pairs = pairs + "\nPair of: "  + p1;
		}
		if (p1 == p4) {
			pairs = pairs + "\nPair of: " + p1;
		}
		if (p1 == p5) {
			pairs = pairs + "\nPair of: "  + p1;
		}
		if (p2 == p3) {
			pairs = pairs + "\nPair of: "  + p2;
		}
		if (p2 == p4) {
			pairs = pairs + "\nPair of: "  + p2;
		}
		if (p2 == p5) {
			pairs = pairs + "\nPair of: "  + p2;
		}
		if (p3 == p4) {
			pairs = pairs + "\nPair of: "  + p3;
		}
		if (p3 == p5) {
			pairs = pairs + "\nPair of: "  + p3;
		}
		if (p4 == p5) {
			pairs = pairs + "\nPair of: "  + p4;
		}
			row2.innerHTML = pairs;
		}

	function threeCheck()
	{
		//var table3 = document.getElementById("threes");
		var table3 = $('#threes').get(0);

		table3.innerHTML = "";
		var row3 = table3.insertRow(0);
		var cell3 = row3.insertCell(0);
		var threes = "";

		row3.innerHTML = threes;
		var p1 = deck[0].charAt(0);
		var p2 = deck[1].charAt(0);
		var p3 = deck[2].charAt(0);
		var p4 = deck[3].charAt(0);
		var p5 = deck[4].charAt(0);

		if (p1 == p2 && p1 == p3) {
		  threes = threes +  "Three of a kind: " + p1;
		}
		if (p1 == p2 && p1 == p4) {
			threes = threes + "Three of a kind: " + p1;
		}
		if (p1 == p2 && p1 == p5) {
			threes = threes + "Three of a kind: " + p1;
		}
		if (p1 == p3 && p1 == p4) {
			threes = threes + "Three of a kind: " + p1;
		}
		if (p1 == p3 && p1 == p5) {
			threes = threes + "Three of a kind: " + p1;
		}
		if (p1 == p4 && p1 == p5) {
			threes = threes + "Three of a kind: " + p1;
		}
		if (p2 == p3 && p2 == p4) {
			threes = threes + "Three of a kind: " + p2;
		}
		if (p2 == p3 && p2 == p5) {
			threes = threes + "Three of a kind: " + p2;
		}
		if (p2 == p4 && p2 == p5) {
			threes = threes + "Three of a kind: " + p2;
		}
		if (p3 == p4 && p3 == p5) {
			threes = threes + "Three of a kind: " + p3;
		}
		row3.innerHTML = threes;
	}

	function fullHouseCheck() {
		//var table4 = document.getElementById("fullH");
		var table4 = $('#fullH').get(0);

		table4.innerHTML = "";
		var row4 = table4.insertRow(0);
		var cell4 = row4.insertCell(0);
		var fullH = "";

		row4.innerHTML = fullH;
		var p1 = deck[0].charAt(0);
		var p2 = deck[1].charAt(0);
		var p3 = deck[2].charAt(0);
		var p4 = deck[3].charAt(0);
		var p5 = deck[4].charAt(0);

		if (p1 == p2 && p1 == p3 && p4 == p5) {
			fullH = "Full House";
		}
		if (p1 == p2 && p1 == p4 && p3 == p5) {
			fullH = "Full House";
		}
		if (p1 == p2 && p1 == p5 && p3 == p4) {
			fullH = "Full House";
		}
		if (p1 == p3 && p1 == p4 && p2 == p5) {
			fullH = "Full House";
		}
		if (p1 == p3 && p1 == p5 && p2 == p4) {
			fullH = "Full House";
		}
		if (p1 == p4 && p1 == p5 && p2 == p3) {
			fullH = "Full House";
		}
		if (p2 == p3 && p2 == p4 && p1 == p5) {
			fullH = "Full House";
		}
		if (p2 == p3 && p2 == p5 && p1 == p4) {
			fullH = "Full House";
		}
		if (p2 == p4 && p1 == p5 && p1 == p3) {
			fullH = "Full House";
		}
		if (p3 == p2 && p1 == p4 && p3 == p5) {
			fullH = "Full House";
		}
		if (p3 == p4 && p3 == p5 && p2 == p1) {
			fullH = "Full house";
		}
		row4.innerHTML = fullH;
	}

	function flushCheck() {
		//var table5 = document.getElementById("flush");
		var table5 = $('#flush').get(0);

		table5.innerHTML = "";
		var row5 = table5.insertRow(0);
		var cell5 = row5.insertCell(0);
		var flush = "";

		row5.innerHTML = flush;
		var p1 = deck[0].charAt(1);
		var p2 = deck[1].charAt(1);
		var p3 = deck[2].charAt(1);
		var p4 = deck[3].charAt(1);
		var p5 = deck[4].charAt(1);

		if (p1 == p2 && p1 == p3 && p1 == p4 && p5 == p1) {
			flush = "Flush of: " + p1;
		}
		row5.innerHTML = flush;
	}

	function straightCheck() {
		//var table6 = document.getElementById("straight");
		var table6 = $('#straight').get(0);

		table6.innerHTML = "";
		var row6 = table6.insertRow(0);
		var cell6 = row6.insertCell(0);
		var straight = "";

		row6.innerHTML = straight;
		var p1 = deck[0].charAt(0);
		var p2 = deck[1].charAt(0);
		var p3 = deck[2].charAt(0);
		var p4 = deck[3].charAt(0);
		var p5 = deck[4].charAt(0);
		var s1 = deck[0].charAt(1);
		var s2 = deck[1].charAt(1);
		var s3 = deck[3].charAt(1);
		var s4 = deck[3].charAt(1);
		var s5 = deck[4].charAt(1);
		var hand = p1+p2+p3+p4+p5;

		if (hand.includes("A") && hand.includes("2") && hand.includes("3") && hand.includes("4") && hand.includes("5") && s1 == s2 && s1 == s3 && s1 == s4 && s5 == s1) {
			straight = "Straight Flush of: " + p1 + " " + p2 + " " + p3 + " " + p4 + " " + p5;
		}
		else if (hand.includes("A") && hand.includes("2") && hand.includes("3") && hand.includes("4") && hand.includes("5")) {
			straight = "Straight of: " + p1 + " " + p2 + " " + p3 + " " + p4 + " " + p5;
		}
		else if (hand.includes("2") && hand.includes("3") && hand.includes("4") && hand.includes("5") && hand.includes("6") && s1 == s2 && s1 == s3 && s1 == s4 && s5 == s1 ) {
			straight = "Straight Flush of: " + p1 + " " + p2 + " " + p3 + " " + p4 + " " + p5;
		}
		else if (hand.includes("2") && hand.includes("3") && hand.includes("4") && hand.includes("5") && hand.includes("6")) {
			straight = "Straight of: " + p1 + " " + p2 + " " + p3 + " " + p4 + " " + p5;
		}
		else if (hand.includes("3") && hand.includes("4") && hand.includes("5") && hand.includes("6") && hand.includes("7") && s1 == s2 && s1 == s3 && s1 == s4 && s5 == s1 ) {
			straight = "Straight Flush of: " + p1 + " " + p2 + " " + p3 + " " + p4 + " " + p5;
		}
		else if (hand.includes("3") && hand.includes("4") && hand.includes("5") && hand.includes("6") && hand.includes("7")) {
			straight = "Straight of: " + p1 + " " + p2 + " " + p3 + " " + p4 + " " + p5;
		}
		else if (hand.includes("4") && hand.includes("5") && hand.includes("6") && hand.includes("7") && hand.includes("8") && s1 == s2 && s1 == s3 && s1 == s4 && s5 == s1 ) {
			straight = "Straight Flush of: " + p1 + " " + p2 + " " + p3 + " " + p4 + " " + p5;
		}
		else if (hand.includes("4") && hand.includes("5") && hand.includes("6") && hand.includes("7") && hand.includes("8")) {
			straight = "Straight of: " + p1 + " " + p2 + " " + p3 + " " + p4 + " " + p5;
		}
		else if (hand.includes("5") && hand.includes("6") && hand.includes("7") && hand.includes("8") && hand.includes("9") && s1 == s2 && s1 == s3 && s1 == s4 && s5 == s1 ) {
			straight = "Straight Flush of: " + p1 + " " + p2 + " " + p3 + " " + p4 + " " + p5;
		}
		else if (hand.includes("5") && hand.includes("6") && hand.includes("7") && hand.includes("8") && hand.includes("9")) {
			straight = "Straight of: " + p1 + " " + p2 + " " + p3 + " " + p4 + " " + p5;
		}
		else if (hand.includes("6") && hand.includes("7") && hand.includes("8") && hand.includes("9") && hand.includes("T") && s1 == s2 && s1 == s3 && s1 == s4 && s5 == s1 ) {
			straight = "Straight Flush of: " + p1 + " " + p2 + " " + p3 + " " + p4 + " " + p5;
		}
		else if (hand.includes("6") && hand.includes("7") && hand.includes("8") && hand.includes("9") && hand.includes("T")) {
			straight = "Straight of: " + p1 + " " + p2 + " " + p3 + " " + p4 + " " + p5;
		}
		else if (hand.includes("7") && hand.includes("8") && hand.includes("9") && hand.includes("T") && hand.includes("J") && s1 == s2 && s1 == s3 && s1 == s4 && s5 == s1 ) {
			straight = "Straight Flush of: " + p1 + " " + p2 + " " + p3 + " " + p4 + " " + p5;
		}
		else if (hand.includes("7") && hand.includes("8") && hand.includes("9") && hand.includes("T") && hand.includes("J")) {
			straight = "Straight of: " + p1 + " " + p2 + " " + p3 + " " + p4 + " " + p5;
		}
		else if (hand.includes("8") && hand.includes("9") && hand.includes("T") && hand.includes("J") && hand.includes("Q") && s1 == s2 && s1 == s3 && s1 == s4 && s5 == s1 ) {
			straight = "Straight Flush of: " + p1 + " " + p2 + " " + p3 + " " + p4 + " " + p5;
		}
		else if (hand.includes("8") && hand.includes("9") && hand.includes("T") && hand.includes("J") && hand.includes("Q")) {
			straight = "Straight of: " + p1 + " " + p2 + " " + p3 + " " + p4 + " " + p5;
		}
		else if (hand.includes("9") && hand.includes("10") && hand.includes("J") && hand.includes("Q") && hand.includes("K") && s1 == s2 && s1 == s3 && s1 == s4 && s5 == s1 ) {
			straight = "Straight Flush of: " + p1 + " " + p2 + " " + p3 + " " + p4 + " " + p5;
		}
		else if (hand.includes("9") && hand.includes("10") && hand.includes("J") && hand.includes("Q") && hand.includes("K")) {
			straight = "Straight of: " + p1 + " " + p2 + " " + p3 + " " + p4 + " " + p5;
		}
		else if (hand.includes("T") && hand.includes("J") && hand.includes("Q") && hand.includes("K") && hand.includes("A") && s1 == s2 && s1 == s3 && s1 == s4 && s5 == s1 ) {
			straight = "Straight Flush of: " + p1 + " " + p2 + " " + p3 + " " + p4 + " " + p5;
		}
		else if (hand.includes("T") && hand.includes("J") && hand.includes("Q") && hand.includes("K") && hand.includes("A")) {
			straight = "Straight of: " + p1 + " " + p2 + " " + p3 + " " + p4 + " " + p5;
		}
		row6.innerHTML = straight;
	}

	var cardj = new Array();
	cardC = 2;
  var blackJackHand = false;
  
	function blackJack() {
	while (cardC > 1) {
		cardj[cardC] = "";
		--cardC;
	}

	cardC = 2;

	var table = document.getElementById("hand");

	table.innerHTML = "";
	var row = table.insertRow(0);
	var cell1 = row.insertCell(0);

	shuffleCards();

	var table2 = document.getElementById("score");
	table2.innerHTML = "";
	var table3 = document.getElementById("straight");
	table3.innerHTML = "";
	var table4 = document.getElementById("flush");
	table4.innerHTML = "";
	var table5 = document.getElementById("fullH");
	table5.innerHTML = "";
	var table6 = document.getElementById("threes");
	table6.innerHTML = "";
	var table7 = document.getElementById("results");
	table7.innerHTML = "";

    for (var i=0; i<2; ++i)
    {
      cardj[i]= "cards/" + deck[cardNum++] + ".jpeg";
    }

    for (i=0;i<cardj.length;i++)
   {
		  var img1 = document.createElement('img');
		  img1.src = "" + cardj[i];
		  cell1.appendChild(img1);
   }

   blackJackHand = true;
	}

	function blackDraw() {
    if (blackJackHand == true) {
		var table = document.getElementById("hand");
		table.innerHTML = "";
		var row = table.insertRow(0);
		var cell1 = row.insertCell(0);

		cardj[cardC] = "cards/" + deck[cardC] + ".jpeg";

	for (i=0;i<cardj.length;i++)
	{
		var img1 = document.createElement('img');
		img1.src = "" + cardj[i];
		cell1.appendChild(img1);
	}
		cardC++;
	}
}

	function blackStand() {
		var cardVal = 0;
		var houseVal = 0;
		var table7 = document.getElementById("score");
		table7.innerHTML = "";
		var row7 = table7.insertRow(0);
		var row8 = table7.insertRow(0);
		var row9 = table7.insertRow(0);
		var cell7 = row7.insertCell(0);
		var p1;
		var p2;
		for (i=0; i < cardC; i++) {
			p1 = deck[i].charAt(0);
			if (p1 == "T" || p1 == "J" || p1 == "Q" || p1 == "K")  {
				p1 = 10;
			}
			if (p1 == "A") {
				p1 = 11;
			}
			p1 = parseInt(p1);
			cardVal = cardVal + p1;
		}
		if (cardVal > 21) {
			cardVal = "Your Value: Bust"
			row7.innerHTML = cardVal;
		}
		else if (cardVal <= 21) {
			cardVal = "Your Value: " + cardVal;
			row7.innerHTML = cardVal;
		}
		i = cardC + 1;
		k = cardC + 3;
		for (var j = i; j < k; j++){
			p2 = deck[j].charAt(0);
			if (p2 == "T" || p2 == "J" || p2 == "Q" || p2 == "K")  {
				p2 = 10;
			}
			if (p2 == "A") {
				p2 = 11;
			}
			p2 = parseInt(p2);
			houseVal = houseVal + p2;
		}
		while (houseVal < 17) {
			p2 = deck[j++].charAt(0);
			if (p2 == "T" || p2 == "J" || p2 == "Q" || p2 == "K")  {
				p2 = 10;
			}
			if (p2 == "A") {
				p2 = 11;
			}
			p2 = parseInt(p2);
			houseVal = houseVal + p2;
		}
		if (houseVal > 21) {
			row8.innerHTML = "House Value: Bust";
		}
		else {
			row8.innerHTML = "House Value: " + houseVal;
		}
    blackJackHand = false;
	}
