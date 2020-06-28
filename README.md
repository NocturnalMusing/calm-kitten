## Project Planning

> The Project Planning section should be completed for your project pitch with instructors.
>
> To ensure correct Markdown, I recommend cloning this wiki and copy/pasting the raw template code.

<br>

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
- Implement Photograph API
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
| Quotes API |      yes      | http://forismatic.com/en/api/ | _https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/format=json&lang=en_ |
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

![](https://res.cloudinary.com/nocturnalmusing/image/upload/v1593365924/Screen_Shot_2020-06-28_at_11.40.47_AM_byysjn.png)

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
      |__ data-tests
      |__ fonts
      |__ images
      |__ wireframes
|__ components/
      |__ Header.jsx
      |__ Hero.jsx
      |__ Ipsum.jsx
      |__ Lorem.jsx
      |__ CTA.jsx
      |__ Footer.jsx
```

<br>

#### MVP Breakdown

> Use this section to go into further depth regarding every component, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | hooks | Description                                |
| :----------: | :--------: | :---: | :---: | :---: | :----------------------------------------- |
|    App.js    |   class    |   y   |   n   |   n   | _Lorem ipsum dolor sit amet, consectetur._ |
|    Header    | functional |   n   |   n   |   n   | _Lorem ipsum dolor sit amet, consectetur._ |
|  Navigation  | functional |   n   |   n   |   n   | _Lorem ipsum dolor sit amet, consectetur._ |
|     Home     | functional |   n   |   n   |   y   | _Lorem ipsum dolor sit amet, consectetur._ |
|    Index     | functional |   n   |   n   |   y   | _Lorem ipsum dolor sit amet, consectetur._ |
|    Detail    | functional |   n   |   n   |   y   | _Lorem ipsum dolor sit amet, consectetur._ |
|   Gallery    |   class    |   y   |   n   |   y   | _Lorem ipsum dolor sit amet, consectetur._ |
| Gallery Card | functional |   n   |   y   |   y   | _Lorem ipsum dolor sit amet, consectetur._ |
|    Footer    | functional |   n   |   n   |   n   | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

#### MVP Timeframes

> Use this section to estimate the time necessary to build out each of the components you've described above. 
>
> Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe.

| Task             | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Lorem Ipsum      |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Lorem Ipsum      |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Lorem Ipsum      |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Lorem Ipsum      |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL            |          |     6 hrs      |     3 hrs     |     TBD     |

<br>

### Post-MVP

- Add background noise player ( rain ) with on / off button
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

> Use this section to list of all major issues encountered and their resolution, if you'd like.
