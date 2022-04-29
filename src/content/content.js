export const articles = [
                {
            title: `A breif analysis of various fantasy baseball scoring systems`,
            subtitle: `The rise of fantasy baseball led to a more analytics-driven baseball world. But what can scoring systems tell us about the value of players as they compare to traditional metrics?`,
            author: `Devon Andrew Davila`,
            category: "Baseball",
            date: "April 25, 2022",
            thumbnail: "https://toplinestats.com/bwarfantasy.png",
            body: [
                {
                    type: "text",
                    content: `Baseball simulations are nearly as old as the game itself, dating back to at least 1866 with the advent of primitive tabletop games, gradually evolving into a meticulously detailed baseball card game (featuring imaginary competitions curated and recorded by legendary American novelist Jack Kerouac), and eventually arriving at the famous Rotisserie League led by sports journalist Daniel Okrent. The influence of baseball on fantasy sports is unquestionable- but what can fantasy scoring systems tell us about baseball?`,
                },
                {
                    type: "text",
                    content: `Before taking a look at the data, let's first define our research question:`,
                },
            {
                    type: "paragraph",
                    content: `What is the relationship between fantasy baseball scoring systems and traditional measures of player value?`,
                },
              {
                    type: "text",
                    content: `Specifically, let's look at fantasy scoring methods from head-to-head matchups where the scoring is straightforward (for the sake of simplicity, let's looks at batting statistics only). ESPN's scoring system awards as follows:`,
                },
              {
                    type: "text",
                    content: `-Total bases - 1 point each`,
                },
              {
                    type: "text",
                    content: `-RBI - 1 point`,
                },
              {
                    type: "text",
                    content: `-Run scored - 1 point`,
                },
              {
                    type: "text",
                    content: `-Stolen base - 1 point`,
                },
              {
                    type: "text",
                    content: `-Walk - 1 point`,
                },
              {
                    type: "text",
                    content: `-Strikeout - minus 1 point`,
                },
                {
                    type: "text",
                    content: `TO BE CONTINUED`,
                },

            ],
        },
  {
            title: `Can we guess the political affiliation of states without looking at votes?`,
            subtitle: `A cluster analysis of states based on different metrics like poverty rate, union membership, and religious demographics.`,
            author: `Devon Andrew Davila`,
            category: "Politics",
            date: "April 15, 2022",
            thumbnail: "https://toplinestats.com/stateclusterimg1.png",
            body: [
                {
                    type: "text",
                    content: `Forget the polls- can we figure out how states will vote based on demographic and behavioral information?`,
                },
                {
                    type: "paragraph",
                    content: `To explore this question, I've put together a small dataset containing information pulled from the web about the demographic makeup of each state (excluding D.C.) The data I'll be looking at contains the following information:`,
                },
                {
                    type: "image",
                    content: "https://toplinestats.com/statescolumns.png",
                },
                {
                    type: "paragraph",
                    content: `Existing literature and data in the field of political science will tell you that many of these fields, namely ethnic and educational information, is highly predictive of voting patterns. But will it work on a statewide level?`,
                },
                {
                    type: "paragraph",
                    content: `Let's clarify something before we go further- the definition of "red" and "blue" states can be subject to interpretation- some reliably liberal states elect Republican governors, and vice versa. So for now, let's define "red" and "blue" as how states tend to vote in presidential elections.`
                },
                {
                    type: "paragraph-link",
                    content: [
                        `There are a couple of important data preparation steps involved here. I'll be following the `,
                        {
                            text: `Real Python`,
                            link: `https://realpython.com/k-means-clustering-python/`,
                        },
                        ` methodology here for scaling, determining the ideal number of components, and utilizing their K-means clustering pipeline.`
                    ],
                },
                {
                    type: "text",
                    content: `First, the data must be scaled.`,
                },
                {
                    type: "image",
                    content: "https://toplinestats.com/scaledstates.png",
                },
                {
                    type: "text",
                    content: `The new scaled_states array would be a bit boring to look at, so let's skip ahead to figuring out how many components we need for this analysis:`,
                },
                {
                    type: "image",
                    content: "https://toplinestats.com/stateclusterimg3.png",
                },
                {
                    type: "text",
                    content: "Looks like we'll need 11 components to explain 95% of the variance in the data. With that, we should now be able to define the Realy Python PCA pipeline and run the analysis:",
                },
                {
                    type: "image",
                    content: "https://toplinestats.com/stateclusterimg4.png",
                },
                {
                    type: "image",
                    content: "https://toplinestats.com/stateclusterimg5.png",
                },
                {
                    type: "text",
                    content: `I've inverted the x axis here for a bit of visualization help, with blue states on the left and red on the right. But without knowing which states are which, this is pretty meaningless. So let's head to Tableau-`
                },
                {
                    type: "image",
                    content: "https://i.ibb.co/F8Cm898/stateclusterimg6.png",
                },
                {
                    type: "paragraph",
                    content: `Here's a simple plot of the states by principal components 1 and 2, where the size of each dot represents the number of electoral votes for each state. The one noteworthy outlier I could find is New Mexico, which has reliably voted for Democratic presidential candidates each election since 2004. Previously, it was considered a swing state.`
                },
                {
                    type: "text",
                    content: `So how well does this fare against results from the most recent presidential election?`
                },
                {
                    type: "paragraph",
                    content: `The model scored misses on Wisconsin, Nevada, Michigan, Arizona, Georgia, New Mexico, and Wisconsin, all of which went blue when the model predicted red (and all of which, save for New Mexico, were considered swing states). That yeilds an accuracy rate of 43/50, or 86%. Not bad!`
                },
                {
                    type: "paragraph",
                    content: `So what, if anything, does this model tell us? My read is that, if the model is to be trusted, Republicans seem to have a bit of room to grow into untapped territory. Specifically, I would be curious to know why the model misidentified New Mexico- is this an opportunity for Republicans? Maybe with the right candidate they can thrive in the states identified here.`
                },

            ],
        }
    ]

export const about = `Topline Stats is a personal project maintained and managed by Devon Andrew Davila, a graduate student at Penn State University with an interest in analytics, data science, and baseball.`

export const copyright = `Copyright © Topline Stats 2021`

export const contact = {
    phone: {
        display: "(201) 919-2964",
        link: "tel:+12019192964"
    },
    email: {
        display: "DevonAndrewDavila@gmail.com",
        link: "mailto:daviladevon@gmail.com"
    },
    twitter: {
        display: "@dad83",
        link: "https://github.com/dad83"
    },
    instagram: {
        display: "@dad83",
        link: "https://github.com/dad83"
    },
    github: {
        display: "@dad83",
        link: "https://github.com/dad83"
    }
}

export const categories = [
    "All",
    'Baseball',
    'Crypto',
    'Politics',
    'Legacy',
    'Media'
]

export const selfie = "";
