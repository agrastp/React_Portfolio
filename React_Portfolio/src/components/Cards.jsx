const cards = [
    {
        title: "Project 1",
        description: "Movies",
        // photo: 5,
        // url: ""
    },
    {
        title: "Project 2",
        description: "Movies",
        // photo: 5,
        // url: ""
    },
    {
        title: "Project 3",
        description: "Movies",
        // photo: 5,
        // url: ""
    },
];

export default function ProfilePage() {
    return (
        <div className="cards">
            <h2 id="portfolio" className="m-5 p-20">Welcome to my Portfolio</h2>
            {/* Here we use the map method to iterate through each user and return a new array of list items for each user */}
            {cards.map((cards) => (
                <div className="card" style={{width: '18rem' }} key={cards.title}>
                    <img className="card-img-top" src="..." alt="Card image cap"/>
                     <div className="card-body">
                     <h5 className="card-title"> {`${cards.title}`}</h5>
                     <p className="card-text"> {`${cards.description}`}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                 </div>
                </div>
            ))}

        </div>
    );
}
