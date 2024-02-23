import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Top Cryptocurrency Exchanges Referral Page - Earn Rewards by Signing Up</title>
        <meta name="description" content="Earn rewards by signing up for cryptocurrency exchanges using our referral links. We have compiled a list of the top exchanges with the best referral programs. Sign up now and start earning!" />
        <meta name="keywords" content="cryptocurrency, exchanges, referral, rewards, sign up, earn" />
        <meta name="author" content="Your Name" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
        <style>
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                margin: 0;
                padding: 0;
                background: linear-gradient(to bottom right, #61a5c2, #2a355a);
                color: #fff;
            }
            .container {
                max-width: 800px;
                margin: 50px auto;
                padding: 20px;
                background-color: rgba(255, 255, 255, 0.1);
                border-radius: 10px;
                box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
            }
            h1 {
                text-align: center;
                color: #fff;
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
                margin-bottom: 30px;
            }
            .referral-box {
                background-color: rgba(255, 255, 255, 0.1);
                border: 1px solid rgba(255, 255, 255, 0.3);
                border-radius: 10px;
                padding: 20px;
                margin-bottom: 20px;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
            }
            .referral-box:hover {
                transform: translateY(-5px);
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            }
            .exchange-icon {
                font-size: 48px;
                margin-right: 20px;
                border-radius: 50px; /* Slightly rounded corners */
            }
            h2 {
                color: #fff;
                font-size: 24px;
                margin-top: 0;
                text-align: left;
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
                margin-bottom: 20px;
            }
            p {
                color: #fff;
                font-size: 16px;
                margin-bottom: 20px;
                text-align: left;
            }
            a {
                display: inline-block;
                padding: 10px 20px;
                background-color: #ff6f61;
                color: #fff;
                text-decoration: none;
                border-radius: 5px;
                text-align: center;
                transition: background-color 0.3s ease;
            }
            a:hover {
                background-color: #e03224;
            }
        </style>
    </head>
    <body>
    <!--
        <div class="container">
            <h1>Bitcoin Headline News</h1>
            <div id="bitcoin-news"></div>
        </div> 
    -->
        <div class="container">
            <h1>Referral Page</h1>
            <h2>Sign up through the following link to receive lifetime trading fee reductions and bonuses</h2>
            <div class="referral-box">
                <img class="exchange-icon" src="https://play-lh.googleusercontent.com/SJxOSA2a2WY2RYQKv99kKCQVVqA5tmgw2VHn_YY0gL4riv7eDDjZ46X5_6Jge-Ur8uo=w240-h480-rw" alt="Bybit Icon">
                <div>
                    <h2>Bybit</h2>
                    <p>Sign up for Bybit using the following referral link:</p>
                    <a href="https://www.bybit.com/en-US/invite?ref=3ERGLB" target="_blank"><i class="fas fa-external-link-alt"></i> Sign up for Bybit</a>
                </div>
            </div>
            <div class="referral-box">
                <img class="exchange-icon" src="https://play-lh.googleusercontent.com/Z9CIBj2teJvvrFo8G2aKN6b1YUR9T-OgcGc4esJdMlEjVUw3FMPlgAlmrv9gnJ0dEg=w240-h480-rw" alt="Bitrue Icon">
                <div>
                    <h2>Bitrue</h2>
                    <p>Sign up for Bitrue using the following referral link:</p>
                    <a href="https://www.bitrue.com/act/partner/landing?cn=900000&inviteCode=EWLHHVL" target="_blank"><i class="fas fa-external-link-alt"></i> Sign up for Bitrue</a>
                </div>
            </div>
            <div class="referral-box">
                <img class="exchange-icon" src="https://play-lh.googleusercontent.com/pbVJeYeuqnHUxiNZvrxBDPH4SjwOoPSpIlhOOPbkUq0xkRSz3ocFfMCaDQiLUF9j-ZY=w240-h480-rw" alt="Phemex Icon">
                <div>
                    <h2>Phemex</h2>
                    <p>Sign up for Phemex using the following referral link:</p>
                    <a href="https://phemex.com/en/register?referralCode=IMM373&platform=apphttps://www.pionex.com/en/sign/ref/YkmGg8K0" target="_blank"><i class="fas fa-external-link-alt"></i> Sign up for Phemex</a>
                </div>
            </div>
            <div class="referral-box">
                <img class="exchange-icon" src="https://play-lh.googleusercontent.com/8LuyzmkLRILH6vVF7OBU8zf1-gLiWqUHINbiGLgWoXn7W48Mcr6wYcmGnS7YFfT24w=w240-h480-rw" alt="Bitget Icon">
                <div>
                    <h2>Bitget</h2>
                    <p>Sign up for Bitget using the following referral link:</p>
                    <a href="https://www.bitget.com/expressly?languageType=0&channelCode=elflee&vipCode=q5ca" target="_blank"><i class="fas fa-external-link-alt"></i> Sign up for Bitget</a>
                </div>
            </div>
        </div>
    
    	<script>
    	// JavaScript code to fetch Bitcoin news headlines and display them
    	window.addEventListener('load', function() {
    	  // Fetch Bitcoin news headlines using an API
    	  fetch('https://newsdata.io/api/1/news?apikey=pub_388450a14d2bd99dd2c386d30a0b4fa75bbfc&q=bitcoin')
    	    .then(response => {
    	      // Check if the response is ok
    	      if (response.ok) {
    	        // Parse the response as JSON
    	        return response.json();
    	      } else {
    	        // Throw an error if the response is not ok
    	        throw new Error('Something went wrong');
    	      }
    	    })
    	    .then(data => {
    	      // Process the response data and display headlines in #bitcoin-news element
    	      const bitcoinNewsContainer = document.getElementById('bitcoin-news');
    	      // Check if the data has an articles property that is an array
    	      if (data.articles && Array.isArray(data.articles)) {
    	        // Loop through the articles array and create headline elements
    	        data.articles.forEach(article => {
    	          // Check if the article is an object and has a title property
    	          if (article && typeof article === 'object' && article.title) {
    	            // Create a h2 element with the title as text content
    	            const headline = document.createElement('h2');
    	            headline.textContent = article.title;
    	            // Append the headline element to the bitcoinNewsContainer element
    	            bitcoinNewsContainer.appendChild(headline);
    	          }
    	        });
    	      }
    	    })
    	    .catch(error => console.error('Error fetching Bitcoin news:', error));
    	});
    	</script>
    </body>
    </html>
  )
}
