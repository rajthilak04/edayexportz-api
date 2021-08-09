var express = require('express');
var http = require('http');
var cors = require('cors');
var bodyParser = require('body-parser')
const sgMail = require('@sendgrid/mail');
// get an environment variable
const token = process.env['EMAIL_API_TOKEN'];
sgMail.setApiKey('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');
var PORT = process.env.PORT || 4444;
var app = express();
app.use(cors())
app.use(express.static("ui")); // myApp will be the same folder name.
app.use(function (req, res, next) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next()
});

app.get('/', function (req, res,next) {
 res.redirect('/'); 
});

app.listen(PORT, function () {
    console.log("" + PORT);
});
console.log("MyProject Server is Listening on port 8080");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Use middleware to set the default Content-Type
app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
});

app.get('/api/endpoint1', (req, res) => {
	
	var guid = new Date().getTime();
	
    res.send(JSON.stringify({gid: guid}));
});

app.get('/api/products', (req, res) => {
	
	var data = [
        {
          "productId": 1,
          "productName": "Black Peppers",
          "productCode": "BP-0011",
          "releaseDate": "March 19, 2019",
          "description": "Black pepper, Piper nigrum, is a climbing perennial plant",
          "fulldescription": "<p>Black pepper, Piper nigrum, is a climbing perennial plant in the family Piperaceae which is grown for its fruits. The fruits are used to produce black, white and green peppercorns which are commonly used as a spice in cooking. Black pepper may be vining or have bushy, wooden stems.</p>",
		  "adv":"<ul>\
				<li>High in antioxidants. Free radicals are unstable molecules that can damage your cells.</li>\
				<li>Has anti-inflammatory properties.</li>\
				<li>May benefit your brain and improve blood sugar control.</li>\
				<li>May have cancer-fighting properties.</li>\
			</ul>",
          "price": 19.95,
          "starRating": 3.2,
          "imageUrl": "pepper.png",
          "url": "black-pepper",
		  "type": 1
        },
		{
          "productId": 2,
          "productName": "Sukku",
          "productCode": "TBX-0048",
          "releaseDate": "May 21, 2019",
          "description": "Sukku (Zingiber officinale) is a flowering plant whose rhizome",
          "fulldescription": "<p>Sukku (Zingiber officinale) is a flowering plant whose rhizome, ginger root or ginger, is widely used as a spice and a folk medicine. It is a herbaceous perennial which grows annual pseudostems (false stems made of the rolled bases of leaves) about one meter tall bearing narrow leaf blades.</p>",
		  "adv":"<ul>\
				<li>Ginger Contains Gingerol, a Substance With Powerful Medicinal Properties.</li>\
				<li>Ginger Can Treat Many Forms of Nausea, Especially Morning Sickness.</li>\
				<li>Ginger May Reduce Muscle Pain and Soreness.</li>\
				<li>The Anti-Inflammatory Effects Can Help With Osteoarthritis.</li>\
			</ul>",
          "price": 8.9,
          "starRating": 4.8,
          "imageUrl": "sukku.png",
          "url": "sukku",
		  "type": 1
        },
        {
          "productId": 3,
          "productName": "Cardamom",
          "productCode": "NP-0042",
          "releaseDate": "December 15, 2019",
          "description": "Cardamom sometimes cardamon or cardamum, is a spice made",
          "fulldescription": "<p>Cardamom sometimes cardamon or cardamum, is a spice made from the seeds of several plants in the genera Elettaria and Amomum in the family. Cardamom has a strong, unique taste, with an intensely aromatic, resinous fragrance. Black cardamom has a distinctly more smoky, though not bitter, aroma, with a coolness some consider similar to mint.</p>",
		  "adv":"<ul>\
				<li>Antioxidant and Diuretic Properties May Lower Blood Pressure.</li>\
				<li>May Contain Cancer-Fighting Compounds.</li>\
				<li>May Protect from Chronic Diseases Thanks to Anti-Inflammatory Effects.</li>\
				<li>May Help with Digestive Problems, Including Ulcers.</li>\
			</ul>",
          "price": 35.95,
          "starRating": 4.6,
          "imageUrl": "cardamom.png",
          "url": "cardamom",
		  "type": 1
        },		        
        {
          "productId": 4,
          "productName": "Neotea Field Beans - (Mochai)",
          "productCode": "TBX-0022",
          "releaseDate": "May 15, 2019",
          "description": "Lima beans, also known as Neotea field beans are popular legumes",
          "fulldescription": "<p>Lima beans, also known as Neotea field beans are popular legumes that are known for their mild buttery flavor and meaty texture. They are known by several regional names. Lima Beans in Tamil are called ‘Mochai’. These beans are highly nutritious in nature and provide protection against various ailments and diseases.</p>",
		  "adv":"<ul>\
				<li>Blood Sugar</li>\
				<li>Bone Development</li>\
				<li>Hair Growth</li>\
				<li>Digestion and Glowing Skin</li>\
			</ul>",
          "price": 11.55,
          "starRating": 3.7,
          "imageUrl": "neotea.png",
          "url": "neotea",
		  "type": 3
        },
        {
          "productId": 5,
          "productName": "Urad Dhal",
          "productCode": "GMG-0042",
          "releaseDate": "October 15, 2018",
          "description": "Black matpe bean is a bean grown in the Indian subcontinent.",
          "fulldescription": "<p>Ulutham paruppu in tamil. Made famous for idlee and vadai in tamilnadu now made all over the world. Vigna mungo, the black gram, urad bean, minapa pappu, mungo bean or black matpe bean is a bean grown in the Indian subcontinent.</p>",
		  "adv":"<ul>\
				<li>Improves Digestion. Urad dal is rich in fibre, both soluble and insoluble, which is known improve our digestion.</li>\
				<li>Protects Heart and Boosts Energy.</li>\
				<li>Improves Bone Health and Strengthens Nervous System.</li>\
				<li>Helps Manage Diabetes and Good For Skin And Hair.</li>\
			</ul>",
          "price": 35.95,
          "starRating": 4.6,
          "imageUrl": "uraddal.png",
          "url": "uraddal",
		  "type": 3
        },
        {
          "productId": 6,
          "productName": "Jaggery",
          "productCode": "GDN-0023",
          "releaseDate": "March 18, 2019",
          "description": "Jaggery is often used as a replacement for refined sugar.",
          "fulldescription": "<p>Jaggery is often used as a replacement for refined sugar. Jaggery is produced using traditional methods, and contains trace amounts of micronutrients including iron, potassium, magnesium, and B-vitamins. Jaggery is sometimes consumed for its supposed digestive and other health benefits</p>",
		  "adv":"<ul>\
				<li>It prevents constipation by aiding digestion.</li>\
				<li>It acts as a detox, as it helps cleanse the liver by flushing out nasty toxins from the body.</li>\
				<li>Jaggery is loaded with antioxidants and minerals like zinc and selenium, which help prevent free-radicals (responsible for early ageing).</li>\
			</ul>",
          "price": 32.99,
          "starRating": 4.2,
          "imageUrl": "jaggery.png",
          "url": "jaggery",
	      "type": 2
        },
        {
          "productId": 7,
          "productName": "Turmeric",
          "productCode": "NP-0042",
          "releaseDate": "December 15, 2019",
          "description": "Turmeric has been used in Asia for thousands of years and is a major part of Ayurveda",
          "fulldescription": "<p>Turmeric has been used in Asia for thousands of years and is a major part of Ayurveda, Siddha medicine, traditional Chinese medicine, Unani, and the animistic rituals of Austronesian peoples. It was first used as a dye, and then later for its supposed properties in folk medicine.</p>",
		  "adv":"<ul>\
				<li>Turmeric is an Anti-Inflammatory</li>\
				<li>Turmeric Contains Bioactive Compounds With Powerful Medicinal Properties.</li>\
				<li>Dramatically Increases the Antioxidant Capacity of the Body.</li>\
				<li>Turmeric Can Help Prevent (And Perhaps Even Treat) Cancer.</li>\
				<li>May Help Treat or Prevent Diabetes.</li>\
			</ul>",
          "price": 35.95,
          "starRating": 4.6,
          "imageUrl": "turmeric.png",
          "url": "turmeric",
		  "type": 2
        },
        {
          "productId": 8,
          "productName": "Ginger",
          "productCode": "NP-0042",
          "releaseDate": "December 15, 2019",
          "description": "Ginger, Zingiber officinale, is an erect, herbaceous perennial plant in the family",
          "fulldescription": "<p>Ginger, Zingiber officinale, is an erect, herbaceous perennial plant in the family Zingiberaceae grown for its edible rhizome (underground stem) which is widely used as a spice. The rhizome is brown, with a corky outer layer and pale-yellow scented center.</p>",
		  "adv":"<ul>\
				<li>Ginger Contains Gingerol, a Substance With Powerful Medicinal Properties.</li>\
				<li>The Anti-Inflammatory Effects Can Help With Osteoarthritis.</li>\
				<li>Ginger Can Treat Many Forms of Nausea, Especially Morning Sickness.</li>\
				<li>Turmeric Can Help Prevent (And Perhaps Even Treat) Cancer.</li>\
				<li>Ginger May Reduce Muscle Pain and Soreness.</li>\
			</ul>",
          "price": 35.95,
          "starRating": 4.6,
          "imageUrl": "ginger.png",
          "url": "Ginger",
		  "type": 2
        },
		{
          "productId": 9,
          "productName": "Red banana",
          "productCode": "NP-0042",
          "releaseDate": "December 15, 2019",
          "description": "Red bananas are a group of varieties of banana with reddish-purple skin.",
          "fulldescription": "<p>Red bananas are a group of varieties of banana with reddish-purple skin. When ripe, raw red bananas have a flesh that is cream to light pink in color. They are also softer and sweeter than the yellow Cavendish varieties, some with a slight raspberry flavor and others with an earthy one.</p>",
		  "adv":"<ul>\
				<li>May Lower Blood Pressure and Support Eye Health.</li>\
				<li>Rich in Antioxidants and May Support Your Immune System.</li>\
				<li>May Improve Digestive Health.</li>\
				<li>Delicious and Easy to Add to Your Diet.</li>\
			</ul>",
          "price": 35.95,
          "starRating": 4.6,
          "imageUrl": "red-banana.png",
          "url": "red-banana",
		  "type": 2
        },
		{
          "productId": 10,
          "productName": "Corn",
          "productCode": "NP-0042",
          "releaseDate": "December 15, 2019",
          "description": "Corn is a plant that grows long ears of kernels on tall, grass-like stalks.",
          "fulldescription": "<p>Corn is a plant that grows long ears of kernels on tall, grass-like stalks. In many parts of the world, it's called maize instead of corn, which is an Old English word meaning \"grain.\"</p>",
		  "adv":"<ul>\
				<li>Energy Enhancer and Miracle for those underweight.</li>\
				<li>Lowers Blood Sugar & Cholesterol Level.</li>\
				<li>Helpful during Pregnancy.</li>\
				<li>Preserve Healthy Skin.</li>\
			</ul>",
          "price": 35.95,
          "starRating": 4.6,
          "imageUrl": "corn.png",
          "url": "corn",
		  "type": 3
        }
      ];
	
    res.send(JSON.stringify(data));
});

app.post('/api/mail', (req, res) =>{
  // Use Smtp Protocol to send Email
  var htmlcontent = "";
  if(req.body.mobile != "" || req.body.mobile != undefined){
    htmlcontent = "<strong>Mobile Number: " +  req.body.mobile + '</strong><br/>'
  }
  htmlcontent += req.body.message;  
  const msg = {
    to: 'rajthilak04@gmail.com',
    from: req.body.email,
    subject: req.body.subject,
    text: req.body.message,
    html: htmlcontent
  };
  sgMail.send(msg);
  res.send({'msg': 'success'});
})