var President44 = {
	firstName:'Barack',
	lastName:'Obama',
	termLength:2,
	party:'Democratic',
	yearsofPresidency:'2009 to present'
};

var President43 = {
	firstName:'George W.',
	lastName:'Bush',
	termLength:2,
	party:'Republican',
	yearsofPresidency:'2001 to 2009'
};

var President42 = {
	firstName:'Bill',
	lastName:'Clinton',
	termLength:2,
	party:'Democratic',
	yearsofPresidency:'1993 to 2001'
};

var President41 = {
	firstName:'George H. W.',
	lastName:'Bush',
	termLength:1,
	party:'Republican',
	yearsofPresidency:'1989 to 1993'
};

var President40 = {
	firstName:'Ronald',
	lastName:'Reagan',
	termLength:2,
	party:'Republican',
	yearsofPresidency:'1981 to 1989'
};

var presidents = [ President44, President43, President42, President41, President40 ];

console.log( presidents[ 2 ].firstName + ' ' + presidents[ 2 ].lastName );
