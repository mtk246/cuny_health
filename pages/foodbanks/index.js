export default function FoodBanks() {
    return (
        <div className="container">
            <h1>Food Bank Locations</h1>
            <iframe
                allow="geolocation"
                src="https://data.cityofnewyork.us/dataset/Food-Scrap-Drop-Off-Locations-Map/n5y5-3ud3/embed?width=1000&height=625"
                width="1000"
                height="625"
            ></iframe>
        </div>
    )
}
