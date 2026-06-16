function AlgorithmCard({algorithm}) {

    return (
        <div className="card">
            <h2>
                {algorithm.name}
            </h2>
            <p>
                Category: {algorithm.category}
            </p>
            <p>
                Time: {algorithm.timeComplexity}
            </p>
            <p>
                Space: {algorithm.spaceComplexity}
            </p>
        </div>
    );
}
export default AlgorithmCard;