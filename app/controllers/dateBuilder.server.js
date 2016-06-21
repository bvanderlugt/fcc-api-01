function getNaturalDate(t) {
	var months = ['January', 'February', 'March', 
		'April', 'May', 'June', 'July', 'August', 'September',
		'October', 'November', 'December'];

	if (isNaN(t.getMonth()) || isNaN(t.getDate()) || isNaN(t.getFullYear())) {
	    return null;
	} else {
        return months[t.getMonth()] + " " + t.getDate() + ", " + t.getFullYear();	    
	}
};

function dateBuilder(req) {
            
            var time = {}; 
            
			if (new Date(req.params.time) > 0 ) {
			    var t = new Date(req.params.time);
			} else {
			    var t = new Date(parseInt(req.params.time));
			}
			
			time['unix'] = t.getTime();
			time['natural'] = getNaturalDate(t);
			
			return time;
}

module.exports = dateBuilder;