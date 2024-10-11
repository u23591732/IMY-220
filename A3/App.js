

// Event Component
class Events extends React.Component
      {
          render()
          {
            return (

            <div style={{paddingLeft : '10px'}}>
             {

                 this.props.dates.map((event,i) => (              
                 
                 <div key = {i} >
                  <h1 style={{fontWeight : 'bold'}}>{event.name}</h1>
                  <br/>
                 <h2>{event.date}</h2>
                 <br/>
                <h3>{event.description}</h3>
                <br/>
                </div>
                              
                  ))

             }

            </div>

            );
          }
      }


  


// EventFeed Component

class EventFeed extends React.Component
      {
        constructor(props)
        {
          super(props);
        }
       
        
          render()
          {
            this.props.dates.sort((a,b) => 
              new Date(b.date) - new Date(a.date) 
            )
            
            return (

            <div>
              <Events dates={this.props.dates}/>
            </div>
                              
                  

             

            

            )
          }
      }

// Search Component
class Search extends React.Component{
  constructor(props)
  {
    super(props);
    this.term = React.createRef();
    this.doSearch = this.doSearch.bind(this);
  }

  doSearch(e) //here is where we extract the serch term then relay it to the parent component
  {
    e.preventDefault();
    let term = this.term.current.value;
    this.props.handleSearch(term); //handleSearch is a placeholder which represents the method that will handle the search
  }

  render(){

    return(
          <div style={{padding : '10px'}}>
            <form onSubmit={this.doSearch}>
              &nbsp;
             
            <input type={'text'} placeholder={'Search something...'} ref={this.term} size={'50'} height={'100'}></input>
              &nbsp;
              &nbsp;
            <input type={'submit'} value={"Search"} size={'50'} height={'100'}></input>


            </form>
          </div>

    )

  }
}

// App Component
class App extends React.Component{

  constructor(props)
  {

    super(props);
    this.events = [
      {
        name: "A Walk in the Park",
        date: "2021-09-19",
        description: "Let's go walking and feed the ducks. #ducks #walk #park #Sunday",
      },
      {
        name: "Beach Day!",
        date: "2019-12-28",
        description: "Let's have a fun day on the beach right before #xmas !! #beachday #summertime"
      },
      {
        name: "Pokemon Go Meetup",
        date: "2016-06-11",
        description: "I wanna meet up with #PokemonGo fans to #catchEmAll #pokemon #meetup"
      },
      {
        name: "Crochet Date!",
        date: "2024-07-09",
        description: "Let's meetup to go crochet in the park. I'll bring the wool!! #park #crochet #meetup"
      },
      {
        name: "Yoga in the Morning",
        date: "2022-07-15",
        description: "Join us for a refreshing morning #yoga session #wellness #morning"
      },
      {
        name: "Hackathon",
        date: "2023-03-10",
        description: "Compete in this year's #hackathon to win amazing prizes and meet feelow #coders #coding"
      },
      {
        name: "Summer Braai",
        date: "2021-08-05",
        description: "Come and enjoy a delicious braai with friends and family #braai #summertime #summer #fun"
      },
      {
        name: "Art Exhibition",
        date: "2018-05-20",
        description: "Explore modern art at the Joburg #art #exhibition from talented artists around the world #creativity"
      },
      {
        name: "Star Wars Under the Stars",
        date: "2023-05-04",
        description: "Watch your favorite #StarWars movies under the open sky! #movienight #outdoor #maythe4thbewithyou"
      },
      {
        name: "Live Concert: Rock the Night",
        date: "2023-06-25",
        description: "Enjoy an electrifying night of live music from your favourite #rock artists #concert #rockmusic #livemusic"
      },
      {
        name: "Farmers Market",
        date: "2024-04-01",
        description: "Fresh produce, homemade goods, and more at the local farmers market this week #farmersmarket #organic"
      },
      {
        name: "Comicon Anyone?",
        date: "2024-09-26",
        description: "Who's going to #comicon this year? Let's #meetup - I'll be Spiderman!"
      }
    ]
    
    this.state = {events : [...this.events] }
    this.searchFeed = this.searchFeed.bind(this);
 }
   


    searchFeed(term) //function to handle the search is implemented,needs a term to be passed in
  {
    console.log("Search is underway");
      if(term === "")
      {

        this.setState({events : [...this.events]});
      }
      else if(term[0] === '#'){
        
        const filteredEvents = this.state.events.filter(event =>
          event.description.includes(term) 
        )
        this.setState({events: filteredEvents});

        
      }
      else
      {
        const filteredEvents = this.state.events.filter(event => 
          event.name.includes(term) == true
          
        )
        this.setState({events: filteredEvents});
      }
  }

  render()
  {

    return(

     

      <div>
         {console.log(`${this.state.events}`)};
         {`search components prop,handlesearch,is the searchFeed function`}
        <Search handleSearch = {this.searchFeed}/> 
        <EventFeed dates = {this.state.events}/>
        
        
      </div>
     

    )
  }

}
// render here
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
// complete this code