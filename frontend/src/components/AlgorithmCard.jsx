import { useNavigate } from "react-router-dom";

function AlgorithmCard({ algorithm }) {

  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={() => navigate(`/visualizer/${algorithm.name}`)}
    >

      <h2>{algorithm.name}</h2>

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