// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var h = 0, q = 0, d = 0, n = 0, p = 0;
    
    if (currency > 10000) {
    	return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    } else if (currency === 0) {
    	return {}
    } else {
    	while( currency >= 50 ){
    		currency -= 50;
    		h++;
    	}
    	while( currency >= 25 ){
    		currency -= 25;
    		q++;
    	}
    	while( currency >= 10 ){
    		currency -= 10;
    		d++;
    	}
    	while( currency >= 5 ){
    		currency -= 5;
    		n++;
    	}
    	while( currency > 0 ){
    		currency -= 1;
    		p++;
    	}
    	
    	var count_coins = [h, q, d, n, p];
    	var arr_text = ["H", "Q", "D", "N", "P"];
    	var solution = {};
    	
    	for(var i = 0; i < count_coins.length; i++){
    		if( count_coins[i] > 0 ) {
    				solution[arr_text[i]] = count_coins[i];
    		}
    	}

    	return solution;
    }
}
