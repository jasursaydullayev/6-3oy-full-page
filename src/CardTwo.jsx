import Card2Helper from "./components/Card2Helper"
function CardTwo() {
    return(
        <div className="card2">
            <h1>Summary</h1>
            <Card2Helper title={'Reaction'} percent={'80/100'} />
            <Card2Helper title={'Memory'} percent={'92/100'} />
            <Card2Helper title={'Verbal'} percent={'61/100'} />
            <Card2Helper title={'Visual'} percent={'73/100'} />
            <button className="btn">Continue</button>
        </div>
    )
}

export default CardTwo