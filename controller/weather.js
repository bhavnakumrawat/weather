const axios = require('axios');

const weatherController = {
  /** Login new user to the DB if not exists **/
  getWeather: async (req, res) => {
    
    let latitude = req.query.latitude
    let longitude = req.query.longitude

    var url = `http://api.openweathermap.org/data/2.5/weather?`
            +`lat=${latitude}&lon=${longitude}&appid=${process.env.API_KEY}`
  
            console.log(url)
            axios({
              method: 'get',
              url: url,
              responseType: 'json'
            })
              .then(function (response) {

                console.log("res: ",response.data)
                res.json(response.data)
                // res.send(response)
              }).catch((err)=>{

                console.log("err: ",err)

              });
   


  },

  /** Otp user using the phone number **/
  home: async (req, res) => {

    console.log("home")
    res.render("test", { weather: null, error: null });

  },

  
};

module.exports = weatherController;
