### Description

_**The Calm Kitten**_ is a site meant to help refocus and divert attention from current events or circumstances which are causing anxiety or discomfort. By interacting with the kitten itself, users will be forced to split their attention and hopefully avoid impending anxiety attacks. Users will have the option to view a photograph of nature, get a dad joke to make them laugh, get an inspirational quote, or be directed to a page with contact information for international suicide prevention hotlines.

### Wireframes

- Landing Page ( Desktop )

![https://res.cloudinary.com/nocturnalmusing/image/upload/v1593367954/Landing_Page_hp7fwd.png](https://res.cloudinary.com/nocturnalmusing/image/upload/v1593367954/Landing_Page_hp7fwd.png)

- Desktop Joke / Quote

![](https://res.cloudinary.com/nocturnalmusing/image/upload/v1593367954/Joke_Quote_Screen_knf1c6.png)

- Desktop Photo 

![](https://res.cloudinary.com/nocturnalmusing/image/upload/v1593367962/Show_Me_Smth_Beautiful_Screen_rge8uj.png)

- Desktop Help

![](https://res.cloudinary.com/nocturnalmusing/image/upload/v1593367954/I_Need_Help_Screen_zeoh4p.png)

- Mobile Landing

![](https://res.cloudinary.com/nocturnalmusing/image/upload/v1593367954/Mobile_Landing_eoceve.png)

- Mobile Joke / Photo / Quote

![](https://res.cloudinary.com/nocturnalmusing/image/upload/v1593367954/Other_three_pages_wv09qd.png)

- Mobile Help

![](https://res.cloudinary.com/nocturnalmusing/image/upload/v1593367954/I_Need_Help_Sc_Mobile_ixd6fa.png)

<br>

### MVP

_The goal for my MVP is to have the requisite data rendering on page when calls are requested. As the site is simple in design, my focus will initially be on implementing the various API calls and rendering their data and desired._

<br>

#### MVP Goals

- Use specific text input to trigger API calls
- Implement Quotes API
- Implement Dad Jokes API
- Render returned API call data onto page, accounting for mascot character
- Implement a return to main page button either on <nav> or by clicking the mascot character
- Style pages appropriately for content, ensure readability and ease of access for users
- Reformat for tablet and phone

<br>

#### MVP API

> Use the Data Section to define the API(s) you will be consuming for your project, inluding sample URL queries.

|    API     | Quality Docs? | Documentation | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| iCanHazDadJoke |      yes      | https://icanhazdadjoke.com/api | _`https://icanhazdadjoke.com/` , { headers: { Accept: 'application/JSON' } }_ |
| Quotes API |      yes      | https://type.fit/api/quotes | _https://type.fit/api/quotes_ |
| Pixabay |      yes      | https://pixabay.com/api/docs/ | _https://pixabay.com/api/?key={KEY HERE}&category=nature_ |

Sample Query Results:

``` Call Code
useEffect(() => {
        const apiCall = async () => {
            const data = await axios(`QUERY HERE`)

            updateCall(data.data)
            console.log(data.data)
        }
        apiCall()
    }, [])

```
**iCanHazDadJoke**

![](https://res.cloudinary.com/nocturnalmusing/image/upload/v1593365924/Screen_Shot_2020-06-28_at_10.42.55_AM_u0joa9.png)

**Quotes**

**Changed API**

**Pixabay**

![](https://res.cloudinary.com/nocturnalmusing/image/upload/v1593365924/Screen_Shot_2020-06-28_at_11.33.16_AM_krbcuk.png)



<br>

#### MVP Libraries & Dependencies

|   Library    | Description                                |
| :----------: | :----------------------------------------- |
|    React     | _React will provide the building blocks to form components that will make up this site._ |
| React Router | _React Router will allow pagination_ |

<br>

#### MVP Components

> Use this section to define your React components and the data architecture of your app.

```
src
|__ assets/
      |__ images
|__ components/
      |__ App.js
      |__ Home.js
      |__ Joke.js
      |__ Quote.js
      |__ Image.js
      |__ Help.js
      |__ Header.js
      |__ Button.js
      |__ Footer.js
```

<br>

#### MVP Breakdown

|  Component   |    Type    | state | props | hooks | Description                                |
| :----------: | :--------: | :---: | :---: | :---: | :----------------------------------------- |
|    App.js    |   class    |   y   |   n   |   y   | _App.js_ |
|    Home.js    | functional |   n   |   n   |   n   | _Website landing page_ |
| Input.js     |    class     |    y     |    n     |    n     | _Input area which accepts specific text input_ |
|  Joke.js  | functional |   n   |   y   |   n   | _Page displaying a dad joke_ |
|     Quote.js     | functional |   n   |   y   |   n   | _Page displaying an inspirational quote and who said it_ |
|    Help.js    | functional |   n   |   n   |   n   | _A page displaying a kind message and the suicide prevention hotline_ |
|   Header.js    |   class    |   n   |   n   |   n   | _A div containing the various headers_ |
|  Button.js | functional |   n   |   y   |   y   | _A button, whose display text may change_ |
|    Footer.js    | functional |   n   |   n   |   n   | _A div containing the footer_ |

<br>

#### MVP Timeframes

| Task             | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------- | :------: | :------------: | :-----------: | :---------: |
| Create Files |    H     |     10 mins      |     10mins    |    10mins    |
| Create Header and Footer Components      |    H     |     1 hrs      |     TBD    |     TBD     |
| Create Input Component     |    H     |     1 hrs      |     30mins     |     TBD     |
| Use specific inputs to trigger specific page changes   |    H     |     3 hrs      |     TBD     |     TBD     |
| Use API call to populate Joke.js     |    H     |     3 hrs      |     30mins     |     30mins     |
| Use API call to populate Quote.js     |    H     |     3 hrs      |     1hrs 15mins    |     1hrs 15mins     |
| Populate Help.js with Information     |    H     |     10mins      |     5mins    |     5mins     |
| Add Mascot to Pages     |    M     |     3 hrs      |     TBD     |     TBD     |
| Add basic 'bounce' animation to mascot     |    M     |     30mins      |     TBD     |     TBD     |
| Overall Styling in CSS   |    H     |     3 hrs      |     TBD     |     TBD     |
| Styling Changes for Tablet Version     |    L     |     3 hrs      |     TBD     |     TBD     |
| Component Alterations for Mobile     |    H     |     3 hrs      |     TBD     |     TBD     |
| Styling Changes for Mobile Version     |    M     |     3 hrs      |     TBD     |     TBD     |
| TOTAL            |          |     27 hrs      |     TBD    |     TBD     |

<br>

### Post-MVP

- Implement Photograph API
- Add background noise player ( rain ) with on / off button
- Add a scrollable div to the Help page including hotlines for international users
- Add interactivity with mascot character in response to further inputs
- Add button to remove input and replace with easy access clickable buttons, which will take the user to the same pages as the previous input ( this is for ease of access )
- Following some research, implement a specifically anti-anxiety page 
- Add "Show me something cute" to generate animal pictures instead

<br>

***

## Project Delivery

> The Project Delivery section should be completed as your work on your project.

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

### Code Issues & Resolutions

**Issue**: Previously used API for the inspirational quotes section ceased to return required data. 
_Solution_: Acquired new API and implemented its use to populate data.
